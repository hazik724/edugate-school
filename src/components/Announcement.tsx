import { getAnnouncements } from "@/sanity/lib/queries";
import AnnouncementsClient from "./AnnouncementsClient";

export default async function Announcements() {
  const announcements = await getAnnouncements();

  return <AnnouncementsClient announcements={announcements} />;
}