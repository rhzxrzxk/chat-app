const initialState = {
  loginStatus: '0',
  user: '',
  pass: '',
  imgFile: '',
  users: [{"user":'', "pass":'', "imgFile":''}],
  currentUser: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_USER':
      return {
        ...state,
        user: action.payload.user
      };

    case 'INPUT_PASS':
      return {
        ...state,
        pass: action.payload.pass
      };

    case 'INPUT_IMGFILE':
      return {
        ...state,
        imgFile: action.payload.imgFile
      };

    case 'DENY_RESISTRATION':
      return {
        ...state,
        loginStatus: '0',
        currentUser: '',
      };

    case 'ALLOW_RESISTRATION':
      return {
        ...state,
        users: state.users.concat([{"user":action.payload.user, "pass":action.payload.pass, "imgFile":action.payload.imgFile}]),
        loginStatus: '1',
        currentUser: action.payload.user,
      };

    case 'ALLOW_LOGIN':
      return {
        ...state,
        loginStatus: '1',
        currentUser: action.payload.user,
      };

    case 'DENY_LOGIN':
      return {
        ...state,
        loginStatus: '0',
        currentUser: '',
      };

    case 'LOGOUT':
      return {
        ...state,
        loginStatus: '0',
        currentUser: '',
      };

    default:
      return state;
  }
}
