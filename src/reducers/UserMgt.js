const initialState = {
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

    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat([{"user":action.payload.user, "pass":action.payload.pass, "imgUrl":action.payload.imgUrl}])
      };

    default:
      return state;
  }
}
