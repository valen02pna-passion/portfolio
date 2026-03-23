export type Project = {
  slug: string
  title: string
  description: string
  githubUrl?: string
  liveDemoUrl?: string
  stack: string[]
  photoUrl?: string
  gallery?: string[]
}

export const projects: Project[] = [
  {
    slug: 'zetabarber-platform',
    title: 'ZetaBarber',
    description:
      'Discovery and booking platform for local barbers built with Next.js and Node.js, using shadcn/ui and React Hooks for a fast, responsive UX. Includes search by city, appointment scheduling, and automated reminders.',
    liveDemoUrl: 'https://zetabarber.it/',
    stack: ['Next.js', 'Node.js', 'shadcn/ui', 'React Hooks'],
    photoUrl:
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.cddbb3f5.webp&w=1920&q=75',
    gallery: [
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.cddbb3f5.webp&w=1920&q=75',
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-platform.9dfb3a7c.png&w=3840&q=75',
    ],
  },
  {
    slug: 'warmly-ai-gtm',
    title: 'Warmly AI GTM Platform',
    description:
      'AI-native GTM platform built with React, Redux, and Tailwind CSS, integrating AI/LLM services with a .NET Core backend. Covers person-level intent signals, AI chat/email engagement, and workflow orchestration for revenue teams.',
    liveDemoUrl: 'https://www.warmly.ai/',
    stack: ['React', 'Redux', 'Tailwind CSS', 'AI/LLM', '.NET Core'],
    photoUrl:
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/695cc5d0a8fb88d0bb174452_e7017e3eebfef000148cd58729c08aaf_hero_visual.webp',
    gallery: [
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/695cc5d0a8fb88d0bb174452_e7017e3eebfef000148cd58729c08aaf_hero_visual.webp',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/68c837e7b96a420203f90e95_e509d482c6ca2b8ae03c6b3afd64cf6d_Live%20Signal%20Tracking%20AI%20Marketing%20Agents%20Identify%20and%20Convert%20high-intent%20leads.avif',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/65fb560e36cdbb6c8506c6de_b4e5381e42761e755057d2c664045f87_AI-chat-n.avif',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/6951aee7a100350c6d28978a_f44ecdcba6edbab914dc2b4f30e37fda_Integrations%20v2.avif',
    ],
  },
  {
    slug: 'gmelius-email-collaboration',
    title: 'Gmelius',
    description:
      'AI email assistant and shared inbox suite built with React on AWS, backed by .NET Core services. Uses AI/LLM fine-tuning for drafting and triage, with Storybook for UI consistency and Swagger UI for APIs.',
    liveDemoUrl: 'https://gmelius.com/',
    stack: ['Storybook', 'Swagger UI', 'React', 'AWS', 'AI/LLM', 'Fine-tuning', '.NET Core'],
    photoUrl:
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135952b409202b1977b57f_b38773de9b3f67e85e413119f29336b3_visual-shared-inbox.avif',
    gallery: [
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135952b409202b1977b57f_b38773de9b3f67e85e413119f29336b3_visual-shared-inbox.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135f6e8c436b60d6cf9a8d_visual-shared-labels.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/6913585375fb32da92cfaeda_visual-automations.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/6913536e10f959ed96e8d55f_visual-analytics.avif',
    ],
  },
]
