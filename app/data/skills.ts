export type SkillItem = {
  name: string
  icon: string
  color: string
  descriptionKey?: string
}

export type SkillCategory = {
  labelKey: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    labelKey: 'frontend',
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6', descriptionKey: 'typescript' },
      { name: 'Go', icon: 'simple-icons:go', color: '#00ADD8', descriptionKey: 'go' },
      { name: 'Python', icon: 'simple-icons:python', color: '#3776AB', descriptionKey: 'python' },
      { name: 'Rust', icon: 'simple-icons:rust', color: '#000000', descriptionKey: 'rust' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#000000', descriptionKey: 'nextjs' },
      { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs', color: '#00DC82', descriptionKey: 'nuxtjs' },
      { name: 'React', icon: 'simple-icons:react', color: '#61DAFB', descriptionKey: 'react' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4', descriptionKey: 'tailwindcss' }
    ],
  },
  {
    labelKey: 'backend',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933', descriptionKey: 'nodejs' },
      { name: 'gRPC', icon: 'logos:grpc', color: '#244C5A', descriptionKey: 'grpc' },
      { name: 'eBPF', icon: 'mdi:linux', color: '#FCC624', descriptionKey: 'ebpf' }
    ],
  },
  {
    labelKey: 'databases',
    items: [
      { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#4169E1', descriptionKey: 'postgresql' },
      { name: 'Supabase', icon: 'logos:supabase-icon', color: '#3ECF8E', descriptionKey: 'supabase' },
      { name: 'Redis', icon: 'logos:redis', color: '#DC382D', descriptionKey: 'redis' },
      { name: 'Pinecone', icon: 'logos:pinecone-icon', color: '#000000', descriptionKey: 'pinecone' },
      { name: 'Milvus', icon: 'simple-icons:milvus', color: '#0CA5E9', descriptionKey: 'milvus' }
    ],
  },
  {
    labelKey: 'ai',
    items: [
      { name: 'LangChain', icon: 'simple-icons:langchain', color: '#1C3C3C', descriptionKey: 'langchain' },
      { name: 'RAG', icon: 'mdi:brain', color: '#6366F1', descriptionKey: 'rag' },
      { name: 'Agentic Frameworks', icon: 'mdi:robot-outline', color: '#8B5CF6', descriptionKey: 'agents' }
    ],
  },
  {
    labelKey: 'tools',
    items: [
      { name: 'Vercel', icon: 'simple-icons:vercel', color: '#000000', descriptionKey: 'vercel' },
      { name: 'Netlify', icon: 'simple-icons:netlify', color: '#00C7B7', descriptionKey: 'netlify' },
      { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900', descriptionKey: 'aws' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED', descriptionKey: 'docker' },
      { name: 'Kubernetes', icon: 'simple-icons:kubernetes', color: '#326CE5', descriptionKey: 'k8s' },
      { name: 'Prometheus', icon: 'simple-icons:prometheus', color: '#E6522C', descriptionKey: 'prometheus' },
      { name: 'n8n', icon: 'simple-icons:n8n', color: '#FF6D5A', descriptionKey: 'n8n' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032', descriptionKey: 'git' },
      { name: 'Storybook', icon: 'simple-icons:storybook', color: '#FF4785', descriptionKey: 'storybook' },
      { name: 'Swagger UI', icon: 'simple-icons:swagger', color: '#85EA2D', descriptionKey: 'swagger' },
    ],
  },
]

export function findSkillByName(name: string): SkillItem | undefined {
  for (const category of skillCategories) {
    const item = category.items.find((i) => i.name.toLowerCase() === name.toLowerCase())
    if (item) return item
  }
  return undefined
}
