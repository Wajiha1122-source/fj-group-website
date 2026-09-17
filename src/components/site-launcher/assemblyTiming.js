// The light sweep ends at 6.1; briefly hold the finished panel before fading.
export const ASSEMBLY_END = 7.2

export function advanceAssemblyTime(time, delta, hidden = false) {
  if (hidden) return time
  // Move briskly while keeping long frames from jumping past assembly stages.
  return Math.min(ASSEMBLY_END, time + Math.min(Math.max(delta, 0), 0.05) * 1.2)
}
