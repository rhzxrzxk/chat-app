export const inputImgFile = (imgFile) => ({
  type: 'INPUT_IMGFILE',
  payload: {
    imgFile
  }
});

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

export const denyRegistration = () => (
  {
  type: 'DENY_RESISTRATION',
  payload: {

  }
});

export const allowRegistration = (user, pass, imgFile) => (
  {
  type: 'ALLOW_RESISTRATION',
  payload: {
    user,
    pass,
    imgFile,
  }
});

export const allowLogin = (user) => (
  {
  type: 'ALLOW_LOGIN',
  payload: {
    user,
  }
});

export const denyLogin = () => (
  {
  type: 'DENY_LOGIN',
  payload: {}
});

export const logout = () => (
  {
  type: 'LOGOUT',
  payload: {}
});
