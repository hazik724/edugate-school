import { client } from "./client";

export async function getAnnouncements() {
  return await client.fetch(`
    *[_type == "announcement"] | order(_createdAt desc)
  `);
}
export async function getGallery() {
    return await client.fetch(`
      *[_type == "gallery"] | order(_createdAt desc){
      image,
      video
      }
    `);
  }
  export async function getTestimonials() {
    return await client.fetch(`
      *[_type == "testimonial"] | order(_createdAt desc)
    `);
  }