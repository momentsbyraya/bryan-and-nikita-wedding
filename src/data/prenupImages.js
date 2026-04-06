/**
 * All prenup-driven slots use a single placeholder until real photos are added.
 * Replace PRENUP_PLACEHOLDER or restore file paths in this module when ready.
 */
export const PRENUP_PLACEHOLDER = '/assets/images/placeholders/to-be-added.svg'

/** True when this URL is the shared prenup placeholder (layout can treat it like a photo frame). */
export function isPrenupPlaceholder(src) {
  return typeof src === 'string' && src.includes('placeholders/to-be-added')
}

const POOL_LEN = 11
const PRENUP_IMAGE_POOL = Array.from({ length: POOL_LEN }, () => PRENUP_PLACEHOLDER)

export const prenupImages = {
  pool: PRENUP_IMAGE_POOL,
  hero: PRENUP_PLACEHOLDER,
  fullBleedMain: PRENUP_PLACEHOLDER,
  splitA: {
    left: PRENUP_PLACEHOLDER,
    right: PRENUP_PLACEHOLDER,
  },
  splitB: {
    left: PRENUP_PLACEHOLDER,
    right: PRENUP_PLACEHOLDER,
  },
  splitC: {
    left: PRENUP_PLACEHOLDER,
    right: PRENUP_PLACEHOLDER,
  },
  rsvpBackground: PRENUP_PLACEHOLDER,
  modalBackground: PRENUP_PLACEHOLDER,
  countdownBackground: PRENUP_PLACEHOLDER,
  ogImage: PRENUP_PLACEHOLDER,
  loveStory: [
    PRENUP_PLACEHOLDER,
    PRENUP_PLACEHOLDER,
    PRENUP_PLACEHOLDER,
    PRENUP_PLACEHOLDER,
    PRENUP_PLACEHOLDER,
  ],
  gallery: Array.from({ length: 11 }, () => PRENUP_PLACEHOLDER),
  momentsHero: PRENUP_PLACEHOLDER,
  momentsGrid: Array.from({ length: 18 }, () => PRENUP_PLACEHOLDER),
}
