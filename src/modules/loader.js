import { gsap } from 'gsap'

const BOOT_LINES = [
  'INITIALIZING',
  'LOADING MODULES',
  'CONNECTING',
  'SYSTEM READY',
]

export function initLoader(onComplete) {
  const loader = document.getElementById('loader')
  const loaderText = document.getElementById('loader-text')
  const loaderFill = document.getElementById('loader-fill')
  const lenis = window.__lenis

  // Lock scroll during load
  if (lenis) lenis.stop()

  const tl = gsap.timeline({
    onComplete: () => {
      loader.classList.add('done')
      if (lenis) lenis.start()
      if (onComplete) onComplete()
    },
  })

  // Animate through boot lines with progress bar
  BOOT_LINES.forEach((line, i) => {
    const progress = ((i + 1) / BOOT_LINES.length) * 100

    tl.call(() => {
      loaderText.textContent = line
      loaderFill.style.width = `${progress}%`
    })
    tl.to({}, { duration: 0.35 })
  })

  // Hold briefly on READY
  tl.to({}, { duration: 0.3 })
}
