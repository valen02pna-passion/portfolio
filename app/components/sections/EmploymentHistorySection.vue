<template>
  <section id="employment" v-motion :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }" class="scroll-mt-24">
    <SectionTitle :title="t('sections.employment')" />

    <UTimeline v-model="activeIndex" :items="timelineItems" color="primary" size="lg" class="mt-8" :ui="{
      root: 'pl-0 md:pl-4',
      date: 'hidden',
      item: 'group relative flex flex-1 gap-10',
      separator: '!bg-slate-600 group-data-[state=completed]:!bg-slate-700 dark:!bg-slate-500 dark:group-data-[state=completed]:!bg-primary',
      indicator: 'group-data-[state=completed]:bg-transparent group-data-[state=active]:bg-transparent',
    }">
      <template #indicator="{ item }">
        <a v-if="item.company.websiteUrl" :href="item.company.websiteUrl" target="_blank" rel="noopener noreferrer"
          class="block" :title="item.company.company">
          <CompanyLogo :logo-url="item.company.logoUrl" :badge="item.company.badge" :company-name="item.company.company"
            :website-url="''" :invert-in-dark="item.company.id === 'descartes'" size="lg" square />
        </a>
        <CompanyLogo v-else :logo-url="item.company.logoUrl" :badge="item.company.badge"
          :company-name="item.company.company" :invert-in-dark="item.company.id === 'descartes'" size="lg" square />
      </template>

      <template #title="{ item }">
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          <a v-if="item.company.websiteUrl" :href="item.company.websiteUrl" target="_blank" rel="noopener noreferrer"
            class="hover:text-sky-600 hover:underline dark:hover:text-sky-400">
            {{ item.company.company }}
          </a>
          <span v-else>{{ item.company.company }}</span>
        </h3>
      </template>

      <template #description="{ item }">
        <div class="divide-y divide-slate-200/60 dark:divide-white/10">
          <div v-for="(role, roleIdx) in item.company.roles" :key="roleIdx" class="py-4 first:pt-0">
            <p class="text-base font-semibold text-slate-900 dark:text-white">{{ role.role }}</p>
            <p class="mt-1 text-base text-slate-500 dark:text-slate-400">{{ role.dates }}</p>
            <p v-if="role.scope"
              class="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500/80 dark:text-slate-400/80">
              <span class="text-base font-bold font-mono">{{ t('employment.scopeLabel') }}</span>
              <span class="text-base">{{ role.scope }}</span>
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-base text-slate-700 dark:text-slate-300">
              <li v-for="bullet in role.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import CompanyLogo from '~/components/ui/CompanyLogo.vue'
import { companies, getCompanyInfo } from '~/data/companies'

const { t, tm, te, rt } = useI18n() as {
  t: (key: string) => string
  tm: (key: string) => unknown
  te: (key: string) => boolean
  rt: (msg: unknown) => string
}

const localizedExperiences = computed<
  Array<{ role: string; company: string; dates: string; scope?: string; bullets: string[] }>
>(() => {
  const items = tm('employment.items') as Array<{
    role: string
    company: string
    dates: string
    scope?: string
    bullets: string[]
  }>
  if (!Array.isArray(items)) return []
  return items.map((item, index) => {
    const base = `employment.items.${index}`
    const bullets = tm(`${base}.bullets`)
    const scope = te(`${base}.scope`) ? t(`${base}.scope`) : undefined
    return {
      role: t(`${base}.role`),
      company: t(`${base}.company`),
      dates: t(`${base}.dates`),
      scope,
      bullets: Array.isArray(bullets) ? bullets.map((b) => rt(b)) : [],
    }
  })
})

type CompanyGroup = {
  company: string
  id: string
  badge: string
  logoUrl: string
  fallbackLogoUrl?: string
  websiteUrl: string
  roles: Array<{ role: string; dates: string; scope?: string; bullets: string[] }>
}

const groupedByCompany = computed<CompanyGroup[]>(() => {
  const groups = new Map<string, CompanyGroup>()
  for (const item of localizedExperiences.value) {
    const companyInfo = getCompanyInfo(item.company)
    const existing = groups.get(item.company)
    if (existing) {
      existing.roles.push({
        role: item.role,
        dates: item.dates,
        scope: item.scope,
        bullets: item.bullets,
      })
    } else {
      groups.set(item.company, {
        company: item.company,
        id: companyInfo?.id ?? '',
        badge: companyInfo?.badge ?? item.company.slice(0, 2).toUpperCase(),
        logoUrl: companyInfo?.logoUrl ?? '',
        fallbackLogoUrl: companyInfo?.fallbackLogoUrl,
        websiteUrl: companyInfo?.websiteUrl ?? '',
        roles: [
          { role: item.role, dates: item.dates, scope: item.scope, bullets: item.bullets },
        ],
      })
    }
  }
  return Array.from(groups.values())
})

type EmploymentTimelineItem = TimelineItem & {
  value: number
  company: CompanyGroup
}

const timelineItems = computed<EmploymentTimelineItem[]>(() =>
  groupedByCompany.value.map((company, idx) => ({
    value: idx,
    date: company.roles[0]?.dates ?? '',
    title: company.company,
    company,
  }))
)

const activeIndex = ref(0)
</script>
