import { useEffect, useRef } from 'react'
import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './slideshow.css'

gsap.registerPlugin(ScrollTrigger)

function Slideshow({ children }) {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(() => {
    const root = rootRef.current
    const slides = gsap.utils.toArray('.slide', root)
    if (!slides.length) return

    const last = slides.length - 1
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const dotEls = dotsRef.current
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: () => `+=${last * window.innerHeight}`,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: (value, self) => {
                const range = self.end - self.start
                if (!range) return value
                const raw = (window.scrollY - self.start) / range
                const index = Math.max(0, Math.min(last, Math.round(raw * last)))
                return index / last
              },
              duration: { min: 0.15, max: 0.4 },
              ease: 'power1.inOut',
              inertia: false,
            },
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const range = self.end - self.start
              const raw = range ? (window.scrollY - self.start) / range : 0
              const active = Math.max(0, Math.min(last, Math.round(raw * last)))
              dotEls.forEach((dot, i) => {
                if (dot) dot.classList.toggle('active', i === active)
              })
            },
          },
        })

        tl.to(trackRef.current, {
          y: () => -last * 100 + 'vh',
          ease: 'none',
          duration: last,
        }, 0)

        slides.forEach((slide, i) => {
          const targets = slide.querySelectorAll('[data-slide-in]')
          if (!targets.length) return

          if (i === 0) {
            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: 80, scale: 0.94 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power2.out',
                delay: 0.2,
              },
            )
          } else {
            const staggerEnd = 0.4 + (targets.length - 1) * 0.08
            const position = Math.max(0, i - staggerEnd)
            tl.fromTo(
              targets,
              { autoAlpha: 0, y: 80, scale: 0.94 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power2.out',
              },
              position,
            )
          }
        })
      }, root)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [children])

  return (
    <section className="slides" ref={rootRef} aria-label="Portfolio slideshow">
      <div className="slides-track" ref={trackRef}>
        {children}
      </div>
      {/* <div className="slide-progress" aria-hidden="true">
        {Array.from({ length: React.Children.count(children) }).map((_, i) => (
          <span key={i} className="slide-dot" ref={el => { dotsRef.current[i] = el }} />
        ))}
      </div> */}
    </section>
  )
}

export default Slideshow