import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  height: calc(100vh - 110px);
  flex: 1;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    margin-left: 30px !important;

    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0, 0.1); //Màu của vùng cuộn
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      /* margin-left: 30px !important; */
      background: linear-gradient(217deg, #e250e5, #4b50e6);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const ItemBack = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    .icback {
      width: 25px;
      height: 25px;
    }
    .back {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const VideoItem = styled.div`
  width: 100%;
  .video {
    width: 100%;
    height: 480px;
    border-radius: 20px;
  }
  @media screen and (max-width: 768px) {
    .video {
      height: 250px;
    }
  }
`;

export const InformationVideo = styled.div`
  .title-video {
    font-size: 25px;
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
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    margin-top: 15px;
    padding-bottom: 20px;
    color: rgba(50, 71, 92, 0.95);
    .content {
      font-weight: 600;
    }
    .no-content {
      font-style: italic;
    }
  }
`;

export const SectionComment = styled.div`
  padding-top: 10px;
  .item-comment {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .textArea {
      height: 120px;
      padding-top: 10px;
      padding-left: 20px;
      margin-top: 15px;
      &::placeholder {
        font-size: 22px;
      }
    }
    .btn-comment {
      margin: 15px 0px;
      width: 20%;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      color: white !important;
      background: linear-gradient(217deg, #e250e5, #4b50e6);
      &:hover {
        filter: brightness(0.6);
      }
    }
    .total-comment {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
      }
    }
    .no-comment {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .commented {
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);

    .user-information {
      color: gray;
    }
    .content {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 768px) {
    .item-comment {
      .btn-comment {
        width: 100%;
        height: 46px;
      }
    }
  }
`;
