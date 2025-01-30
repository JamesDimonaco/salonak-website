export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialMediaLink {
  name: string;
  href: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}
