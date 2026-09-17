/* Three.js scene and camera objects are mutable engine resources, not React state. */
/* eslint-disable react-hooks/immutability */
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { createContext, useContext, useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js"
import { advanceAssemblyTime, ASSEMBLY_END } from "./assemblyTiming.js"

const easeOutQuint = (value) => 1 - Math.pow(1 - value, 5)
const clamp01 = (value) => Math.min(1, Math.max(0, value))
const AnimationTime = createContext(null)

function Timeline({ children, onReady, onComplete, onProgress, onError }) {
  const { gl, scene, camera, size } = useThree()
  const prepared = useRef(false)
  const time = useRef(0)
  const frames = useRef(0)
  const complete = useRef(false)

  useEffect(() => {
    // Keep the entire assembled panel in frame in portrait and landscape.
    camera.position.z = Math.max(7.4, 3.2 / (Math.tan(THREE.MathUtils.degToRad(21)) * (size.width / size.height)))
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height])

  useEffect(() => {
    let cancelled = false
    let recoveryTimer
    const room = new RoomEnvironment()
    const generator = new THREE.PMREMGenerator(gl)
    const environment = generator.fromScene(room, 0.04)
    scene.environment = environment.texture
    scene.environmentIntensity = 0.45
    const prepare = async () => {
      try {
        prepared.current = false
        await gl.compileAsync(scene, camera)
        if (!cancelled) {
          frames.current = 0
          prepared.current = true
        }
      } catch {
        if (!cancelled) onError()
      }
    }
    const lost = (event) => {
      event.preventDefault()
      prepared.current = false
      recoveryTimer = window.setTimeout(onError, 10000)
    }
    const restored = () => {
      window.clearTimeout(recoveryTimer)
      prepare()
    }
    gl.domElement.addEventListener('webglcontextlost', lost)
    gl.domElement.addEventListener('webglcontextrestored', restored)
    prepare()
    return () => {
      cancelled = true
      window.clearTimeout(recoveryTimer)
      gl.domElement.removeEventListener('webglcontextlost', lost)
      gl.domElement.removeEventListener('webglcontextrestored', restored)
      scene.environment = null
      environment.dispose()
      generator.dispose()
      room.dispose()
    }
  }, [gl, scene, camera, onError])

  useFrame((_, delta) => {
    if (!prepared.current) return
    frames.current += 1
    // Let the first render compile shaders before starting the assembly clock.
    if (frames.current === 2) onReady()
    if (frames.current <= 2 || document.hidden) return
    time.current = advanceAssemblyTime(time.current, delta, document.hidden)
    onProgress(time.current / ASSEMBLY_END)
    if (time.current >= ASSEMBLY_END && !complete.current) {
      complete.current = true
      onComplete()
    }
  }, -1)

  return <AnimationTime.Provider value={time}>{children}</AnimationTime.Provider>
}

function AnimatedPart({
  children,
  delay = 0,
  duration = 1,
  from = [0, 0, 3],
  rotationFrom = [0, 0, 0],
  position = [0, 0, 0],
}) {
  const ref = useRef(null)
  const time = useContext(AnimationTime)

  useFrame(() => {
    if (!ref.current) return
    const progress = easeOutQuint(
      clamp01((time.current - delay) / duration)
    )

    ref.current.position.set(
      THREE.MathUtils.lerp(from[0], position[0], progress),
      THREE.MathUtils.lerp(from[1], position[1], progress),
      THREE.MathUtils.lerp(from[2], position[2], progress)
    )
    ref.current.rotation.set(
      THREE.MathUtils.lerp(rotationFrom[0], 0, progress),
      THREE.MathUtils.lerp(rotationFrom[1], 0, progress),
      THREE.MathUtils.lerp(rotationFrom[2], 0, progress)
    )
    ref.current.scale.setScalar(Math.max(0.001, progress))
  })

  return <group ref={ref} scale={0.001}>{children}</group>
}

function SolarCell({ position, index }) {
  const glowRef = useRef(null)
  const timeline = useContext(AnimationTime)
  const column = index % 8
  const row = Math.floor(index / 8)
  const direction = column < 4 ? -1 : 1

  useFrame(() => {
    if (!glowRef.current) return
    const time = timeline.current
    const pulse = clamp01((time - 4.05 - index * 0.018) / 0.42)
    glowRef.current.emissiveIntensity = pulse * (1.1 - pulse * 0.62)
  })

  return (
    <AnimatedPart
      delay={1.25 + index * 0.027}
      duration={0.88}
      from={[
        position[0] + direction * (2.8 + column * 0.12),
        position[1] + (row - 2) * 0.45,
        2.4 + (index % 3) * 0.35,
      ]}
      rotationFrom={[direction * 0.45, direction * 0.32, direction * 0.18]}
      position={position}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.43, 0.39, 0.045]} />
        <meshPhysicalMaterial
          ref={glowRef}
          color="#0d3f72"
          emissive="#39b9f2"
          emissiveIntensity={0}
          metalness={0.3}
          roughness={0.25}
          clearcoat={0.9}
        />
      </mesh>
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[0.012, 0.36]} />
        <meshBasicMaterial color="#8bc9e5" transparent opacity={0.62} />
      </mesh>
    </AnimatedPart>
  )
}

