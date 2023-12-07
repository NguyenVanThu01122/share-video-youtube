import { instantAxios } from "./axios";

export type TypeLogin = {
  email: string;
  password: number;
};

export type TypeRegister = {
  email: string;
  password: number;
};
export const login = (body: TypeLogin) => {
  return instantAxios.post("/auth/login", body);
};

export const register = (body: TypeRegister) => {
  return instantAxios.post("/auth/register", body);
};
