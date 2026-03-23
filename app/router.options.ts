import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    
    const stripLocale = (path: string) =>
      path.replace(/^\/(en|es)(?=\/|$)/, '').replace(/^\/$/, '')
    if (stripLocale(to.path) === stripLocale(from.path) && !to.hash) return false
    if (to.hash) {
      return new Promise((resolve) => {
        let tries = 0
        const check = () => {
          const target = document.querySelector(to.hash)
          if (target) {
            resolve({ el: to.hash, behavior: 'smooth' })
            return
          }
          tries += 1
          if (tries > 30) {
            resolve({ top: 0 })
            return
          }
          requestAnimationFrame(check)
        }
        check()
      })
    }
    
    if (to.path !== from.path) return { top: 0 }
    return {}
  },
}

