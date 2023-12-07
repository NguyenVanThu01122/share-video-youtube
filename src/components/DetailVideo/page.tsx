"use client";
import { commentVideo } from "@/service/video.service";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import icBack from "../../../public/images/back_47775.png";

import { useRouter } from "next/navigation";
import {
  InformationVideo,
  ItemBack,
  SectionComment,
  VideoItem,
  Wrapper,
} from "./styles";

function DetailVideoPage({ detail, id }: { detail: any; id: string }) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const login = useSelector((state: any) => state.app?.isLogin);
  // const queryClient = useQueryClient();

  // const { isLoading, isError } = useQuery(
  //   ["detailVideo", params.id],
  //   () => getDetailVideo(params.id),
  //   {
  //     onSuccess: (data) => {
  //       setDetail(data.data);
  //     },
  //     onError: (error) => {
  //       toast.error("Error server");
  //     },
  //     refetchOnWindowFocus: false, // đặt giá trị là false để k gọi lại api khi focus vào trang
  //   }
  // );

  // xử lý add comment
  const mutationComment = useMutation(
    (payload: { videoId: string; comment: string }) => commentVideo(payload),
    {
      onSuccess: (res) => {
        toast.success("Comment successfully!");
        setComment("");
        router.refresh(); // bắt server re-fetching lại các request api để thu được giữ liệu mới nhất, đồng thời vẫn giữ nguyên state phía client
        // queryClient.invalidateQueries({ queryKey: ["detailVideo"] }); // bắt lấy lại dữ liệu của api detail
        // queryClient.refetchQueries({ queryKey: ["detailVideo"] });
      },
      onError: (err) => {},
    }
  );

  // supmit form
  const handleSubmitComment = () => {
    mutationComment.mutate({
      videoId: id,
      comment,
    });
  };

  return (
    <Wrapper>
      <ItemBack onClick={() => router.push("/list-video")}>
        <Image className="icback" src={icBack} alt="icon back" />
        <div className="back">Back</div>
      </ItemBack>
      <VideoItem>
        <iframe
          className="video"
          src={detail?.url}
          title="YouTube video player"
        />
      </VideoItem>
      <InformationVideo>
        <div className="title-video">{detail?.title}</div>
        <div className="user">
          Shared by: <span>{detail?.email}</span>
        </div>
        <div className="description">
          <div>Description:</div>
          {detail?.description ? (
            <div className="content">{detail?.description}</div>
          ) : (
            <div className="no-content">
              There is no description for this video
            </div>
          )}
        </div>
      </InformationVideo>

      <SectionComment>
        <div className="item-comment">
          {login && (
            <div>
              <TextArea
                value={comment}
                className="textArea"
                onChange={(e) => setComment(e.target.value)}
                placeholder="Please enter comments"
              />
              <Button
                loading={mutationComment?.isLoading}
                className="btn-comment"
                disabled={!comment.trim()}
                onClick={handleSubmitComment}
              >
                Comment
              </Button>
            </div>
          )}
          <div className="total-comment">
            {detail?.listComment?.length}{" "}
            <span>
              {detail?.listComment?.length > 1 ? "comments" : "comment"}
            </span>
          </div>
        </div>
        {detail?.listComment?.map((item: any) => (
          <div className="commented" key={item?.id}>
            <div className="user-information">
              {item?.email} <span>{moment(item?.createdAt).fromNow()}</span>
            </div>
            <div className="content">{item?.comment}</div>
          </div>
        ))}
      </SectionComment>
    </Wrapper>
  );
}
export default DetailVideoPage;
