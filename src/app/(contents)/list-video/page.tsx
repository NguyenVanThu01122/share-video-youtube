import ListVideoClient from "@/components/ListVideo/page";
import { getListVideo } from "@/service/video.service";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Video",
  description: "This is a list of videos.",
  icons: "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
};

export const revalidate = 3600; //xác nhận lại dữ liệu sau 1 giờ
export const fetchCache = "force-cache"; // luôn sử dụng dữ liệu từ cache mà không kiểm tra xem nó đã hết hạn hay không.

// const res = await fetch('api', {
//   cache: 'force-cache',
//  next: { revalidate: 3600 }
// });

export default async function ListVideoServer({
  searchParams, // dùng searchParams để lấy page
}: {
  searchParams: any;
}) {
  
  const currentPage = Number(searchParams.page) || 1; // nếu searchParams.page k có gí trị thì lấy giá trị 1
  const res = await getListVideo({
    page: currentPage,
    limit: 10,
  });

  return (
    <ListVideoClient
      videos={res.data?.data || []} // nếu res.data.data k có giá trị thì videos sẽ nhận giá trị mảng rỗng
      total={res.data?.total || 0}
      page={currentPage}
    />
  );
}
