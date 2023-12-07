import { instantAxios } from "./axios";

export interface TypeShareVideo {
  title: string;
  url: string;
  description: string;
}

export type TypeListVideo = {
  page: number;
  limit: number;
};

export const getListVideo = (params?: TypeListVideo) => {
  return instantAxios.get("/video", {
    params,
  });
};

export const checkUrlShareVideo = (params: { url: string }) => {
  return instantAxios.get("/video/info", {
    params,
  });
};

export const shareVideo = (body: TypeShareVideo) => {
  return instantAxios.post("/video", body);
};

export const getDetailVideo = (id: string) => {
  return instantAxios.get(`/video/detail/${id}`);
};

export const commentVideo = (payload: { videoId: string; comment: string }) => {
  return instantAxios.post("/comment", payload);
};
