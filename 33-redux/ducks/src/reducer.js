// reducer needs both the old info from your state (state) and any new, incoming information (action)
const defaultState = {
  currentUser: {name: "Dude bro"}, 
  books: []
}

function reducer(state = defaultState, action){
  // Whatever is returned by the reducer BECOMES your new state. Typically we're gonna return an object

  // console.log("STATE: ", state)
  // console.log("ACTION: ", action)

  switch(action.type){
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.payload}
    case "ADD_BOOK":
      return {...state, books: [...state.books, action.payload]}
    case "REMOVE_BOOK":
      return {}
    default:
      return state
  }
}

export default reducer