export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] };
      break;
    case 'REMOVE_FRIEND':
      var friendID = state.friends.findIndex(element => element.id === action.id)
      let newState = state
      console.log(friendID)
      return {friends: newState.friends.splice(friendID, 1)}
      break;
    default:
      return state;
  }
}
