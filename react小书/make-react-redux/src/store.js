function createStore(reducer) {
  let state = null
  const linsteners = []
  const subscribe = linstener => linsteners.push(linstener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    linsteners.forEach(linstener => linstener())
  }
  dispatch({}) // 初始化state
  return { getState, subscribe, dispatch }
}

const themeReducer = (state = [], action) => {
  if (!state)
    return {
      themeColor: 'red'
    }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state
  }
}

const store = createStore(themeReducer)

export default store
