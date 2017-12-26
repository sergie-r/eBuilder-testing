const registerAction = {
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',

  registeredSuccess: userData => ({
    type: registerAction.REGISTER_SUCCESS,
    userData
  }),
};

export default registerAction;
