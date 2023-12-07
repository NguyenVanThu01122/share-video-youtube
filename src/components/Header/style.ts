import { Drawer, Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  background-color: rgb(245, 245, 249);
  overflow: hidden;
  .box-header {
    height: 100%;
    max-width: 1250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    .icLogo {
      width: 60px;
      height: 60px;
    }
    div {
      color: rgba(50, 71, 92, 0.87);
      font-size: 26px;
      font-weight: 700;
    }
  }
  .group-btn {
    .item-btn {
      display: flex;
      gap: 20px;
      margin: auto;
      justify-content: center;
      .btn-login {
        height: 40px;
        color: white;
        font-weight: bold;
        letter-spacing: 2px;

        font-size: 18px;
        background-color: rgba(105, 108, 255, 0.8);
      }
      .btn-register {
        font-size: 18px;
        color: white;
        font-weight: bold;
        letter-spacing: 2px;
        height: 40px;
        background: var(
          --linear,
          linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
        );
      }
    }
    .icMenu {
      display: none;
    }
  }
  .item-selection {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .welcome {
      font-size: 26px;
      color: blueviolet;
      font-weight: bold;
      span {
        font-size: 15px;
        color: gray;
      }
    }
    .btn-share {
      height: 40px;
      color: white !important;
      font-weight: bold;
      font-size: 18px;
      background: var(
        --linear,
        linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
      );
      &:hover {
        filter: brightness(0.6);
      }
    }

    .btn-logout {
      background-color: red;
      height: 40px;
      color: white !important;
      font-weight: bold;
      font-size: 18px;
      &:hover {
        filter: brightness(0.6);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .box-header {
      padding: 10px;
      .title {
        .icLogo {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        div {
          font-size: 16px;
        }
      }
      .group-btn {
        .item-selection {
          display: none;

          .welcome {
            /* display: none; */
          }
        }
        .item-btn {
        }
        .icMenu {
          display: block;
          width: 40px;
          border-radius: 10px;
        }
      }
    }
  }
`;

export const BoxModal = styled(Modal)`
  .form-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title-modal {
      font-size: 25px;
      font-weight: bold;
    }
    .form-child {
      width: 100%;
      .input {
        width: 100%;
        height: 46px;
        &::placeholder {
          font-size: 16px;
        }
      }
      .btn-auto-fill {
        color: white !important;
        background-color: rgba(192, 51, 51, 0.7);
      }
    }
    .input-description {
      height: 100px;
      width: 100%;
      padding-top: 10px;
      &::placeholder {
        font-size: 16px;
      }
    }
  }
  .btn-share {
    height: 46px;
    width: 30%;
    border-radius: 10px;
    color: white !important;
    background: linear-gradient(217deg, #e250e5, #4b50e6);
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width: 768px) {
    .ant-modal-content {
      padding: 15px !important;
    }
    .form-parent {
      .title-modal {
        margin-top: 15px;
      }
    }
    .btn-share {
      width: 100%;
    }
  }
`;

export const ItemDrawer = styled(Drawer)`
  .title {
    display: flex;
    align-items: center;
    gap: 6px;
    .icLogo {
      width: 30px;
      height: 30px;
    }
    div {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .list-video,
  .share-video,
  .logout {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: gray;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
`;

export const ModalNotification = styled(Modal)`
  .ant-modal-content {
    padding: 6px 15px !important;
  }
  .ant-modal-close {
    top: 5px !important;
  }
  .content {
    margin: 20px 0px 10px 0px;
    font-size: 18px;
    color: gray;
    font-weight: bold;
  }
  .group-btn {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    .btn-ok {
      width: 30%;
      font-weight: bold;
      background-color: blue;
      height: 40px;
      color: white !important;
    }
    .btn-cancel {
      width: 30%;
      font-weight: bold;
      background-color: orangered;
      height: 40px;
      color: white !important;
    }
  }
`;
