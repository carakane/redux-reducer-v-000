export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] };
      break;
    case 'REMOVE_FRIEND':
      var friendID = state.friends.findIndex(element => element.id === action.id)
      return {friends: state.friends.slice(friendID, friendID)}
      break;
    default:
      return state;
  }
}
