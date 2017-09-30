export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...this.state.friends, friend] };
      default:
      return state.friends;
  }
}
