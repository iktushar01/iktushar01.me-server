// @ts-nocheck
import { BlogStatus } from "../lib/prisma-exports";
import { prisma } from "../lib/prisma";
import { estimateReadingTime } from "../module/portfolio/portfolio.helpers";
import { blogsSeed } from "./blogs-seed";

const projectsSeed = [
  {
    title: "Acadex",
    tag: "Next.js Platform",
    images: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/one_uz50sw.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/two_ozn9cp.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/three_p83x25.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png",
    ],
    description:
      "A classroom-first study platform where students can join classrooms, organize subjects and folders, upload notes, save favorites, track leaderboard activity, and collaborate through a clean role-aware academic workflow.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "TanStack React Form",
      "Axios",
      "Framer Motion",
      "Zod",
      "Radix UI",
    ],
    liveLink: "https://acadex-client.vercel.app/",
    frontendLink: "https://github.com/iktushar01/Acadex-client.git",
    backendLink: "https://github.com/iktushar01/Acadex-server.git",
    challenges: [
      "Designing role-aware dashboard flows for students, CRs, admins, and super admins across protected routes",
      "Structuring classroom, subject, folder, and note management into a clear academic hierarchy",
      "Handling approval-aware note workflows with favorites, comments, and leaderboard activity",
    ],
    improvements: [
      "Add richer classroom analytics",
      "Introduce real-time activity updates",
      "Expand note discovery with filters",
    ],
    sortOrder: 1,
  },
  {
    title: "RetailFlow POS Management System",
    tag: "Full Stack",
    images: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219308/ChatGPT_Image_May_17_2026_10_19_46_AM_uzr4ic.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815021/Screenshot_2026-05-15_091339_nspgjj.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815021/Screenshot_2026-05-15_091432_ynabtv.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815021/Screenshot_2026-05-15_091506_kc5ip6.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815779/Screenshot_2026-05-15_092913_tbzomn.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815927/Screenshot_2026-05-15_093024_y9cblf.png",
    ],
    description:
      "A comprehensive POS Store Management System with advanced inventory tracking, supplier management, and warehouse operations.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Table",
      "Axios",
      "SweetAlert2",
    ],
    liveLink: "https://retail-flow-client.vercel.app/dashboard/overview",
    frontendLink: "https://github.com/iktushar01/RetailFlow-client.git",
    backendLink: "https://github.com/iktushar01/RetailFlow-server.git",
    challenges: [
      "Implementing secure session management",
      "Building complex procurement workflows",
      "Managing real-time inventory updates",
    ],
    improvements: [
      "Add sales POS terminal",
      "Implement barcode scanning",
      "Add email notifications",
    ],
    sortOrder: 2,
  },
  {
    title: "Easy Home - Real Estate Platform",
    tag: "MERN Stack",
    images: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/one_zgibwm.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465885/two_ram1lj.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/three_opba7k.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/four_riopet.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465882/five_um6rxu.png",
    ],
    description:
      "A MERN stack real estate platform with role-based dashboards, wishlist functionality, and Stripe payment integration.",
    technologies: [
      "React",
      "Firebase Auth",
      "MongoDB",
      "Express.js",
      "Node.js",
      "TanStack Query",
      "Stripe.js",
      "Tailwind CSS",
    ],
    liveLink: "https://easy-home-5ec20.web.app/",
    frontendLink: "https://github.com/iktushar01/Easy-Home-Client.git",
    backendLink: "https://github.com/iktushar01/Easy-Home-Server.git",
    challenges: [
      "Dynamic role-based dashboards",
      "JWT route security",
      "Stripe payment logic",
    ],
    improvements: [
      "Add agent selling statistics",
      "Implement property report system",
      "Multi-language support",
    ],
    sortOrder: 3,
  },
] as const;

