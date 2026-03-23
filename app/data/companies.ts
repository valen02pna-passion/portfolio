export type CompanyInfo = {
  id: string
  logoUrl: string
  badge: string
  websiteUrl: string
  /** Fallback when primary logo fails (e.g. favicon) */
  fallbackLogoUrl?: string
}

// Favicon as fallback for companies without direct logo URLs
function faviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

export const companies: Record<string, CompanyInfo> = {
  'Descartes | Waterloo, Ontario, Canada': {
    id: 'descartes',
    logoUrl: '/icons/descartes_systems_group_logo.jpg',
    fallbackLogoUrl: faviconUrl('descartes.com'),
    badge: 'DE',
    websiteUrl: 'https://www.descartes.com/',
  },
  'Globalization Partners | Boston, MA, USA': {
    id: 'globalization-partners',
    logoUrl: '/icons/g_p_logo.jpg',
    fallbackLogoUrl: faviconUrl('g-p.com'),
    badge: 'GP',
    websiteUrl: 'https://www.g-p.com/',
  },
  'Data-Core Systems Inc. | Bristol, PA, USA': {
    id: 'datacore',
    logoUrl: '/icons/data_core_systems_inc_logo.jpg',
    fallbackLogoUrl: faviconUrl('datacoresystems.com'),
    badge: 'DC',
    websiteUrl: 'https://datacoresystems.com/',
  },
  'Chegg Inc. | Santa Clara, CA, USA': {
    id: 'chegg',
    logoUrl: '/icons/chegg_inc__logo.jpg',
    fallbackLogoUrl: faviconUrl('chegg.com'),
    badge: 'CH',
    websiteUrl: 'https://www.chegg.com/',
  },
}

/** Get company info by name – supports exact match or leading part (e.g. "Descartes") */
export function getCompanyInfo(companyName: string): CompanyInfo | undefined {
  const exact = companies[companyName]
  if (exact) return exact
  const key = companyName.split('|')[0]?.trim() ?? ''
  const entry = Object.entries(companies).find(([k]) => key && k.startsWith(key))
  return entry?.[1]
}
