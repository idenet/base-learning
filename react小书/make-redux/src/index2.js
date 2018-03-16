function reducer(state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red'
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

function createStore(reducer) {
  let state = null
  const linsteners = []
  const subscribe = linstener => linsteners.push(linstener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    linsteners.forEach(listener => listener())
  }
  dispatch({})
  return { getState, dispatch, subscribe }
}