const certificatesSeed = [
  {
    title: "Complete Web Development Course with Jhankar Mahbub",
    issuer: "Programming Hero",
    date: "2024",
    description:
      "Successfully completed an intensive full-stack web development bootcamp covering React.js, Node.js, Express.js, MongoDB, and modern JavaScript.",
    image:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Firebase",
      "JWT",
    ],
    credentialUrl: "https://web.programming-hero.com/",
    sortOrder: 1,
  },
  {
    title: "Webflow Professional Certification",
    issuer: "Webflow",
    date: "2023",
    description:
      "Certified in Webflow platform mastery, demonstrating proficiency in no-code web design, responsive layouts, and CMS integration.",
    image:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    skills: [
      "Webflow",
      "Web Design",
      "Responsive Design",
      "CMS",
      "UI/UX",
      "No-Code",
    ],
    credentialUrl: "https://webflow.com/",
    sortOrder: 2,
  },
] as const;

const activitiesSeed = [
  {
    slug: "acadex-hackathon-2025",
    title: "National Inter-University Hackathon",
    type: "hackathon" as const,
    organizer: "Bangladesh ICT Division",
    date: "March 2025",
    location: "Dhaka, Bangladesh",
    achievement: "Winner",
    shortDescription:
      "Built Acadex — a classroom-first study platform — in 36 hours. Led a team of four to deliver a full-stack MVP with real-time collaboration.",
    fullDescription:
      "Participated in a 36-hour national hackathon focused on EdTech innovation. Our team identified gaps in how students organize academic materials across fragmented tools and built Acadex — a unified classroom platform with role-aware workflows, note sharing, and leaderboard gamification. We pitched to a panel of industry judges and won first place for technical execution and product vision.",
    coverImage:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/one_uz50sw.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/two_ozn9cp.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/three_p83x25.png",
    ],
    role: "Team Lead & Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    teamMembers: [
      "Tushar Islam",
      "Team Member A",
      "Team Member B",
      "Team Member C",
    ],
    timeline: [
      {
        label: "Day 1 — Ideation",
        value: "Problem research, wireframes, architecture",
      },
      {
        label: "Day 1 — Build",
        value: "Auth, classroom CRUD, file uploads",
      },
      {
        label: "Day 2 — Polish",
        value: "Leaderboard, UI refinement, demo prep",
      },
      { label: "Final Pitch", value: "Live demo + Q&A with judges" },
    ],
    outcomes: [
      "Won 1st place among 40+ teams",
      "Received mentorship from senior engineers",
      "Project evolved into ongoing portfolio flagship",
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    ],
    projectName: "Acadex",
    problemStatement:
      "Students juggle notes, assignments, and class communication across WhatsApp, Google Drive, and paper — with no single academic hub.",
    solutionOverview:
      "A classroom-centric platform where teachers create classes, students join with codes, upload organized notes, and compete on a subject-wise leaderboard.",
    githubLink: "https://github.com/iktushar01",
    demoLink: "https://www.iktushar01.me",
    demoVideoLink: "https://www.youtube.com",
    teamSize: 4,
    awards: ["1st Place — Best EdTech Solution", "Audience Choice Award"],
    devpostLink: "https://devpost.com",
    eventWebsite: "https://www.ictd.gov.bd",
    sortOrder: 1,
  },
  {
    slug: "web-dev-workshop-2024",
    title: "Advanced React & Next.js Workshop",
    type: "workshop" as const,
    organizer: "Programming Hero",
    date: "August 2024",
    location: "Online",
    achievement: "Participant",
    shortDescription:
      "Hands-on workshop covering React Server Components, App Router patterns, and performance optimization in production Next.js apps.",
    fullDescription:
      "A two-day intensive workshop led by senior instructors from Programming Hero. Covered modern React 19 features, Next.js App Router architecture, data fetching strategies, and deployment best practices. Built a mini project applying server and client component boundaries.",
    coverImage:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    ],
    role: "Participant",
    techStack: ["React 19", "Next.js", "TypeScript"],
    outcomes: [
      "Completed all workshop assignments",
      "Built a server-rendered dashboard prototype",
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    ],
    eventWebsite: "https://web.programming-hero.com",
    slidesLink: "https://slides.com",
    sortOrder: 2,
  },
  {
    slug: "coding-competition-2024",
    title: "Regional Competitive Programming Contest",
    type: "competition" as const,
    organizer: "ACM Student Chapter",
    date: "November 2024",
    location: "Chittagong, Bangladesh",
    achievement: "Finalist",
    shortDescription:
      "Solved algorithmic challenges under time pressure. Advanced to the regional finals among 200+ participants.",
    fullDescription:
      "Competed in a 5-hour ICPC-style programming contest featuring data structures, graph algorithms, and dynamic programming problems. Our team placed in the top 15, qualifying for the regional finals. Strengthened problem decomposition and time-management skills under competitive conditions.",
    coverImage:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    ],
    role: "Team Programmer",
    techStack: ["C++", "Python", "Algorithms"],
    teamMembers: ["Tushar Islam", "Teammate 1", "Teammate 2"],
    teamSize: 3,
    outcomes: [
      "Regional finalist — top 15 of 200+ teams",
      "Solved 6 of 10 problems in qualifiers",
    ],
    eventWebsite: "https://icpc.global",
    sortOrder: 3,
  },
  {
    slug: "tech-seminar-2024",
    title: "Future of Web Development Seminar",
    type: "seminar" as const,
    organizer: "Google Developer Groups",
    date: "June 2024",
    location: "Dhaka, Bangladesh",
    achievement: "Participant",
    shortDescription:
      "Industry seminar on AI-assisted development, edge computing, and the evolving full-stack landscape in 2024–2025.",
    fullDescription:
      "Attended keynote sessions from senior engineers at leading tech companies. Topics included AI pair programming, WebAssembly adoption, and sustainable software architecture. Networked with local developer community and participated in an open Q&A panel.",
    coverImage:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png",
    ],
    role: "Attendee",
    outcomes: [
      "Expanded professional network",
      "Gained insights on AI tooling trends",
    ],
    eventWebsite: "https://gdg.community.dev",
    sortOrder: 4,
  },
  {
    slug: "community-volunteer-2023",
    title: "Code for Community — Teaching Program",
    type: "volunteer" as const,
    organizer: "Local Youth Tech Initiative",
    date: "2023 — 2024",
    location: "Chittagong, Bangladesh",
    achievement: "Volunteer",
    shortDescription:
      "Volunteered as a web development mentor, teaching HTML, CSS, and JavaScript fundamentals to 30+ high school students.",
    fullDescription:
      "Led weekly coding sessions for underprivileged students with limited access to technology education. Designed beginner-friendly curriculum, hands-on exercises, and a capstone mini-project where students built their first personal portfolio pages.",
    coverImage:
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png",
    ],
    role: "Web Development Mentor",
    techStack: ["HTML", "CSS", "JavaScript"],
    outcomes: [
      "Mentored 30+ students over 6 months",
      "15 students completed capstone portfolios",
      "Received community appreciation certificate",
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    ],
    sortOrder: 5,
  },
] as const;

