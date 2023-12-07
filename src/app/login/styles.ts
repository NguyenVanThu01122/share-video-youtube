import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 50px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageItem = styled.div`
  width: 60%;
  height: 100%;
  background-color: rgb(245, 245, 249);
  .imgLogin {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormLogin = styled(Form)`
  .header {
    .title-page {
      display: flex;
      align-items: center;
      gap: 10px;
      .icLogo {
        width: 80px;
        height: 80px;
      }
      .title {
        color: rgba(50, 71, 92, 0.87);
        font-size: 26px;
        font-weight: 700;
        letter-spacing: -0.45px;
      }
    }
    & > div:nth-child(2) {
      color: rgba(50, 71, 92, 0.87);
      font-weight: 500;
      font-size: 25px;
      margin-top: 15px;
      text-align: center;
    }
    & > div:last-child {
      color: rgba(50, 71, 92, 0.6);
      font-weight: 600;
      margin: 12px 0px;
      text-align: center;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
    .header {
      .title-page {
        .icLogo {
          width: 50px;
          height: 50px;
        }
        .title {
          font-size: 22px;
        }
      }
    }
  }
`;

export const GroupInput = styled.div`
  .detail-form {
    .title-input {
      margin-bottom: 5px;
      font-size: 18px;
      span {
        color: red;
        margin-right: 4px;
      }
    }
    .form-item {
      .input {
        padding-left: 20px;
        border-radius: 20px;
        height: 48px;
        width: 100%;
        border: 1px solid gray;
        &:hover {
          border: 1px solid blue;
        }
      }
    }
  }
  .btn-login {
    width: 100%;
    height: 48px;
    border-radius: 20px;
    font-weight: bold;
    letter-spacing: 3px;
    color: red !important;
    font-size: 18px;
    background: var(
      --linear,
      linear-gradient(217deg, #e250e5 0%, #4b50e6 100%)
    );
    &:hover {
      filter: brightness(0.6);
    }
    & span {
      cursor: pointer;
      color: white;
      font-style: italic;
    }
  }
  .create-account {
    text-align: center;
    color: rgba(50, 71, 92, 0.6);
    font-size: 14px;
    margin-top: 10px;
  }
  span {
    cursor: pointer;
    color: blue;
    font-style: italic;
    font-size: 18px;
  }
`;
