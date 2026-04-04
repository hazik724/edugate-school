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

export default function Home() {
  return (
    <>
      <Hero />
      <Announcements/>
      <PrincipalSection/>
      <About/>
      <ActivitySection/>
      <Programs/>
      <BigImage/>
      <Testimonials/>
      <Gallery/>
      <ContactForm/>

    </>
  );
}