async function seedBlogs() {
  for (const post of blogsSeed) {
    await prisma.blogPost.create({
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        category: post.category,
        tags: post.tags,
        publishedAt: new Date(post.publishedAt),
        readingTime: post.readingTime || estimateReadingTime(post.content),
        featured: post.featured,
        author: post.author,
        status: BlogStatus.PUBLISHED,
      },
    });
  }
}

export const seedPortfolio = async () => {
  try {
    const [existingProjects, existingBlogs] = await Promise.all([
      prisma.project.count(),
      prisma.blogPost.count(),
    ]);

    if (existingProjects > 0 && existingBlogs > 0) {
      console.log("Portfolio data already seeded. Skipping.");
      return;
    }

    console.log("Seeding portfolio data...");

    if (existingProjects === 0) {
      for (const project of projectsSeed) {
        await prisma.project.create({ data: { ...project } });
      }

      for (const certificate of certificatesSeed) {
        await prisma.certificate.create({ data: { ...certificate } });
      }

      for (const activity of activitiesSeed) {
        await prisma.activity.create({
          data: {
            ...activity,
            techStack: activity.techStack ?? [],
            teamMembers: activity.teamMembers ?? [],
            outcomes: activity.outcomes ?? [],
            awards: activity.awards ?? [],
            certificateImages: activity.certificateImages ?? [],
          },
        });
      }
    }

    if (existingBlogs === 0) {
      await seedBlogs();
    }

    console.log("Portfolio data seeded successfully.");
  } catch (error) {
    console.error("Error seeding portfolio data:", error);
  }
};
