export function initNavigation() {
  const toggle = document.getElementById('menu-toggle')
  const overlay = document.getElementById('menu-overlay')
  const links = overlay.querySelectorAll('.menu-overlay-link')

  toggle.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open')
    overlay.classList.toggle('open')
    toggle.classList.toggle('active')

    const lenis = window.__lenis
    if (lenis) {
      isOpen ? lenis.start() : lenis.stop()
    }
  })

  // Close on link click
  links.forEach((link) => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open')
      toggle.classList.remove('active')
      const lenis = window.__lenis
      if (lenis) lenis.start()
    })
  })
}
