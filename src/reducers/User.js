const initialState = {
  loginStatus: '0',
  user: '',
  pass: '',
  imgUrl: '',
  users: [{"user":'', "pass":'', "imgUrl":''}]
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

    case 'INPUT_IMGURL':
      return {
        ...state,
        imgUrl: action.payload.imgUrl
      };

    case 'DENY_RESISTRATION':
      return {
        ...state,
        loginStatus: '0'
      };

    case 'ALLOW_RESISTRATION':
      return {
        ...state,
        users: state.users.concat([{"user":action.payload.user, "pass":action.payload.pass, "imgUrl":action.payload.imgUrl}]),
        loginStatus: '1'
      };

    default:
      return state;
  }
}