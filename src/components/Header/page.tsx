"use client";
import { getInfoUser } from "@/service/user.service";
import icMenu from "../../../public/images/icon-menu.jpg";
// import { getLocalStorage } from "@/utils";
import {
  TypeShareVideo,
  checkUrlShareVideo,
  shareVideo,
} from "@/service/video.service";
import { saveLogin, saveUser } from "@/store/Actions/app";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import icLogo from "../../../public/images/logo.png";
import { BoxModal, ItemDrawer, ModalNotification, Wrapper } from "./style";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const [form] = Form.useForm();
  const login = useSelector((state: any) => state.app?.isLogin);
  const user = useSelector((state: any) => state.app?.user);

  const router = useRouter();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useQuery(["getUser", login], getInfoUser, {
    enabled: login, //Query chỉ sẽ được tự động thực hiện khi login khác null hoặc undefined. Nếu login có giá trị, query sẽ tự động được kích hoạt.
    onSuccess: (res) => {
      dispatch(saveUser(res.data?.data));
    },
    onError: (error) => {},
  });

  const openModalShareVideo = () => {
    setIsModal(true);
    setIsOpenMenu(false);
  };
  const cancelModalShareVideo = () => {
    setIsModal(false);
    form.resetFields(); // Sau khi cancel, reset form
  };

  // xử lý check url video
  const mutationCheckUrl = useMutation(
    (payload: { url: string }) => checkUrlShareVideo(payload),
    {
      onSuccess: (res) => {
        // checkUrl success thì dùng mutate kích hoạt mutationShareVideo
        mutationShareVideo.mutate({
          title: form.getFieldValue("title"),
          description: form.getFieldValue("description"),
          url: res.data?.urlEmbed, // lấy urlEmbed từ res trả về và gắn vào url
        });
      },
      onError: (error) => {
        toast.error("URL is invalidate");
      },
    }
  );

  // xử lý share video
  const mutationShareVideo = useMutation(
    (payload: TypeShareVideo) => shareVideo(payload),
    {
      onSuccess: (res) => {
        toast.success(res.data?.message);
        router.push("/list-video");
        // queryClient.invalidateQueries({ queryKey: ["GetListVideo"] }); // gọi lại getListVideo
        cancelModalShareVideo(); // Đóng modal sau khi chia sẻ video thành công (nếu cần)
      },
      onError: (error) => {
        toast.error("An error occurred while sharing the video.");
      },
    }
  );

  const onFinish = (values: TypeShareVideo) => {
    mutationCheckUrl.mutate({ url: values.url }); // khi user submit dùng mutate kích hoạt hàm checkUrl
  };

  // xử lý get title video gắn vào form
  const handleAutoFill = () => {
    checkUrlShareVideo({ url: form.getFieldValue("url") })
      .then((res) => {
        form.setFieldValue("title", res.data?.title); // lấy title trả về từ res và gắn vào trường title trong form
      })
      .catch((error) => {
        toast.error("URL is invalidate");
      });
  };

  const handleSubmitForm = () => {
    form.submit();
  };

  // hàm xử lý logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(saveLogin(false));
  };

  const showMenu = () => {
    setIsOpenMenu(true);
  };

  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const showModalNotification = () => {
    setIsOpenNotification(true);
    setIsOpenMenu(false);
  };
  const closeModalNotification = () => {
    setIsOpenNotification(false);
  };

  // logout mobile
  const handleLogOutMobile = () => {
    setIsOpenMenu(false);
    setIsOpenNotification(false);
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <Wrapper>
      <div className="box-header">
        <div className="title">
          <Image className="icLogo" src={icLogo} alt="icon logo" />
          <div>Youtube Video Sharing App</div>
        </div>
        <div className="group-btn">
          {login ? (
            <div className="item-selection">
              <div className="welcome">
                Welcome <span>{user?.email}</span>
              </div>
              <Button className="btn-share" onClick={openModalShareVideo}>
                Share A Video
              </Button>
              <Button className="btn-logout" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          ) : (
            <div className="item-btn">
              <Button
                className="btn-login"
                onClick={() => router.push("/login")}
              >
                Log In
              </Button>
              <Button
                className="btn-register"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </div>
          )}
          <Image
            className="icMenu"
            src={icMenu}
            alt="icon menu"
            onClick={showMenu}
          />
        </div>
      </div>

      <BoxModal
        open={isModal}
        onCancel={cancelModalShareVideo}
        footer={false}
        centered
        width={550}
      >
        <Form
          form={form}
          onFinish={onFinish}
          className="form-parent"
          layout="vertical" // Sử dụng layout="vertical" để label hiển thị bên trên
        >
          <div className="title-modal">Share A Youtube Video</div>
          <Form.Item
            className="form-child"
            name="url"
            label="Url"
            tooltip
            required
            rules={[
              {
                required: true,
                message: "Url is a required field",
              },
            ]}
          >
            <Input
              className="input"
              placeholder="Example Url:https://www.youtube.com/watch?v=Lp1qdullrmw"
            />
          </Form.Item>

          <Form.Item
            className="form-child"
            name="title"
            label={
              <div>
                <span>Title</span>{" "}
                <Button className="btn-auto-fill" onClick={handleAutoFill}>
                  Auto Fill Title
                </Button>
              </div>
            }
            required
            rules={[
              {
                required: true,
                message: "Title is a required field",
              },
            ]}
          >
            <Input className="input" placeholder="You title" />
          </Form.Item>
          <Form.Item
            className="form-child"
            label="Description"
            name="description"
          >
            <Input.TextArea
              className="input-description"
              placeholder="You description"
            />
          </Form.Item>
          <Button
            // loading={mutationShareVideo?.isLoading}
            onClick={handleSubmitForm}
            className="btn-share"
          >
            SHARE
          </Button>
        </Form>
      </BoxModal>

      <ItemDrawer
        title={
          <div className="title">
            <Image className="icLogo" src={icLogo} alt="icon logo" />
            <div>Youtube Video</div>
          </div>
        }
        placement="right"
        onClose={onCloseMenu}
        open={isOpenMenu}
        width={260}
      >
        <div
          className="list-video"
          onClick={() => {
            onCloseMenu();
            router.push("/list-video");
          }}
        >
          List Video
        </div>
        <div className="share-video" onClick={openModalShareVideo}>
          Share A Video
        </div>
        <div className="logout" onClick={showModalNotification}>
          Log Out
        </div>
      </ItemDrawer>

      <ModalNotification
        open={isOpenNotification}
        onCancel={closeModalNotification}
        centered
        footer={false}
      >
        <div className="content">Are you sure you want to log out ?</div>
        <div className="group-btn">
          <Button className="btn-cancel" onClick={closeModalNotification}>
            Cancel
          </Button>
          <Button className="btn-ok" onClick={handleLogOutMobile}>
            Ok
          </Button>
        </div>
      </ModalNotification>
    </Wrapper>
  );
};
export default Header;
