'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { RunningContext } from './clock'
import BrowserFrame from '../BrowserFrame'
import s from './ArgusWalkthrough.module.css'
import { ArgusShell } from './ArgusScenes'

/**
 * Shared player for the coded Argus walkthroughs (home hero and Services).
 *
 * - Starts at scene 1 only once the frame is at least half visible, and
 *   pauses every animation when it scrolls away or the tab is hidden.
 * - Auto-advances about every 6 seconds and loops; hovering or focusing
 *   pauses the timer; the step dots jump to a scene.
 * - With reduced motion, CSS shows one still scene and hides the rest.
 */

export type SceneDef = {
  key: string
  name: string
  stage: string
  address: string
  caption: string
  Component: ComponentType
}

export default function ArgusPlayer({
  scenes,
  still,
  label,
  className = '',
}: {
  scenes: SceneDef[]
  /** Index of the scene shown as a still when motion is reduced. */
  still: number
  label: string
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        const half = entry.isIntersecting && entry.intersectionRatio >= 0.5
        setInView(half)
        if (half) setStarted(true)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    io.observe(el)
    const onVis = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  const running = started && inView && pageVisible
  const timerPaused = !running || hovered || focused
  const scene = scenes[index]
  const stillScene = scenes[still]
  const StillComponent = stillScene.Component
  const Current = scene.Component

  const next = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setIndex((i) => (i + 1) % scenes.length)
  }

  return (
    <div
      className={`${s.walkthrough} ${className}`}
      data-running={running ? 'true' : 'false'}
      data-timer-paused={timerPaused ? 'true' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false)
      }}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div ref={frameRef}>
        <BrowserFrame
          viewportClassName={s.viewport}
          tag="Product preview"
          address={
            <>
              <span className={s.live}>{scene.address}</span>
              <span className={s.still}>{stillScene.address}</span>
            </>
          }
        >
          <div className={s.live} aria-hidden="true">
            <ArgusShell stage={scene.stage}>
              <RunningContext.Provider value={running ? 'running' : 'paused'}>
                <div key={scene.key} className={s.sceneWrap}>
                  <Current />
                </div>
              </RunningContext.Provider>
            </ArgusShell>
          </div>
          <div className={`${s.still} ${s.static}`} aria-hidden="true">
            <ArgusShell stage={stillScene.stage}>
              <RunningContext.Provider value="still">
                <div className={s.sceneWrap} data-still="true">
                  <StillComponent />
                </div>
              </RunningContext.Provider>
            </ArgusShell>
          </div>
        </BrowserFrame>
      </div>

      <p className={s.caption}>
        <span className={s.live}>{scene.caption}</span>
        <span className={s.still}>{stillScene.caption}</span>
      </p>

      <div className={`${s.live} ${s.dots}`}>
        {scenes.map((sc, i) => (
          <button
            key={sc.key}
            type="button"
            className={s.dot}
            aria-label={`Show step ${i + 1}: ${sc.name}`}
            aria-current={i === index ? 'step' : undefined}
            onClick={() => {
              setStarted(true)
              setIndex(i)
            }}
          >
            <span className={s.dotTrack}>
              {i === index && <span key={index} className={s.dotFill} onAnimationEnd={next} />}
            </span>
            <span className={s.dotLabel}>
              <span className={s.dotNo}>0{i + 1}</span> {sc.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
