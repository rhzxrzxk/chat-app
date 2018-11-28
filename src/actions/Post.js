export const inputPost = (post) => ({
  type: 'INPUT_POST',
  payload: {
    post
  }
});

export const addPost = (post) => (
  {
  type: 'ADD_POST',
  payload: {
    post
  }
});
