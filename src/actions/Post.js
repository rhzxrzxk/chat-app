export const inputPost = (post) => ({
  type: 'INPUT_POST',
  payload: {
    post
  }
});

export const addPost = (post, currentUser, currentImgFile, imgFile, mf) => (
  {
  type: 'ADD_POST',
  payload: {
    post,
    currentUser,
    currentImgFile,
    imgFile,
    mf
  }
});
