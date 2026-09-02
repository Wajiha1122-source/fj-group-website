import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const easeOutQuint = (value) => 1 - Math.pow(1 - value, 5)
const clamp01 = (value) => Math.min(1, Math.max(0, value))

function AnimatedPart({
  children,
  delay = 0,
  duration = 1,
  from = [0, 0, 3],
  rotationFrom = [0, 0, 0],
  position = [0, 0, 0],
}) {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const progress = easeOutQuint(
      clamp01((clock.getElapsedTime() - delay) / duration)
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

  return <group ref={ref}>{children}</group>
}

function SolarCell({ position, index }) {
  const glowRef = useRef(null)
  const column = index % 8
  const row = Math.floor(index / 8)
  const direction = column < 4 ? -1 : 1

  useFrame(({ clock }) => {
    if (!glowRef.current) return
    const time = clock.getElapsedTime()
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

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
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
    <Float speed={1.1} rotationIntensity={0.06} floatIntensity={0.08}>
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
              transmission={0.62}
              thickness={0.2}
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
    </Float>
  )
}

export default function SolarAssemblyScene() {
  return (
    <Canvas
      dpr={[1, 1.65]}
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        position={[3.5, 5, 6]}
        intensity={3.2}
        color="#d9f5ff"
      />
      <pointLight position={[-4, -2, 4]} intensity={28} color="#238fca" distance={9} />
      <PanelModel />
      <Environment preset="city" environmentIntensity={0.34} />
    </Canvas>
  )
}
