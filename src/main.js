import './styles/tokens.css'
import './styles/reset.css'
import './styles/typography.css'
import './styles/grid.css'
import './styles/components.css'

import { initSmoothScroll } from './modules/smooth-scroll.js'
import { initLoader } from './modules/loader.js'
import { initBinaryRain } from './modules/binary-rain.js'
import { renderCards } from './modules/cards.js'
import { initScrollAnimations } from './modules/scroll-animations.js'
import { initNavigation } from './modules/navigation.js'

// Init canvas rain (subtle)
const canvas = document.getElementById('rain')
initBinaryRain(canvas)

// Init smooth scroll
initSmoothScroll()

// Render project and tool cards
renderCards()

// Init mobile nav
initNavigation()

// Start loader → then reveal content
window.addEventListener('load', () => {
  initLoader(() => {
    initScrollAnimations()
  })
})
