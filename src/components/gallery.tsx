import { getGallery } from "@/sanity/lib/queries";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const images = await getGallery();

  return <GalleryClient images={images} />;
}