// Options for the contact form, and mapping of old URL parameters
// (from the previous Home/Products pages) onto them.

export const INTERESTS = [
  { value: 'consultation', label: 'General consultation' },
  { value: 'automation', label: 'QC review automation' },
  { value: 'consulting', label: 'GLP/GMP compliance consulting' },
  { value: 'sop-templates', label: 'SOP template packages' },
  { value: 'lims-eln', label: 'LIMS & ELN support' },
  { value: 'training', label: 'Training' },
  { value: 'other', label: 'Something else' },
] as const

export type Interest = (typeof INTERESTS)[number]['value']

const VALUES = new Set<string>(INTERESTS.map((i) => i.value))

export function interestLabel(value: string): string {
  return INTERESTS.find((i) => i.value === value)?.label ?? 'General inquiry'
}

/** Normalize any current or legacy `interest` / `service` value. */
export function normalizeInterest(raw: string | null): Interest | '' {
  if (!raw) return ''
  const v = raw.trim().toLowerCase().replace(/\s+/g, '-')
  if (VALUES.has(v)) return v as Interest
  if (v === 'strategy-call' || v === 'consult') return 'consultation'
  if (v.startsWith('training')) return 'training'
  if (v.startsWith('sop') || v === 'essential-glp' || v === 'professional-glp' || v === 'enterprise-glp') {
    return 'sop-templates'
  }
  if (v.startsWith('lims') || v.includes('eln')) return 'lims-eln'
  if (v.includes('automation') || v.includes('pilot') || v === 'ai') return 'automation'
  if (
    v.startsWith('data-review') ||
    ['compliance-audit', 'custom-sop-development', 'custom-sop', 'regulatory-support', 'inspection'].includes(v)
  ) {
    return 'consulting'
  }
  return 'other'
}

/** Read prefill values from the page URL (current and legacy parameters). */
export function prefillFromParams(params: URLSearchParams): { service: Interest | ''; message: string } {
  const product = params.get('product') ?? params.get('package')
  const training = params.get('training')
  const intent = params.get('intent')

  if (product) {
    return { service: 'sop-templates', message: `I'm interested in the ${product} SOP package.` }
  }
  if (training) {
    return { service: 'training', message: `I'm interested in ${training} training for our team.` }
  }
  return {
    service: normalizeInterest(params.get('interest') ?? params.get('service') ?? intent),
    message: '',
  }
}
