import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { scrambleReveal } from './scramble.js'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {
  animateHero()
  animateAbout()
  animateCards()
  animateTextReveals()
}

function animateHero() {
  const name = document.querySelector('.hero-name')
  const tag = document.querySelector('.hero-tag')
  const desc = document.querySelector('.hero-desc')
  const meta = document.querySelectorAll('.hero-meta-item')
  const scroll = document.querySelector('.scroll-indicator')

  const tl = gsap.timeline({ delay: 0.2 })

  // Tag fades in
  tl.from(tag, { opacity: 0, y: 10, duration: 0.5 })

  // Name scramble reveal
  tl.call(() => {
    scrambleReveal(name, 'nullxnothing', { duration: 1200, stagger: 'left-to-right' })
  })
  tl.to({}, { duration: 1.3 })

  // Description
  tl.from(desc, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.4')

  // Meta items stagger
  tl.from(meta, {
    opacity: 0,
    y: 15,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out',
  }, '-=0.3')

  // Scroll indicator
  tl.from(scroll, { opacity: 0, duration: 0.6 }, '-=0.2')
}

function animateAbout() {
  const section = document.getElementById('about')
  const card = document.querySelector('.about-card')

  if (!section || !card) return

  // Sticky pin — card scales from 0.92 to 1, border-radius from 24 to 0
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: '+=40%',
    pin: true,
    scrub: 1,
    animation: gsap.to(card, {
      scale: 1,
      borderRadius: '0px',
      margin: 0,
      ease: 'none',
    }),
  })

  // Text reveals inside card
  const heading = section.querySelector('.about-heading')
  const texts = section.querySelectorAll('.about-text')

  gsap.from(heading, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: heading,
      start: 'top 80%',
      once: true,
    },
  })

  texts.forEach((text) => {
    gsap.from(text, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
        once: true,
      },
    })
  })
}

function animateCards() {
  const cards = document.querySelectorAll('.card.reveal')

  cards.forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: (i % 2) * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
    })
  })
}

function animateTextReveals() {
  const elements = document.querySelectorAll('.reveal-lines')

  elements.forEach((el) => {
    const split = new SplitType(el, { types: 'lines' })

    split.lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.className = 'line-wrapper'
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    })
  })

  // Section headers
  const headers = document.querySelectorAll('.section-title')
  headers.forEach((h) => {
    gsap.from(h, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: h,
        start: 'top 85%',
        once: true,
      },
    })
  })
}
