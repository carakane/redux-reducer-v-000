export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] };
      break;
    case 'REMOVE_FRIEND':
      return {friends: [...friends.slice(0, action.id), ...friends.slice(action.id +1)]}
      break;
    default:
      return state;
  }
}
