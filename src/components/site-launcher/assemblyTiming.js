// Final camera movement ends at 6.15; hold the finished panel before fading.
export const ASSEMBLY_END = 8.2

export function advanceAssemblyTime(time, delta, hidden = false) {
  if (hidden) return time
  // Keep long frames from jumping past assembly stages; run at a calmer pace.
  return Math.min(ASSEMBLY_END, time + Math.min(Math.max(delta, 0), 0.05) * 0.8)
}
