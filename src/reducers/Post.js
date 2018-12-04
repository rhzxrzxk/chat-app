const initialState = {
  post: '',
  posts: [{"post":'', "currentUser":''}]
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
        posts: state.posts.concat([{"post":action.payload.post, "currentUser":action.payload.currentUser, "imgFile":action.payload.imgFile, "moment":action.payload.mf}]),
        post: '',
      };

    default:
      return state;
  }
}
