const initialState = {
  loginStatus: '0',
  user: '',
  pass: '',
  imgFile: '',
  users: [{"user":'', "pass":'', "imgFile":''}],
  currentUser: '',
  currentImgFile: '',
  userMsg: 'ユーザー名は1〜10文字でないといけません！',
  passMsg: 'パスワードは4〜8文字でないといけません！',
  userValidation: true,
  passValidation: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_USER':
      var u = action.payload.user;
      var uv;
      var um = '';
      if (u.length>0 && u.length<11) {
        um = '';
        uv = false;
      } else {
        um = 'ユーザー名は1〜10文字でないといけません！';
        uv = true;
      };
      return {
        ...state,
        user: action.payload.user,
        userMsg: um,
        userValidation: uv,
      };

    case 'INPUT_PASS':
      var p = action.payload.pass;
      var pv;
      var pm = '';
      if (p.length>3 && p.length<9) {
        pm = '';
        pv = false;
      } else {
        pm = 'パスワードは4〜8文字でないといけません！';
        pv = true;
      };
      return {
        ...state,
        pass: action.payload.pass,
        passMsg: pm,
        passValidation: pv,
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
        currentImgFile: '',
        userMsg: '',
        userValidation: true,
        passMsg: '',
        passValidation: true,
      };

    case 'ALLOW_RESISTRATION':
      return {
        ...state,
        users: state.users.concat([{"user":action.payload.user, "pass":action.payload.pass, "imgFile":action.payload.imgFile, "moment":action.payload.mf}]),
        loginStatus: '1',
        currentUser: action.payload.user,
        currentImgFile: action.payload.imgFile,
        user: '',
        pass: '',
        imgFile: '',
        userMsg: '',
        userValidation: true,
        passMsg: '',
        passValidation: true,
      };

    case 'ALLOW_LOGIN':
      return {
        ...state,
        loginStatus: '1',
        currentUser: action.payload.users[action.payload.index]["user"],
        currentImgFile: action.payload.users[action.payload.index]["imgFile"],
        user: '',
        pass: '',
        imgFile: '',
      };

    case 'DENY_LOGIN':
      return {
        ...state,
        loginStatus: '0',
        currentUser: '',
        currentImgFile: '',
      };

    case 'LOGOUT':
      return {
        ...state,
        loginStatus: '0',
        currentUser: '',
        currentImgFile: '',
      };

    case 'DELETE_OTHERS':
      return {
        ...state,
        users:  action.payload.nextUsers,
      };

    case 'DELETE_ME':
      return {
        ...state,
        users:  action.payload.nextUsers,
        loginStatus: '0',
        currentUser: '',
        currentImgFile: '',
      };

    default:
      return state;
  }
}
