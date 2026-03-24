export type CompanyInfo = {
  id: string
  logoUrl: string
  badge: string
}

export const companies: Record<string, CompanyInfo> = {
  'Pinecone | San Francisco, CA, USA': {
    id: 'pinecone',
    logoUrl: 'https://cdn.brandfetch.io/idCLuo1dQ8/w/178/h/178/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1718349235873',
    badge: 'PC',
  },
  'Canonical | London, UK': {
    id: 'canonical',
    logoUrl: 'logos:ubuntu',
    badge: 'CA',
  },
  'Wayfair | Boston, MA, USA': {
    id: 'wayfair',
    logoUrl: 'https://assets.wfcdn.com/dm/image/c1704c43-a8d1-46e8-b3bd-e79bf07d330a/Wayfair_Icon.png',
    badge: 'WF',
  },
  'HubSpot | Boston, MA, USA': {
    id: 'hubspot',
    logoUrl: 'logos:hubspot',
    badge: 'HS',
  },
  'Google | Mountain View, CA, USA': {
    id: 'google',
    logoUrl: 'logos:google-icon',
    badge: 'GO',
  },
}

/** Get company info by name – supports exact match or leading part (e.g. "Pinecone") */
export function getCompanyInfo(companyName: string): CompanyInfo | undefined {
  const exact = companies[companyName]
  if (exact) return exact
  const key = companyName.split('|')[0]?.trim() ?? ''
  const entry = Object.entries(companies).find(([k]) => key && k.startsWith(key))
  return entry?.[1]
}
