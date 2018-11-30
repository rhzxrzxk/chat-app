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

export const denyRegistration = () => (
  {
  type: 'DENY_RESISTRATION',
  payload: {}
});

export const allowRegistration = (user, pass, imgUrl) => (
  {
  type: 'ALLOW_RESISTRATION',
  payload: {
    user,
    pass,
    imgUrl
  }
});