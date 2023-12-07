export const saveLogin = (payload: any) => {
  return {
    type: "SAVE_LOGIN",
    payload,
  };
};

export const saveUser = (payload: any) => {
  return {
    type: "SAVE_USER",
    payload,
  };
};
