import {} from '../actionTypes'

export function dumyAction() {
  return (dispatch) => {
    dispatch({
      type: 'dummyType',
    })
  }
}

