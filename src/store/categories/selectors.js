export const getCategories = state => state.categories
export const getSaved = state => state.account.saved
export const getFavourites = state => state.account.Favourites
export const getCustomCategories = state => state.customCategories

export const getCustomCategory = (state, categoryId) => getCustomCategories(state)[categoryId]

