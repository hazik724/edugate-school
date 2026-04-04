import { getTestimonials } from "@/sanity/lib/queries";
import TestimonialsClient from "./TestimonialsClient";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return <TestimonialsClient testimonials={testimonials} />;
}