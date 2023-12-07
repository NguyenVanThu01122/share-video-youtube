import DetailVideo from "@/components/DetailVideo/page";
import { getDetailVideo } from "@/service/video.service";

// sử dụng generateMetadata để tạo ra title động và description động
export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await getDetailVideo(params?.id);
  return {
    title: res.data.title,
    description: res.data.description,
    icons:
      "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
  };
}

export default async function DetailVideoServer({
  params,
}: {
  params: { id: string };
}) {
  const res = await getDetailVideo(params?.id);

  return <DetailVideo detail={res.data} id={params.id} />;
}
