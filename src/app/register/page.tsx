"use client";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

import { TypeRegister, register } from "@/service/auth.service";
import { toast } from "react-toastify";
import imgRegister from "../../../public/images/intro-register.43382735879bac8d8c03.png";
import icLogo from "../../../public/images/logo.png";
import styles from "./styles.module.scss";

function Register() {
  const [form] = Form.useForm();
  const router = useRouter();

  const mutation = useMutation((payload: TypeRegister) => register(payload), {
    onSuccess: (data: any) => {
      toast.success("Registration successful!");
      setTimeout(() => {
        router.push("login");
      }, 2000); // Chuyển hướng sau 2 giây
    },
    onError: (error: any) => {
      toast.error("Registration failed! Please try again.");
    },
  });

  const onFinish = (values: TypeRegister) => {
    const body = {
      email: values.email,
      password: values.password,
    };
    mutation.mutate(body);
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemImg}>
        <Image
          className={styles.imgRegister}
          src={imgRegister}
          alt="Picture of the author"
        />
      </div>

      <div className={styles.formRegister}>
        <div className={styles.header}>
          <div className={styles.titlePage}>
            <Image
              className={styles.icLogo}
              src={icLogo}
              alt="Picture of the author"
            />
            <div className={styles.title}>Youtube Video Sharing App</div>
          </div>
          <div>Adventure starts here 🚀</div>
          <div>An excellent platform for sharing online videos!</div>
        </div>

        <Form onFinish={onFinish} form={form} className={styles.groupInput}>
          <div className={styles.detailForm}>
            <div className={styles.titleInput}>
              <span>*</span> email
            </div>
            <Form.Item
              className={styles.formItem}
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
              <Input className={styles.input} placeholder="You email" />
            </Form.Item>
          </div>
          <div className={styles.detailForm}>
            <div className={styles.titleInput}>
              <span>*</span> Password
            </div>
            <Form.Item
              className={styles.formItem}
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
              <Input.Password
                className={styles.input}
                placeholder="You password"
              />
            </Form.Item>
          </div>

          <div className={styles.detailForm}>
            <div className={styles.titleInput}>
              <span>*</span> Confirm password
            </div>
            <Form.Item
              className={styles.formItem}
              name="confirmPassword"
              
              rules={[
                {
                  required: true,
                  message: "Confirm Password is a required field",
                },
                ({ getFieldValue }) => ({
                  validator(_, value: number) {
                    if (!value || getFieldValue("password") == value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error("The two passwords do not match")
                      );
                    }
                  },
                }),
              ]}
            >
              <Input.Password
                className={styles.input}
                placeholder="You password confirmation"
              />
            </Form.Item>
          </div>

          <div className={styles.content}>
            By clicking on Register, you agree to{" "}
            <span> Our Terms and Conditions of Use</span>
          </div>
        </Form>

        <div className={styles.itemSubmit}>
          <Button
            loading={mutation.isLoading}
            onClick={handleSubmit}
            className={styles.btn}
            type="primary"
          >
            REGISTER
          </Button>
          <div>
            Already have an account?{" "}
            <span onClick={() => router.push("login")}>Login instead</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
