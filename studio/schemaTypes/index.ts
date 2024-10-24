import blockContent from './blockContent'
import product from './product'
import militaryUnitType from './militaryUnitType'
import faction from './faction'
import card from './card'
import storyPage from './storyPage'

export const schemaTypes = [
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
