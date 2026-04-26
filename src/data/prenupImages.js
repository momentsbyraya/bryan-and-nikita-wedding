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
const HERO_PHOTO = '/assets/images/prenup/DSC06776.jpg'
const PRENUP_PHOTOS = [
  '/assets/images/prenup/DSC06815.jpg',
  '/assets/images/prenup/DSC06745.jpg',
  '/assets/images/prenup/DSC06686.jpg',
  '/assets/images/prenup/DSC06668.jpg',
  '/assets/images/prenup/DSC06470.jpg',
  '/assets/images/prenup/DSC06255.jpg',
  '/assets/images/prenup/DSC06006.jpg',
  '/assets/images/prenup/DSC05933.jpg',
  '/assets/images/prenup/DSC05908.jpg',
  '/assets/images/prenup/DSC05794.jpg',
  '/assets/images/prenup/DSC05786.jpg',
  '/assets/images/prenup/DSC05754.jpg',
  '/assets/images/prenup/DSC05887.jpg',
]
const PRENUP_IMAGE_POOL = PRENUP_PHOTOS.slice(0, POOL_LEN)
const LOVE_STORY_PHOTOS = PRENUP_PHOTOS.slice(0, 5)
const GALLERY_PHOTOS = [HERO_PHOTO, ...PRENUP_PHOTOS, HERO_PHOTO]
const MOMENTS_GRID_PHOTOS = PRENUP_PHOTOS.filter((_, index) => index !== 11)

export const prenupImages = {
  pool: PRENUP_IMAGE_POOL,
  hero: HERO_PHOTO,
  fullBleedMain: PRENUP_PHOTOS[0],
  splitA: {
    left: PRENUP_PHOTOS[1],
    right: PRENUP_PHOTOS[2],
  },
  splitB: {
    left: PRENUP_PHOTOS[3],
    right: PRENUP_PHOTOS[4],
  },
  splitC: {
    left: PRENUP_PHOTOS[5],
    right: PRENUP_PHOTOS[6],
  },
  rsvpBackground: PRENUP_PHOTOS[7],
  modalBackground: PRENUP_PHOTOS[8],
  countdownBackground: PRENUP_PHOTOS[9],
  ogImage: PRENUP_PHOTOS[10],
  loveStory: LOVE_STORY_PHOTOS,
  gallery: GALLERY_PHOTOS,
  momentsHero: PRENUP_PHOTOS[11],
  momentsGrid: MOMENTS_GRID_PHOTOS,
}
