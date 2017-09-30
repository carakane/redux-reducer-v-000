export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action] };
      break;
    case 'REMOVE_FRIEND':
      return {friends: state.friends.shift[action.id]}
      break;
    default:
      return state;
  }
}
