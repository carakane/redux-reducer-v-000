export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...this.state.friends, action.friend] };
    case 'REMOVE_FRIEND':
      return {friends: this.state.friends.shift[action.id]}
    default:
      return state;
  }
}
