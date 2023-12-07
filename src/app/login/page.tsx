"use client";
import { TypeLogin, login } from "@/service/auth.service";
import { saveLogin } from "@/store/Actions/app";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import imgLogin from "../../../public/images/intro-login.ccd6c3afb2ee2240c13a.png";
import icLogo from "../../../public/images/logo.png";
import { FormLogin, GroupInput, ImageItem, Wrapper } from "./styles";
// export const metadata: Metadata = {
//   title: "header",
//   description: "my header",
// };

const Login = () => {
  const router = useRouter();
  const [form] = useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    mutationLogin.mutate(body); // dùng method mutate kích hoạt mutationLogin
  };

  const mutationLogin = useMutation((payload: TypeLogin) => login(payload), {
    onSuccess: (data) => {
      toast.success("Logged in successfully");
      localStorage.setItem("token", data.data?.token); // lưu token vào localStorage
      dispatch(saveLogin(true));
      router.push("list-video");
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Wrapper>
      <ImageItem>
        <Image
          className="imgLogin"
          src={imgLogin}
          alt="Picture of the author"
        />
      </ImageItem>
      <FormLogin form={form} onFinish={onFinish}>
        <div className="header">
          <div className="title-page">
            <Image className="icLogo" src={icLogo} alt="logo" />
            <div className="title">Youtube Video Sharing App</div>
          </div>
          <div>Welcome 👋🏻</div>
          <div>Please sign-in to your account and start the adventure!</div>
        </div>

        <GroupInput>
          <div className="detail-form">
            <div className="title-input">
              <span>*</span> email
            </div>
            <Form.Item
              className="form-item"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is a required field",
                },
                () => ({
                  validator(_, value: string) {
                    if (!value || value.includes("@gmail")) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("Invalid email"));
                    }
                  },
                }),
              ]}
            >
              <Input className="input" placeholder="You email" />
            </Form.Item>
          </div>
          <div className="detail-form">
            <div className="title-input">
              <span>*</span> Password
            </div>
            <Form.Item
              className="form-item"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is a required field",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters",
                },
              ]}
            >
              <Input.Password className="input" placeholder="You password" />
            </Form.Item>
          </div>
          <Button
            className="btn-login"
            loading={mutationLogin.isLoading}
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
          <div className="create-account">
            New on our platform?
            <span onClick={() => router.push("/register")}>
              Create an account
            </span>
          </div>
        </GroupInput>
      </FormLogin>
    </Wrapper>
  );
};
export default Login;
