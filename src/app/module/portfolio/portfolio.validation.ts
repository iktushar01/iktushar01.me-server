import { z } from "zod";

const urlOrEmpty = z.union([z.string().url(), z.literal("")]).optional();

export const createProjectSchema = z.object({
  title: z.string().min(1).max(200),
  tag: z.string().min(1).max(100),
  description: z.string().min(1),
  images: z.array(z.string().url()).default([]),
  technologies: z.array(z.string()).default([]),
  liveLink: urlOrEmpty,
  frontendLink: urlOrEmpty,
  backendLink: urlOrEmpty,
  demoVideoLink: urlOrEmpty,
  challenges: z.array(z.string()).default([]),
  improvements: z.array(z.string()).default([]),
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

export const reorderSchema = z.object({
  items: z.array(
    z.object({
      id: z.string().uuid(),
      sortOrder: z.number().int(),
    })
  ),
});

export const createCertificateSchema = z.object({
  title: z.string().min(1).max(200),
  issuer: z.string().min(1).max(200),
  date: z.string().min(1).max(50),
  description: z.string().min(1),
  image: z.string().url(),
  skills: z.array(z.string()).default([]),
  credentialUrl: urlOrEmpty,
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

export const updateCertificateSchema = createCertificateSchema.partial();

const timelineItemSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const createActivitySchema = z.object({
  slug: z.string().min(1).max(200).optional(),
  title: z.string().min(1).max(200),
  type: z.enum(["hackathon", "competition", "workshop", "seminar", "volunteer"]),
  organizer: z.string().min(1),
  date: z.string().min(1),
  location: z.string().optional(),
  achievement: z.string().optional(),
  shortDescription: z.string().min(1),
  fullDescription: z.string().min(1),
  coverImage: z.string().url(),
  gallery: z.array(z.string().url()).default([]),
  role: z.string().optional(),
  techStack: z.array(z.string()).default([]),
  teamMembers: z.array(z.string()).default([]),
  timeline: z.array(timelineItemSchema).optional(),
  outcomes: z.array(z.string()).default([]),
  certificateImages: z.array(z.string().url()).default([]),
  projectLink: urlOrEmpty,
  githubLink: urlOrEmpty,
  demoLink: urlOrEmpty,
  eventWebsite: urlOrEmpty,
  devpostLink: urlOrEmpty,
  slidesLink: urlOrEmpty,
  projectName: z.string().optional(),
  problemStatement: z.string().optional(),
  solutionOverview: z.string().optional(),
  demoVideoLink: urlOrEmpty,
  teamSize: z.number().int().positive().optional(),
  awards: z.array(z.string()).default([]),
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

export const updateActivitySchema = createActivitySchema.partial();

export const createBlogSchema = z.object({
  title: z.string().min(1).max(300),
  slug: z.string().min(1).max(300).optional(),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  coverImage: z.string().url(),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  publishedAt: z.string().datetime().optional().nullable(),
  readingTime: z.number().int().positive().optional(),
  featured: z.boolean().optional(),
  author: z.string().min(1),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});

export const updateBlogSchema = createBlogSchema.partial();
