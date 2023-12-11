import Link from "next/link";
import Frame from "../../../../components/frame/Frame";
import Modal from "../../../../components/modal/Modal";
import swagPhotos, { Photo } from "../../../../photos";
import { TestComponent2 } from "./TestComponent2";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return (
    <Modal>
      <Frame photo={photo} />
      <Link href="/">Close modal</Link>
      <TestComponent2 />
    </Modal>
  );
}
