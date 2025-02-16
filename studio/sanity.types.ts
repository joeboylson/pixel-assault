/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      relatedAttribution?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'attribution'
      }
      _type: 'image'
      _key: string
    }
>

export type StoryPage = {
  _id: string
  _type: 'storyPage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  content?: BlockContent
}

export type Card = {
  _id: string
  _type: 'card'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  cardId?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    relatedAttribution?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'attribution'
    }
    _type: 'image'
  }
  relatedFaction?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'faction'
  }
  relatedMilitatyUnitType?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'militaryUnitType'
  }
  cost?: number
  actionEconomy?: string
  lore?: BlockContent
  behindTheScenes?: BlockContent
}

export type Faction = {
  _id: string
  _type: 'faction'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  colorPageBackground?: Color
  colorAccentOne?: Color
  colorAccentTwo?: Color
}

export type MilitaryUnitType = {
  _id: string
  _type: 'militaryUnitType'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type Product = {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  description?: string
  price?: number
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Attribution = {
  _id: string
  _type: 'attribution'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type Color = {
  _type: 'color'
  hex?: string
  alpha?: number
  hsl?: HslaColor
  hsv?: HsvaColor
  rgb?: RgbaColor
}

export type RgbaColor = {
  _type: 'rgbaColor'
  r?: number
  g?: number
  b?: number
  a?: number
}

export type HsvaColor = {
  _type: 'hsvaColor'
  h?: number
  s?: number
  v?: number
  a?: number
}

export type HslaColor = {
  _type: 'hslaColor'
  h?: number
  s?: number
  l?: number
  a?: number
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | BlockContent
  | StoryPage
  | Card
  | Faction
  | MilitaryUnitType
  | Slug
  | Product
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Attribution
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor
export declare const internalGroqTypeReferenceTo: unique symbol
