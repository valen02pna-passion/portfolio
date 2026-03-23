import type { CompanyInfo } from '~/data/companies'

const primaryFailed = ref<Set<string>>(new Set())
const logoErrors = ref<Set<string>>(new Set())

export function useCompanyLogo() {
  function handleError(companyKey: string, isFallback = false) {
    if (isFallback) {
      logoErrors.value = new Set(logoErrors.value).add(companyKey)
    } else {
      primaryFailed.value = new Set(primaryFailed.value).add(companyKey)
    }
  }

  function displayUrl(companyKey: string, info: CompanyInfo | undefined): string {
    if (!info) return ''
    // Local paths (/icons/...) always retry – don't use persisted error state
    const isLocal = info.logoUrl?.startsWith('/')
    if (isLocal) return info.logoUrl || ''
    if (logoErrors.value.has(companyKey)) return ''
    if (primaryFailed.value.has(companyKey) && info.fallbackLogoUrl) return info.fallbackLogoUrl
    return info.logoUrl || ''
  }

  function isPrimaryFailed(companyKey: string) {
    return primaryFailed.value.has(companyKey)
  }

  return { handleError, displayUrl, isPrimaryFailed }
}
