const projects = [
  {
    name: 'mpp-spl',
    desc: 'Charge AI agents in any SPL token via Machine Payments Protocol - including pump.fun tokens from bonding curve',
    tags: ['TypeScript', 'Solana', 'MPP'],
    github: 'nullxnothing/mpp-spl',
    live: 'npmjs.com/package/mpp-spl',
    image: '/assets/arcan3/subway.webp',
  },
  {
    name: 'internet402',
    desc: 'Solana-native HTTP 402 payment protocol for AI agents',
    tags: ['TypeScript', 'Solana'],
    github: 'nullxnothing/internet402',
    live: 'internet402.vercel.app',
    image: '/assets/arcan3/sign.webp',
  },
  {
    name: 'quanta',
    desc: 'Agent-native market making infrastructure on Solana',
    tags: ['TypeScript', 'Solana'],
    github: 'nullxnothing/quanta',
    image: '/assets/arcan3/z-render.webp',
  },
  {
    name: 'devcred-agent',
    desc: 'Autonomous agent monitoring pump.fun launches and scoring deployer reputation',
    tags: ['TypeScript', 'AI Agent'],
    github: 'nullxnothing/devcred-agent',
    image: '/assets/arcan3/map.webp',
  },
  {
    name: 'nullset-wallet-recovery',
    desc: 'Reclaim rent accounts, creator rewards, and track locked tokens across wallets',
    tags: ['TypeScript', 'Solana'],
    github: 'nullxnothing/nullset-solana-wallet-recovery',
    image: '/assets/arcan3/tree-render.webp',
  },
]

const tools = [
  {
    name: 'Rico Maps',
    desc: 'Solana cabal detection and wallet funding chain visualizer powered by Helius',
    tags: ['Next.js', 'Helius', '3D Graph'],
    github: 'nullxnothing/ricomaps',
    live: 'ricomaps.vercel.app',
    gif: '/assets/arcan3/spine-animation.gif',
  },
  {
    name: 'TrenchLens',
    desc: 'Real-time Solana token intelligence and analytics dashboard',
    tags: ['TypeScript', 'Next.js'],
    github: 'nullxnothing/trenchlens',
    live: 'trenchlens.vercel.app',
    gif: '/assets/arcan3/comp-animation.gif',
  },
  {
    name: 'Solblade',
    desc: 'AI-native Solana wallet CLI with scoped MCP server',
    tags: ['TypeScript', 'MCP'],
    github: 'nullxnothing/solblade',
    gif: '/assets/arcan3/arch-animation.gif',
  },
]

function createCard(item) {
  const card = document.createElement('div')
  card.className = 'card reveal'

  let linksHtml = `<a href="https://github.com/${item.github}" target="_blank" rel="noopener" class="card-link">Source</a>`
  if (item.live) {
    linksHtml += `<a href="https://${item.live}" target="_blank" rel="noopener" class="card-link">Live</a>`
  }

  const imageSrc = item.image || item.gif || null
  const imageHtml = imageSrc
    ? `<div class="card-image"><img src="${imageSrc}" alt="${item.name}" loading="lazy" /></div>`
    : ''

  card.innerHTML = `
    ${imageHtml}
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-tags">${item.tags.join(' / ')}</div>
      <div class="card-links">${linksHtml}</div>
    </div>
  `

  return card
}

export function renderCards() {
  const projectsGrid = document.getElementById('projects-grid')
  const toolsGrid = document.getElementById('tools-grid')

  projects.forEach((p) => projectsGrid.appendChild(createCard(p)))
  tools.forEach((t) => toolsGrid.appendChild(createCard(t)))
}
