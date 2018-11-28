const initialState = {
  post: '',
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_POST':
      return {
        ...state,
        post: action.payload.post
      };

    case 'ADD_POST':
      return {
        ...state,
        posts: state.posts.concat([action.payload.post])
      };

    default:
      return state;
  }
}
