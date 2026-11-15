'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

/** Whether the scene is animating, paused (not started / off screen) or a still. */
export type Mode = 'running' | 'paused' | 'still'
export const RunningContext = createContext<Mode>('running')

/** Seconds the current scene has been running, frozen while paused. */
export function useSceneClock(limit: number) {
  const mode = useContext(RunningContext)
  const running = mode === 'running'
  const [t, setT] = useState(0)
  const elapsed = useRef(0)

  useEffect(() => {
    if (!running || elapsed.current >= limit) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      elapsed.current = Math.min(limit, elapsed.current + (now - last) / 1000)
      last = now
      setT(elapsed.current)
      if (elapsed.current < limit) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, limit])

  return mode === 'still' ? limit : t
}
