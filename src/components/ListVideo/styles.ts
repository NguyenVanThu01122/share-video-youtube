import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1000px;
  height: calc(100vh - 80px) !important;
  margin: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 10px;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0, 0.1); //Màu của vùng cuộn
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(217deg, #e250e5, #4b50e6);
  }
  .img-loading {
    width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  gap: 15px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const VideoItem = styled.div`
  .video {
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .video {
      width: 100%;
      height: 250px;
    }
  }
`;

export const InformationVideo = styled.div`
  .title-video {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .user {
    color: rgba(50, 71, 92, 0.95);
    span {
      font-weight: bold;
    }
  }
  .description {
    margin-top: 15px;
    color: rgba(50, 71, 92, 0.95);
    .content {
      font-weight: 600;
    }
    .no-content {
      font-style: italic;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxPagination = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
  button {
    padding: 5px 20px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
  .disable {
    filter: brightness(0.6);
  }
  .active-page {
    font-weight: bold;
    background: linear-gradient(217deg, #e250e5, #4b50e6);
  }
  @media screen and (max-width: 768px) {
  }
`;
