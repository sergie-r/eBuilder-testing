import registerAction from '../actions/registerAction';

const initial = {
  isRegistered: false,
  user: null,
  userLogged: 'admin',
  passLogged: '123123'
};

const registerReducer = (state = initial, action) => {
  switch (action.type) {
    case registerAction.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegistered: action.userData.isRegistered,
        user: action.userData.user,
      });
    default:
      return state;
  }
};

export default registerReducer;
