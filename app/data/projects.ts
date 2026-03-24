export type Project = {
  slug: string
  title: string
  description: string
  githubUrl?: string
  liveDemoUrl?: string
  stack: string[]
  photoUrl?: string
  gallery?: string[]
  detailedDescription?: string
}

export const projects: Project[] = [
  {
    slug: 'rag-pipeline',
    title: 'High-Performance RAG Pipeline',
    description:
      'A scalable retrieval-augmented generation pipeline using Milvus for vector storage, Go for the high-throughput indexing layer, and React for the query interface. Capable of processing 1M+ documents per hour.',
    liveDemoUrl: 'https://github.com/valen02pna-passion/rag-pipeline',
    stack: ['Go', 'Milvus', 'React', 'gRPC'],
    photoUrl: '/projects/rag_pipeline.png',
    gallery: [
      '/projects/rag_pipeline.png'
    ],
    detailedDescription: 'This project focuses on building a robust RAG pipeline capable of handling massive datasets. By leveraging Milvus for high-speed vector retrieval and Go for efficient data processing, we achieved sub-second query times across millions of records. The architecture includes a custom indexing layer that prioritizes document relevance and a modular React frontend for intuitive data exploration.'
  },
  {
    slug: 'llm-agent-framework',
    title: 'LLM-Orchestrated Agent Framework',
    description:
      'A technical implementation of an autonomous agent framework. Designed with Python and LangChain, deployed on Kubernetes. Features dynamic tool usage and multi-agent consensus.',
    liveDemoUrl: 'https://github.com/valen02pna-passion/llm-agent-framework',
    stack: ['Python', 'LangChain', 'Kubernetes', 'Docker'],
    photoUrl: '/projects/llm_agents.png',
    gallery: [
      '/projects/llm_agents.png'
    ],
    detailedDescription: 'The LLM-Orchestrated Agent Framework is designed for complex task automation through autonomous agents. Using Python and LangChain, we implemented a system where multiple agents can collaborate, share tools, and reach a consensus on actions. Deployed on Kubernetes, the framework is highly scalable and supports real-time monitoring of agent reasoning and tool usage.'
  },
  {
    slug: 'microservices-engine',
    title: 'Distributed Microservices Engine',
    description:
      'A high-performance observability and routing engine for microservices using Rust and eBPF kernel probes. Exposes metrics via a Next.js visualization dashboard.',
    liveDemoUrl: 'https://github.com/valen02pna-passion/microservices-engine',
    stack: ['Rust', 'eBPF', 'Next.js', 'Prometheus'],
    photoUrl: '/projects/microservices_engine.png',
    gallery: [
      '/projects/microservices_engine.png'
    ],
    detailedDescription: 'This Distributed Microservices Engine provides deep observability into service-to-service communications. Built with Rust and leveraging eBPF for non-invasive kernel-level monitoring, it captures fine-grained metrics without adding significant latency. Data is piped into a high-performance Prometheus backend and visualized through a custom Next.js dashboard, enabling engineers to quickly identify and resolve bottlenecks in distributed environments.'
  },
]
