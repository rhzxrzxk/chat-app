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

export const allowRegistration = (user, pass, imgFile, mf) => (
  {
  type: 'ALLOW_RESISTRATION',
  payload: {
    user,
    pass,
    imgFile,
    mf
  }
});

export const allowLogin = (users, index) => (
  {
  type: 'ALLOW_LOGIN',
  payload: {
    users,
    index
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

export const deleteOthers = (nextUsers) => (
  {
  type: 'DELETE_OTHERS',
  payload: {
    nextUsers,
  }
});

export const deleteMe = (nextUsers) => (
  {
  type: 'DELETE_ME',
  payload: {
    nextUsers,
  }
});
