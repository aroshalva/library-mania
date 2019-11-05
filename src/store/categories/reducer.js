import {} from '../actionTypes'

const initialState = {
  saved: [],
  favourites: [],
  customCategories: {},
}

const categories = (state = initialState, action) => {
  switch (action.type) {
  case 'aaa':
    return 13
  default:
    return state
  }
}


export default categories
