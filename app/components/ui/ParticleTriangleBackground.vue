<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-0"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)

const particleCount = 80
const connectionDistance = 120
const particleSpeed = 0.3

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

let particles: Particle[] = []
let animationId = 0

function initParticles(width: number, height: number) {
  particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * particleSpeed,
    vy: (Math.random() - 0.5) * particleSpeed,
  }))
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)

  // Update and draw particles
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]!
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > width) p.vx *= -1
    if (p.y < 0 || p.y > height) p.vy *= -1
    p.x = Math.max(0, Math.min(width, p.x))
    p.y = Math.max(0, Math.min(height, p.y))
  }

  // Draw connections (lines between nearby particles - forms triangles)
  const isDark = document.documentElement.classList.contains('dark')
  ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(100, 116, 139, 0.18)'
  ctx.lineWidth = 0.5
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i]
      const b = particles[j]
      if (!a || !b) continue
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.hypot(dx, dy)
      if (dist < connectionDistance) {
        ctx.globalAlpha = 1 - dist / connectionDistance
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }
  ctx.globalAlpha = 1

  // Draw particle dots
  ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.35)' : 'rgba(100, 116, 139, 0.45)'
  for (const p of particles) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
    ctx.fill()
  }

  animationId = requestAnimationFrame(animate)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return

  const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
  const width = window.innerWidth
  const height = window.innerHeight

  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  initParticles(width, height)
}

onMounted(() => {
  resize()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>
