import GalleryClient from "@/components/GalleryClient"
import { getGallery } from "@/sanity/lib/queries"   
export default async function GalleryPage() {
  const gallery = await getGallery();
  return (
    <div>
      <GalleryClient images={gallery} />
    </div>
  )
}