import { instantAxios } from "./axios";

export const getInfoUser = () => {
  return instantAxios.get("/user");
};
