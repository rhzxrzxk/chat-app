export const inputUser = (user) => ({
  type: 'INPUT_USER',
  payload: {
    user
  }
});

export const inputPass = (pass) => ({
  type: 'INPUT_PASS',
  payload: {
    pass
  }
});

export const inputImgUrl = (imgUrl) => ({
  type: 'INPUT_IMGURL',
  payload: {
    imgUrl
  }
});

export const addUser = (user, pass, imgUrl) => (
  {
  type: 'ADD_USER',
  payload: {
    user,
    pass,
    imgUrl
  }
});
