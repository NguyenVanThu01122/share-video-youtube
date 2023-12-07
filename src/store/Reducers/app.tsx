import { getLocalStorage } from "@/utils";

interface State {
  isLogin: boolean;
  user?: {
    email: string;
  };
}

export const initialState: State = {
  isLogin: getLocalStorage("token") ? true : false,
  user: undefined,
};

export const handleReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SAVE_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
