export const inputPost = (post) => ({
  type: 'INPUT_POST',
  payload: {
    post
  }
});

export const addPost = (post, currentUser) => (
  {
  type: 'ADD_POST',
  payload: {
    post,
    currentUser
  }
});
