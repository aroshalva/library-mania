import createAction from '../actionHelpers'
import actionTypes from './actionTypes'

export const addToSaved = id => createAction(actionTypes.saved.ADD, id)
export const removeFromSaved = id => createAction(actionTypes.saved.REMOVE, id)

export const addToFavourites = id => createAction(actionTypes.favourites.ADD, id)
export const removeFromFavourites = id => createAction(actionTypes.favourites.REMOVE, id)

