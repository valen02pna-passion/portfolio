export type SkillItem = {
  name: string
  icon: string
  color: string
}

export type SkillCategory = {
  labelKey: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    labelKey: 'frontend',
    items: [
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#000000' },
      { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs', color: '#00DC82' },
      { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
      { name: 'Angular', icon: 'simple-icons:angular', color: '#DD0031' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs', color: '#42B883' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui', color: '#18181B' },
      { name: 'Redux', icon: 'simple-icons:redux', color: '#764ABC' },
    ],
  },
  {
    labelKey: 'backend',
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
      { name: 'Django', icon: 'simple-icons:django', color: '#092E20' },
      { name: 'Django REST Framework', icon: 'simple-icons:django', color: '#092E20' },
      { name: '.NET Core', icon: 'simple-icons:dotnet', color: '#512BD4' },
      { name: 'Prisma', icon: 'simple-icons:prisma', color: '#2D3748' },
    ],
  },
  {
    labelKey: 'databases',
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A248' },
      { name: 'Supabase', icon: 'simple-icons:supabase', color: '#3ECF8E' },
      { name: 'SQL', icon: 'mdi:database', color: '#336791' },
    ],
  },
  {
    labelKey: 'cms',
    items: [
      { name: 'Strapi', icon: 'simple-icons:strapi', color: '#2F2E8B' },
      { name: 'Sanity', icon: 'simple-icons:sanity', color: '#F03E2F' },
      { name: 'Prismic', icon: 'simple-icons:prismic', color: '#5163BA' },
    ],
  },
  {
    labelKey: 'ai',
    items: [
      { name: 'AI/LLM Integration', icon: 'mdi:robot-outline', color: '#8B5CF6' },
      { name: 'RAG', icon: 'mdi:brain', color: '#6366F1' },
      { name: 'LangChain', icon: 'simple-icons:langchain', color: '#1C3C3C' },
    ],
  },
  {
    labelKey: 'tools',
    items: [
      { name: 'Vercel', icon: 'simple-icons:vercel', color: '#000000' },
      { name: 'Netlify', icon: 'simple-icons:netlify', color: '#00C7B7' },
      { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'n8n', icon: 'simple-icons:n8n', color: '#FF6D5A' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
      { name: 'Storybook', icon: 'simple-icons:storybook', color: '#FF4785' },
      { name: 'Swagger UI', icon: 'simple-icons:swagger', color: '#85EA2D' },
    ],
  },
]
