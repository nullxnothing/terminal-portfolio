import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrambleReveal } from './scramble.js'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  {
    slug: 'rico-maps',
    desc: 'Solana cabal detection and wallet funding chain visualizer powered by Helius',
    tags: ['Next.js', 'Helius', '3D Graph'],
    github: 'nullxnothing/ricomaps',
    live: 'ricomaps.vercel.app',
  },
  {
    slug: 'trenchlens',
    desc: 'Real-time Solana token intelligence and analytics dashboard',
    tags: ['TypeScript', 'Next.js'],
    github: 'nullxnothing/trenchlens',
    live: 'trenchlens.vercel.app',
  },
  {
    slug: 'solblade',
    desc: 'AI-native Solana wallet CLI with scoped MCP server',
    tags: ['TypeScript', 'MCP'],
    github: 'nullxnothing/solblade',
  },
]

export function renderTools() {
  const container = document.getElementById('tools-list')

  tools.forEach((tool) => {
    const el = document.createElement('div')
    el.className = 'project'
    el.setAttribute('data-animated', 'false')

    const cmd = document.createElement('div')
    cmd.className = 'project-cmd'
    cmd.innerHTML = `<span class="cmd-text"></span>`

    const desc = document.createElement('div')
    desc.className = 'project-desc'

    const tags = document.createElement('div')
    tags.className = 'project-tags'

    const links = document.createElement('div')
    links.className = 'project-links'

    let linksHtml = `<a href="https://github.com/${tool.github}" target="_blank" rel="noopener">source</a>`
    if (tool.live) {
      linksHtml += `<a href="https://${tool.live}" target="_blank" rel="noopener">live</a>`
    }
    links.innerHTML = linksHtml

    el.appendChild(cmd)
    el.appendChild(desc)
    el.appendChild(tags)
    el.appendChild(links)

    el._projectData = {
      cmd: tool.slug,
      desc: tool.desc,
      tags: tool.tags.join(' / '),
    }

    container.appendChild(el)
  })

  const toolEls = container.querySelectorAll('.project')
  toolEls.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => animateTool(el),
    })
  })
}

async function animateTool(el) {
  if (el.getAttribute('data-animated') === 'true') return
  el.setAttribute('data-animated', 'true')

  const data = el._projectData
  const cmdText = el.querySelector('.cmd-text')
  const desc = el.querySelector('.project-desc')
  const tags = el.querySelector('.project-tags')
  const links = el.querySelector('.project-links')

  tags.textContent = data.tags

  desc.style.opacity = '0'
  tags.style.opacity = '0'
  links.style.opacity = '0'

  await scrambleReveal(cmdText, data.cmd, { duration: 500 })

  desc.style.opacity = '1'
  await scrambleReveal(desc, data.desc, { duration: 800 })

  gsap.to(tags, { opacity: 1, duration: 0.4 })
  gsap.to(links, { opacity: 1, duration: 0.4, delay: 0.1 })
}
