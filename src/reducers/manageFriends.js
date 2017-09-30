export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...this.state.friends, action.friend] };
      break;
    case 'REMOVE_FRIEND':
      return {friends: this.state.friends.shift[action.id]}
      break;
    default:
      return state;
  }
}
