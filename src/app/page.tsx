import type { Metadata } from "next";
import About from "@/components/About";
import Announcements from "@/components/Announcement";
import Gallery from "@/components/gallery";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Testimonials from "@/components/testimonial";
import ContactForm from "@/components/ContactForm";
import PrincipalSection from "@/components/Principal";
import BigImage from "@/components/BigImage";
import ActivitySection from "@/components/activity";

// ✅ SEO METADATA (VERY IMPORTANT)
export const metadata: Metadata = {
  title: "Best School in Mirpurkhas | The Edugate School",
  description:
    "The Edugate School is one of the best schools in Mirpurkhas offering quality education, experienced teachers, modern classrooms, and a strong academic foundation for students.",
  keywords: [
    "Best school in Mirpurkhas",
    "School in Mirpurkhas",
    "English medium school in Mirpurkhas",
    "Private school in Mirpurkhas",
    "The Edugate School",
  ],
  openGraph: {
    title: "Best School in Mirpurkhas | The Edugate School",
    description:
      "Quality education in Mirpurkhas with modern learning and expert teachers.",
    url: "https://the-edugate-school.vercel.app/",
    siteName: "The Edugate School",
    locale: "en_PK",
    type: "website",
  },
};

// ✅ HOMEPAGE
export default function Home() {
  return (
    <main>
      {/* H1 should be inside Hero component */}
      <Hero />

      {/* Important sections for SEO depth */}
      <Announcements />
      <PrincipalSection />
      <About />
      <ActivitySection />
      <Programs />
      <BigImage />
      <Testimonials />
      <Gallery />
      <ContactForm />
    </main>
  );
}