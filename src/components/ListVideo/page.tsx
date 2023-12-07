"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BoxContent,
  BoxPagination,
  Container,
  InformationVideo,
  VideoItem,
  Wrapper,
} from "./styles";

export default function ListVideoPage({
  videos,
  total,
  page,
}: {
  videos: any;
  total: number;
  page: number;
}) {
 
  const router = useRouter();
  const totalPages = Math.ceil(total / 20);

  // hàm xử lý thay đổi page
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`/list-video?page=${newPage}`); // khi thay đổi page push url kèm theo page mới
    }
  };

  return (
    <Wrapper>
      <Container>
        {videos?.map((item: any) => (
          <BoxContent key={item?.id}>
            <VideoItem>
              <iframe
                className="video"
                width="560"
                height="355"
                src={item.url}
                title="YouTube video player"
              />
            </VideoItem>
            <InformationVideo>
              <div
                className="title-video"
                onClick={() => router.push(`/detail-video/${item?.id}`)}
              >
                {item?.title}
              </div>
              <div className="user">
                Shared by: <span>{item?.email}</span>
              </div>
              <div className="description">
                <div>Description:</div>
                {item?.description ? (
                  <div className="content">{item?.description}</div>
                ) : (
                  <div className="no-content">
                    There is no description for this video
                  </div>
                )}
              </div>
            </InformationVideo>
          </BoxContent>
        ))}
      </Container>

      <BoxPagination>
        <button
          className={`${page === 1 && "disable"}`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {Array.from(
          // dùng array form để tạo mảng mới, tham số đầu tiên chỉ định độ dài arr
          { length: totalPages },
          (item, index) => (
            <button
              className={`${page === index + 1 && "active-page"}`}
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          className={`${page === totalPages && "disable"}`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </BoxPagination>
    </Wrapper>
  );
}