function PanelModel() {
  const timeline = useContext(AnimationTime)
  const panelRef = useRef(null)
  const energyRef = useRef(null)
  const cells = useMemo(() => {
    const positions = []
    for (let row = 0; row < 5; row += 1) {
      for (let column = 0; column < 8; column += 1) {
        positions.push([
          -1.65 + column * 0.47,
          0.86 - row * 0.43,
          0.1,
        ])
      }
    }
    return positions
  }, [])

  useFrame(() => {
    const time = timeline.current
    if (panelRef.current) {
      const settle = easeOutQuint(clamp01(time / 2.6))
      panelRef.current.rotation.x = THREE.MathUtils.lerp(-0.46, -0.18, settle)
      panelRef.current.rotation.y = THREE.MathUtils.lerp(-0.72, 0.2, settle)
      panelRef.current.rotation.z = THREE.MathUtils.lerp(0.16, -0.035, settle)

      if (time > 4.45) {
        const heroMove = easeOutQuint(clamp01((time - 4.45) / 1.7))
        panelRef.current.rotation.y = THREE.MathUtils.lerp(0.2, -0.03, heroMove)
        panelRef.current.rotation.x = THREE.MathUtils.lerp(-0.18, -0.04, heroMove)
        panelRef.current.scale.setScalar(1 + heroMove * 0.23)
      }
    }

    if (energyRef.current) {
      const sweep = clamp01((time - 4.05) / 1.2)
      energyRef.current.position.x = THREE.MathUtils.lerp(-2.2, 2.2, sweep)
      energyRef.current.material.opacity =
        time > 4.0 && time < 5.45 ? Math.sin(sweep * Math.PI) * 0.5 : 0
    }
  })

  return (
    <group>
      <group ref={panelRef}>
        <AnimatedPart delay={0.15} duration={1.15} from={[0, -3.8, -1.8]}>
          <mesh receiveShadow>
            <boxGeometry args={[4.12, 2.48, 0.1]} />
            <meshStandardMaterial color="#061a30" metalness={0.42} roughness={0.42} />
          </mesh>
        </AnimatedPart>

        {cells.map((position, index) => (
          <SolarCell key={`${position[0]}-${position[1]}`} position={position} index={index} />
        ))}

        <AnimatedPart delay={2.35} duration={0.9} from={[0, 3.7, 1.7]} position={[0, 1.24, 0.16]} rotationFrom={[0.4, 0, 0.3]}>
          <mesh castShadow>
            <boxGeometry args={[4.35, 0.12, 0.18]} />
            <meshStandardMaterial color="#a6b4c1" metalness={0.94} roughness={0.2} />
          </mesh>
        </AnimatedPart>
        <AnimatedPart delay={2.48} duration={0.9} from={[0, -3.7, 1.7]} position={[0, -1.24, 0.16]} rotationFrom={[-0.4, 0, -0.3]}>
          <mesh castShadow>
            <boxGeometry args={[4.35, 0.12, 0.18]} />
            <meshStandardMaterial color="#a6b4c1" metalness={0.94} roughness={0.2} />
          </mesh>
        </AnimatedPart>
        <AnimatedPart delay={2.6} duration={0.9} from={[-5, 0, 1.2]} position={[-2.12, 0, 0.16]} rotationFrom={[0, -0.5, -0.4]}>
          <mesh castShadow>
            <boxGeometry args={[0.12, 2.38, 0.18]} />
            <meshStandardMaterial color="#a6b4c1" metalness={0.94} roughness={0.2} />
          </mesh>
        </AnimatedPart>
        <AnimatedPart delay={2.72} duration={0.9} from={[5, 0, 1.2]} position={[2.12, 0, 0.16]} rotationFrom={[0, 0.5, 0.4]}>
          <mesh castShadow>
            <boxGeometry args={[0.12, 2.38, 0.18]} />
            <meshStandardMaterial color="#a6b4c1" metalness={0.94} roughness={0.2} />
          </mesh>
        </AnimatedPart>

        <AnimatedPart delay={3.05} duration={0.82} from={[0, 0, 4]} position={[0, 0, 0.25]} rotationFrom={[0.6, 0.15, 0]}>
          <mesh>
            <boxGeometry args={[4.08, 2.28, 0.025]} />
            <meshPhysicalMaterial
              color="#72c7e8"
              transparent
              opacity={0.12}
              roughness={0.05}
            />
          </mesh>
        </AnimatedPart>

        <AnimatedPart delay={3.28} duration={0.72} from={[0, -2.8, -2]} position={[0, -0.25, -0.13]} rotationFrom={[0.8, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.66, 0.42, 0.22]} />
            <meshStandardMaterial color="#10171f" roughness={0.5} />
          </mesh>
        </AnimatedPart>

        <mesh ref={energyRef} position={[-2.2, 0, 0.31]}>
          <planeGeometry args={[0.34, 2.18]} />
          <meshBasicMaterial
            color="#8be1ff"
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function SolarAssemblyScene({ onReady, onComplete, onError, onProgress }) {
  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      fallback={<div className="fj-solar-intro__fallback" />}
    >
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        position={[3.5, 5, 6]}
        intensity={3.2}
        color="#d9f5ff"
      />
      <pointLight position={[-4, -2, 4]} intensity={28} color="#238fca" distance={9} />
      <hemisphereLight args={["#d9f5ff", "#173047", 1.4]} />
      <Timeline onReady={onReady} onComplete={onComplete} onProgress={onProgress} onError={onError}>
        <PanelModel />
      </Timeline>
    </Canvas>
  )
}
