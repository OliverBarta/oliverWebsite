import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './slideshow.css'

gsap.registerPlugin(ScrollTrigger)

function Slideshow({ children }) {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const dotsRef = useRef([])
  const stRef = useRef(null)
  const [index, setIndex] = useState(0)

  const goToSlide = (target) => {
    const root = rootRef.current
    if (!root) return
    const slides = gsap.utils.toArray('.slide', root)
    const last = slides.length - 1
    if (!slides.length) return
    const clamped = Math.max(0, Math.min(last, target))
    const st = stRef.current || ScrollTrigger.getAll().find(trigger => trigger.trigger === root)
    const range = st ? st.end - st.start : last * window.innerHeight
    const top = (st ? st.start : 0) + (clamped / last) * range
    window.scrollTo({ top, behavior: 'smooth' })
  }

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
              stRef.current = self
              const range = self.end - self.start
              const raw = range ? (window.scrollY - self.start) / range : 0
              const active = Math.max(0, Math.min(last, Math.round(raw * last)))
              setIndex(active)
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
      {React.Children.count(children) > 1 && (
        <div className="slide-arrows" aria-hidden="true">
          <button
            type="button"
            className="slide-arrow slide-arrow--prev"
            onClick={() => goToSlide(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          <button
            type="button"
            className="slide-arrow slide-arrow--next"
            onClick={() => goToSlide(index + 1)}
            disabled={index === React.Children.count(children) - 1}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Slideshow