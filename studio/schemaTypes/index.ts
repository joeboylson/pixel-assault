import blockContent from './blockContent'
import product from './product'
import militaryUnitType from './militaryUnitType'
import faction from './faction'
import card from './card'
import storyPage from './storyPage'
import attribution from './attribution'

export const schemaTypes = [
  // Artist Attribution
  attribution,

  // Products
  product,

  // Wiki
  militaryUnitType,
  faction,
  card,
  storyPage,

  // Other types
  blockContent,
]
