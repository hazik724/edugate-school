import { type SchemaTypeDefinition } from 'sanity'
import announcement from './Announcement'
import gallery from './gallery'
import testimonial from './Testimonials'
import contact from './Contact'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [announcement, gallery, testimonial, contact],
}
