var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../iktushar01.me/src/components/data/blogs.ts
var blogs_exports = {};
__export(blogs_exports, {
  blogPostsData: () => blogPostsData
});
var blogPostsData;
var init_blogs = __esm({
  "../iktushar01.me/src/components/data/blogs.ts"() {
    "use strict";
    blogPostsData = [
      {
        id: "1",
        title: "Building Acadex: A Classroom-First Study Platform",
        slug: "building-acadex-classroom-platform",
        excerpt: "How we designed and shipped a full-stack academic platform in 36 hours \u2014 from problem discovery to a production-ready MVP.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
        category: "Case Study",
        tags: ["Next.js", "EdTech", "Full-Stack", "Hackathon"],
        publishedAt: "2025-04-15",
        readingTime: 8,
        featured: true,
        author: "Tushar Islam",
        content: `## The Problem

Students today juggle academic life across WhatsApp groups, Google Drive folders, and handwritten notes. There is no single hub that respects classroom boundaries while keeping materials organized and motivating.

## Our Approach

We started with user interviews \u2014 five students and two teachers \u2014 to map pain points. The insight was clear: **people don't want another social network; they want a classroom**.

### Architecture Decisions

We chose Next.js App Router for its server-first rendering and clean API boundaries:

\`\`\`typescript
// app/api/classrooms/route.ts
export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const classroom = await prisma.classroom.create({
    data: { name: body.name, teacherId: session.user.id },
  });

  return NextResponse.json(classroom);
}
\`\`\`

### Key Features

1. **Role-aware dashboards** \u2014 teachers manage, students participate
2. **Folder-based note organization** \u2014 subjects \u2192 folders \u2192 files
3. **Leaderboard gamification** \u2014 healthy competition per subject

## Lessons Learned

- Ship the core loop first: join class \u2192 upload note \u2192 see leaderboard
- Server Components dramatically reduced client bundle size
- Real users during the hackathon demo revealed UX gaps we fixed on the fly

## What's Next

Acadex continues to evolve with spaced repetition, quiz modes, and mobile-first refinements. The hackathon win validated the vision \u2014 now it's about sustainable growth.
`
      },
      {
        id: "2",
        title: "React Server Components in Practice",
        slug: "react-server-components-in-practice",
        excerpt: "A practical guide to knowing when to reach for Server Components vs Client Components in Next.js App Router projects.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/one_uz50sw.png",
        category: "Tutorial",
        tags: ["React", "Next.js", "Performance"],
        publishedAt: "2025-03-02",
        readingTime: 6,
        featured: false,
        author: "Tushar Islam",
        content: `## Why Server Components Matter

React Server Components (RSC) let you fetch data and render on the server without shipping that logic to the client. For content-heavy pages, this means faster loads and smaller JavaScript bundles.

## The Mental Model

Ask one question: **does this component need browser APIs or interactivity?**

| Need | Use |
|------|-----|
| \`useState\`, \`useEffect\`, event handlers | Client Component |
| Data fetching, static layout, SEO content | Server Component |

## Example: Blog Post Page

\`\`\`tsx
// Server Component \u2014 no "use client"
import { getPostBySlug } from "@/lib/blog";
import { BlogContent } from "@/components/modules/blog/blog-content";

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <BlogContent content={post.content} />
    </article>
  );
}
\`\`\`

## Common Pitfalls

- Importing a Client Component into a Server Component is fine \u2014 but not the reverse without children composition
- Don't add \`"use client"\` at the root unless necessary
- Colocate interactive islands (search, modals) as small client boundaries

## Takeaway

Start server-first. Add \`"use client"\` only where interactivity demands it. Your users and Lighthouse scores will thank you.
`
      },
      {
        id: "3",
        title: "Designing a Premium Portfolio with Tailwind CSS 4",
        slug: "premium-portfolio-tailwind-css-4",
        excerpt: "Thoughts on flat editorial design, OKLCH color tokens, and building a portfolio that feels intentional rather than templated.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/two_ozn9cp.png",
        category: "Design",
        tags: ["Tailwind CSS", "UI/UX", "Portfolio"],
        publishedAt: "2025-02-10",
        readingTime: 5,
        featured: false,
        author: "Tushar Islam",
        content: `## Less Is More

The best portfolios I've studied share one trait: **restraint**. Sharp corners, hairline borders, and generous whitespace signal confidence. Rounded cards and gradient overload often read as "template."

## OKLCH for Theming

Tailwind CSS 4 pairs beautifully with OKLCH variables:

\`\`\`css
:root {
  --primary: oklch(0.76 0.16 82);
  --background: oklch(0.98 0.005 80);
}

.dark {
  --primary: oklch(0.86 0.17 96);
  --background: oklch(0.13 0.012 85);
}
\`\`\`

OKLCH gives perceptually uniform lightness shifts \u2014 dark mode doesn't feel like an afterthought.

## Motion With Purpose

Framer Motion scroll reveals work when staggered subtly (\`delay: index * 0.05\`). Avoid animating everything; let content breathe.

## Typography Hierarchy

- Display font for headings (Space Grotesk)
- Sans for body (Inter)
- Mono for metadata labels

\`text-[10px] uppercase tracking-widest\` for kickers creates a editorial magazine feel.

## Final Thought

Your portfolio is a product. Treat typography, spacing, and motion as features \u2014 not decoration.
`
      },
      {
        id: "4",
        title: "TypeScript Patterns for Full-Stack APIs",
        slug: "typescript-patterns-fullstack-apis",
        excerpt: "Shared types, Zod validation, and Prisma \u2014 patterns I use to keep frontend and backend contracts in sync.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/three_p83x25.png",
        category: "Tutorial",
        tags: ["TypeScript", "Node.js", "API"],
        publishedAt: "2025-01-20",
        readingTime: 7,
        featured: false,
        author: "Tushar Islam",
        content: `## Shared Contracts

The biggest source of bugs in full-stack apps is **schema drift** \u2014 the frontend expects a shape the API no longer returns.

## Pattern: Zod at the Boundary

\`\`\`typescript
import { z } from "zod";

export const createClassroomSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().optional(),
});

export type CreateClassroomInput = z.infer<typeof createClassroomSchema>;
\`\`\`

Validate on the server. Infer types for the client. One source of truth.

## Prisma + Type Safety

Prisma generates types from your schema. Combine with explicit DTOs for API responses to avoid leaking internal fields:

\`\`\`typescript
function toClassroomDTO(classroom: Classroom) {
  return {
    id: classroom.id,
    name: classroom.name,
    createdAt: classroom.createdAt.toISOString(),
  };
}
\`\`\`

## Error Handling

Return consistent error shapes:

\`\`\`json
{ "error": "Validation failed", "details": [{ "field": "name", "message": "Required" }] }
\`\`\`

Clients can display field-level errors without guessing.

## Summary

Invest in types at system boundaries. It pays off every time you refactor.
`
      },
      {
        id: "5",
        title: "From Bootcamp to Production: My Developer Journey",
        slug: "bootcamp-to-production-journey",
        excerpt: "Reflections on learning web development through Programming Hero and shipping real projects that matter.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
        category: "Career",
        tags: ["Career", "Learning", "Web Development"],
        publishedAt: "2024-12-05",
        readingTime: 4,
        featured: false,
        author: "Tushar Islam",
        content: `## Starting Point

I began with zero programming background. The Programming Hero bootcamp gave structure \u2014 daily assignments, projects, and a community that kept me accountable.

## The Turning Point

Tutorials teach syntax. **Projects teach judgment.** Building Acadex forced me to make real tradeoffs: PostgreSQL vs MongoDB, auth strategies, deployment pipelines.

## Skills That Transferred

- Breaking problems into shippable slices
- Reading documentation instead of copying Stack Overflow
- Debugging systematically \u2014 reproduce, isolate, fix, verify

## Advice for Beginners

1. Build one project deeply instead of ten shallowly
2. Deploy early \u2014 production teaches things localhost never will
3. Write about what you learn (like this blog)

## Looking Forward

The journey from bootcamp graduate to production engineer is ongoing. Every shipped feature is another lesson. Keep building.
`
      },
      {
        id: "6",
        title: "Optimizing Images in Next.js with Cloudinary",
        slug: "optimizing-images-nextjs-cloudinary",
        excerpt: "How I serve fast, responsive images across my portfolio using next/image and Cloudinary remote patterns.",
        coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
        category: "Tutorial",
        tags: ["Next.js", "Performance", "Cloudinary"],
        publishedAt: "2024-11-18",
        readingTime: 5,
        featured: false,
        author: "Tushar Islam",
        content: `## Why Image Optimization Matters

Images are often the largest assets on a portfolio. Unoptimized hero images can tank LCP scores and first impressions.

## next/image Basics

\`\`\`tsx
<Image
  src="https://res.cloudinary.com/.../hero.png"
  alt="Project screenshot"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
  priority
/>
\`\`\`

The \`sizes\` prop is critical \u2014 it tells the browser which resolution to request.

## Cloudinary Remote Patterns

Configure \`next.config.ts\`:

\`\`\`typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/dfoqasqnw/**",
    },
  ],
},
\`\`\`

## Tips

- Use \`priority\` only for above-the-fold images
- Prefer \`fill\` + aspect-ratio containers for responsive cards
- Cloudinary transforms (\`w_800,q_auto,f_auto\`) reduce payload further

## Result

Proper image strategy cut my portfolio LCP from ~3.2s to under 1.8s on mobile.
`
      }
    ];
  }
});

// dist/app.js
import express2 from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import fs from "node:fs";
import path from "node:path";

// dist/config/env.js
import dotenv from "dotenv";
dotenv.config();
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = process.env.VERCEL === "1" ? "production" : "development";
}
var requiredEnvVariables = [
  "NODE_ENV",
  "BETTER_AUTH_URL",
  "FRONTEND_URL",
  "DATABASE_URL",
  "BETTER_AUTH_SECRET",
  "ACCESS_TOKEN_SECRET",
  "REFRESH_TOKEN_SECRET",
  "ACCESS_TOKEN_EXPIRES_IN",
  "REFRESH_TOKEN_EXPIRES_IN",
  "BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN",
  "BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "SUPER_ADMIN_EMAIL",
  "SUPER_ADMIN_PASSWORD"
];
requiredEnvVariables.forEach((variable) => {
  if (!process.env[variable]) {
    const message = `Environment variable ${variable} is not defined`;
    console.error(`[env] ${message}`);
    throw new Error(message);
  }
});
if (!process.env.PORT) {
  process.env.PORT = "5000";
}
var loadEnvVariables = () => {
  return {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN: process.env.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE: process.env.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD
  };
};
var envVars = loadEnvVariables();

// dist/app/routes/index.js
import express from "express";

// dist/app/module/activity/activity.route.js
import { Router } from "express";

// dist/app/lib/prisma-exports.js
import prismaPkg from "./generated/prisma/index.js";
var prismaModule = prismaPkg;
var PrismaClient = prismaModule.PrismaClient;
var Prisma = prismaModule.Prisma;
var Role = prismaModule.Role;
var UserStatus = prismaModule.UserStatus;
var Gender = prismaModule.Gender;
var ActivityType = prismaModule.ActivityType;
var BlogStatus = prismaModule.BlogStatus;

// dist/app/errorHelpers/AppError.js
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.stack = stack;
  }
};
var AppError_default = AppError;

// dist/app/lib/prisma.js
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
var connectionString = `${envVars.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// dist/app/utils/jwt.js
import jwt from "jsonwebtoken";
var createToken = (payload, secret, { expiresIn } = {}) => {
  const token = jwt.sign(payload, secret, {
    ...expiresIn !== void 0 ? { expiresIn } : {}
  });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      success: true,
      message: "Token verified successfully",
      decoded
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      error
    };
  }
};
var decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};
var jwtUtils = {
  createToken,
  verifyToken,
  decodeToken
};

// dist/app/utils/cookies.js
var setCookie = (res, key, value, options) => {
  res.cookie(key, value, options);
};
var getCookie = (req, key) => {
  return req.cookies[key];
};
var clearCookie = (res, key, options) => {
  res.clearCookie(key, options);
};
var cookieUtils = {
  setCookie,
  getCookie,
  clearCookie
};

// dist/app/middleware/checkAuth.js
import { StatusCodes } from "http-status-codes";
var checkAuth = (...authRoles) => async (req, res, next) => {
  try {
    const sessionToken = cookieUtils.getCookie(req, "better-auth.session_token");
    if (sessionToken) {
      const sessionExists = await prisma.session.findFirst({
        where: {
          token: sessionToken,
          expiresAt: {
            gt: /* @__PURE__ */ new Date()
          }
        },
        include: {
          user: true
        }
      });
      if (sessionExists && sessionExists.user) {
        const user = sessionExists.user;
        const now = /* @__PURE__ */ new Date();
        const expiresAt = new Date(sessionExists.expiresAt);
        const createdAt = new Date(sessionExists.createdAt);
        const sessionLifeTime = expiresAt.getTime() - createdAt.getTime();
        const timeRemaining = expiresAt.getTime() - now.getTime();
        const percentRemaining = timeRemaining / sessionLifeTime * 100;
        if (percentRemaining < 20) {
          res.setHeader("X-Session-Refresh", "true");
          res.setHeader("X-Session-Expires-At", expiresAt.toISOString());
          res.setHeader("X-Time-Remaining", timeRemaining.toString());
          console.log("Session Expiring Soon!!");
        }
        if (user.status === UserStatus.SUSPENDED || user.status === UserStatus.DELETED) {
          throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! User is not active.");
        }
        if (user.isDeleted) {
          throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! User is deleted.");
        }
        if (authRoles.length > 0 && !authRoles.includes(user.role)) {
          throw new AppError_default(StatusCodes.FORBIDDEN, "Forbidden access! You do not have permission to access this resource.");
        }
        req.user = {
          ...user,
          userId: user.id
        };
      }
    }
    const accessToken = cookieUtils.getCookie(req, "accessToken");
    if (!accessToken) {
      throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! No access token provided.");
    }
    const verifiedToken = jwtUtils.verifyToken(accessToken, envVars.ACCESS_TOKEN_SECRET);
    if (!verifiedToken.success) {
      throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! Invalid access token.");
    }
    req.user = verifiedToken.decoded;
    const isUserExist = await prisma.user.findUnique({
      where: { id: verifiedToken.decoded.userId },
      select: { id: true, status: true, isDeleted: true }
    });
    if (!isUserExist) {
      throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! User no longer exists.");
    }
    if (isUserExist.status === UserStatus.SUSPENDED || isUserExist.status === UserStatus.DELETED || isUserExist.isDeleted) {
      throw new AppError_default(StatusCodes.UNAUTHORIZED, "Unauthorized access! User is not active or has been deleted.");
    }
    if (authRoles.length > 0 && !authRoles.includes(verifiedToken.decoded.role)) {
      throw new AppError_default(StatusCodes.FORBIDDEN, "Forbidden access! You do not have permission to access this resource.");
    }
    next();
  } catch (error) {
    next(error);
  }
};

// dist/app/middleware/validateRequest.js
import { StatusCodes as StatusCodes2 } from "http-status-codes";
var validateRequest = (ZodObject, source = "body") => {
  return (req, res, next) => {
    const dataToValidate = req[source];
    const parseResult = ZodObject.safeParse(dataToValidate);
    if (!parseResult.success) {
      const errorSources = parseResult.error.issues.map((issue) => ({
        path: issue.path.join(".") || "",
        message: issue.message
      }));
      return res.status(StatusCodes2.BAD_REQUEST).json({
        success: false,
        message: "Validation failed",
        errorSources,
        error: parseResult.error.issues
      });
    }
    Object.assign(req[source], parseResult.data);
    next();
  };
};

// dist/app/module/portfolio/portfolio.validation.js
import { z } from "zod";
var urlOrEmpty = z.union([z.string().url(), z.literal("")]).optional();
var createProjectSchema = z.object({
  title: z.string().min(1).max(200),
  tag: z.string().min(1).max(100),
  description: z.string().min(1),
  images: z.array(z.string().url()).default([]),
  technologies: z.array(z.string()).default([]),
  liveLink: urlOrEmpty,
  frontendLink: urlOrEmpty,
  backendLink: urlOrEmpty,
  challenges: z.array(z.string()).default([]),
  improvements: z.array(z.string()).default([]),
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional()
});
var updateProjectSchema = createProjectSchema.partial();
var reorderSchema = z.object({
  items: z.array(z.object({
    id: z.string().uuid(),
    sortOrder: z.number().int()
  }))
});
var createCertificateSchema = z.object({
  title: z.string().min(1).max(200),
  issuer: z.string().min(1).max(200),
  date: z.string().min(1).max(50),
  description: z.string().min(1),
  image: z.string().url(),
  skills: z.array(z.string()).default([]),
  credentialUrl: urlOrEmpty,
  sortOrder: z.number().int().optional(),
  isPublished: z.boolean().optional()
});
var updateCertificateSchema = createCertificateSchema.partial();
var timelineItemSchema = z.object({
  label: z.string(),
  value: z.string()
});
var createActivitySchema = z.object({
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
  isPublished: z.boolean().optional()
});
var updateActivitySchema = createActivitySchema.partial();
var createBlogSchema = z.object({
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
  status: z.enum(["DRAFT", "PUBLISHED"]).optional()
});
var updateBlogSchema = createBlogSchema.partial();

// dist/app/module/activity/activity.controller.js
import { StatusCodes as StatusCodes4 } from "http-status-codes";

// dist/app/shared/catchAsync.js
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// dist/app/shared/sendResponse.js
var sendResponse = (res, data) => {
  res.status(data.statusCode).json({
    success: data.success,
    data: data.data,
    message: data.message,
    meta: data.meta
  });
};

// dist/app/module/activity/activity.service.js
import { StatusCodes as StatusCodes3 } from "http-status-codes";

// dist/app/utils/QueryBuilder.js
var QueryBuilder = class {
  model;
  queryParams;
  config;
  query;
  countQuery;
  // Pagination state — stored so execute() can build the meta object
  page = 1;
  limit = 10;
  // Tracks whether fields() has been called.
  // When true, include() and dynamicInclude() are no-ops because Prisma
  // does not allow `select` and `include` to coexist on the same query.
  hasSelectFields = false;
  constructor(model, queryParams, config = {}) {
    this.model = model;
    this.queryParams = queryParams;
    this.config = config;
    this.query = {
      where: {},
      include: {},
      orderBy: {},
      skip: 0,
      take: 10
    };
    this.countQuery = {
      where: {}
    };
  }
  // ─── Search ────────────────────────────────────────────────────────────────
  /**
   * Applies a full-text `OR` search across `config.searchableFields`.
   *
   * Supports dot-notation for relations:
   *   "name"                 → { name: { contains, mode } }
   *   "creator.email"        → { creator: { email: { contains, mode } } }
   *   "memberships.user.name"→ { memberships: { some: { user: { name: ... } } } }
   *
   * Merges with any existing `OR` conditions rather than overwriting them.
   * No-op when ?searchTerm is absent or searchableFields is empty.
   */
  search() {
    const { searchTerm } = this.queryParams;
    const { searchableFields } = this.config;
    if (!searchTerm || !searchableFields || searchableFields.length === 0) {
      return this;
    }
    const searchConditions = searchableFields.map((field) => {
      const stringFilter = {
        contains: searchTerm,
        mode: "insensitive"
      };
      if (!field.includes(".")) {
        return { [field]: stringFilter };
      }
      const parts = field.split(".");
      if (parts.length === 2) {
        const [relation, nestedField] = parts;
        if (!relation || !nestedField)
          return { [field]: stringFilter };
        return { [relation]: { [nestedField]: stringFilter } };
      }
      if (parts.length === 3) {
        const [relation, nestedRelation, nestedField] = parts;
        if (!relation || !nestedRelation || !nestedField) {
          return { [field]: stringFilter };
        }
        return {
          [relation]: {
            some: { [nestedRelation]: { [nestedField]: stringFilter } }
          }
        };
      }
      return { [field]: stringFilter };
    });
    const whereConditions = this.query.where;
    const countWhereConditions = this.countQuery.where;
    whereConditions.OR = [
      ...whereConditions.OR ?? [],
      ...searchConditions
    ];
    countWhereConditions.OR = [
      ...countWhereConditions.OR ?? [],
      ...searchConditions
    ];
    return this;
  }
  // ─── Filter ────────────────────────────────────────────────────────────────
  /**
   * Maps remaining query params to Prisma `where` conditions.
   *
   * Reserved params that are always excluded:
   *   searchTerm, page, limit, sortBy, sortOrder, fields, include
   *
   * Supports:
   *   - Direct value:    ?status=APPROVED        → { status: "APPROVED" }
   *   - Boolean strings: ?isDeleted=false         → { isDeleted: false }
   *   - Dot notation:    ?creator.name=John       → { creator: { name: "John" } }
   *   - Range operators: ?createdAt[gte]=2024-01  → { createdAt: { gte: ... } }
   *   - Array values:    ?status[in][]=A&...      → { status: { in: [...] } }
   *
   * If `config.filterableFields` is set, only those keys are applied (whitelist).
   * If omitted, all non-reserved params are applied (open — useful in dev).
   *
   * Note on dot-notation fields:
   *   They are only applied when the key exists in `filterableFields` (if set).
   *   This prevents clients from filtering on arbitrary nested relations.
   */
  filter() {
    const { filterableFields } = this.config;
    const reservedParams = /* @__PURE__ */ new Set([
      "searchTerm",
      "page",
      "limit",
      "sortBy",
      "sortOrder",
      "fields",
      "include"
    ]);
    const queryWhere = this.query.where;
    const countQueryWhere = this.countQuery.where;
    Object.entries(this.queryParams).forEach(([key, value]) => {
      if (reservedParams.has(key))
        return;
      if (value === void 0 || value === "")
        return;
      if (key.includes(".")) {
        if (filterableFields && !filterableFields.includes(key))
          return;
        const parts = key.split(".");
        if (parts.length === 2) {
          const [relation, nestedField] = parts;
          if (!relation || !nestedField)
            return;
          if (!queryWhere[relation]) {
            queryWhere[relation] = {};
            countQueryWhere[relation] = {};
          }
          queryWhere[relation][nestedField] = this.parseFilterValue(value);
          countQueryWhere[relation][nestedField] = this.parseFilterValue(value);
        } else if (parts.length === 3) {
          const [relation, nestedRelation, nestedField] = parts;
          if (!relation || !nestedRelation || !nestedField)
            return;
          if (!queryWhere[relation]) {
            queryWhere[relation] = { some: {} };
            countQueryWhere[relation] = { some: {} };
          }
          const querySome = queryWhere[relation].some;
          const countSome = countQueryWhere[relation].some;
          if (!querySome[nestedRelation])
            querySome[nestedRelation] = {};
          if (!countSome[nestedRelation])
            countSome[nestedRelation] = {};
          querySome[nestedRelation][nestedField] = this.parseFilterValue(value);
          countSome[nestedRelation][nestedField] = this.parseFilterValue(value);
        }
        return;
      }
      const isAllowed = !filterableFields || filterableFields.length === 0 || filterableFields.includes(key);
      if (!isAllowed)
        return;
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        const parsed = this.parseRangeFilter(value);
        queryWhere[key] = parsed;
        countQueryWhere[key] = parsed;
        return;
      }
      queryWhere[key] = this.parseFilterValue(value);
      countQueryWhere[key] = this.parseFilterValue(value);
    });
    return this;
  }
  // ─── Paginate ──────────────────────────────────────────────────────────────
  /**
   * Applies `skip` / `take` from ?page and ?limit params.
   * Defaults: page = 1, limit = 10.
   * Always call this AFTER search() and filter() so count reflects filters.
   */
  paginate() {
    const page = Math.max(1, Number(this.queryParams.page) || 1);
    const limit = Math.min(
      100,
      // hard cap — prevents clients requesting 10 000 rows
      Math.max(1, Number(this.queryParams.limit) || 10)
    );
    this.page = page;
    this.limit = limit;
    this.query.skip = (page - 1) * limit;
    this.query.take = limit;
    return this;
  }
  // ─── Sort ──────────────────────────────────────────────────────────────────
  /**
   * Applies `orderBy` from ?sortBy and ?sortOrder params.
   * Defaults: sortBy = "createdAt", sortOrder = "desc".
   *
   * Supports dot notation:
   *   ?sortBy=creator.name    → orderBy: { creator: { name: "asc" } }
   *   ?sortBy=createdAt       → orderBy: { createdAt: "desc" }
   *
   * Note: two-level nested sort (3 parts) is not supported by Prisma's
   * standard orderBy — only one level of relation is valid.
   */
  sort() {
    const sortBy = this.queryParams.sortBy || "createdAt";
    const sortOrder = this.queryParams.sortOrder === "asc" ? "asc" : "desc";
    if (sortBy.includes(".")) {
      const parts = sortBy.split(".");
      if (parts.length === 2) {
        const [relation, nestedField] = parts;
        if (relation && nestedField) {
          this.query.orderBy = { [relation]: { [nestedField]: sortOrder } };
        } else {
          this.query.orderBy = { createdAt: sortOrder };
        }
      } else {
        console.warn(`[QueryBuilder] sort: "${sortBy}" has more than 2 parts. Deep nested orderBy is not supported by Prisma. Falling back to createdAt.`);
        this.query.orderBy = { createdAt: sortOrder };
      }
    } else {
      this.query.orderBy = { [sortBy]: sortOrder };
    }
    return this;
  }
  // ─── Fields (select) ──────────────────────────────────────────────────────
  /**
   * Applies a `select` projection from ?fields=id,name,createdAt.
   * Only top-level fields are supported (no nested relation projection).
   *
   * ⚠️  Calling fields() removes the `include` block because Prisma does not
   * allow `select` and `include` on the same query level. Call fields() OR
   * include() / dynamicInclude() — not both.
   */
  fields() {
    const fieldsParam = this.queryParams.fields;
    if (!fieldsParam || typeof fieldsParam !== "string") {
      return this;
    }
    const selectFields = {};
    fieldsParam.split(",").map((f) => f.trim()).filter(Boolean).forEach((field) => {
      selectFields[field] = true;
    });
    if (Object.keys(selectFields).length === 0) {
      return this;
    }
    this.hasSelectFields = true;
    this.query.select = selectFields;
    delete this.query.include;
    return this;
  }
  // ─── Include ──────────────────────────────────────────────────────────────
  /**
   * Statically includes a relation or set of relations.
   * No-op if fields() was already called (select takes precedence).
   *
   * Usage:
   *   .include({ creator: true })
   *   .include({ creator: { select: { id: true, name: true } } })
   */
  include(relation) {
    if (this.hasSelectFields)
      return this;
    this.query.include = {
      ...this.query.include,
      ...relation
    };
    return this;
  }
  /**
   * Dynamically includes relations based on ?include=rel1,rel2 query param
   * and/or a `defaultInclude` list that is always included.
   *
   * `includeConfig` maps relation names to their Prisma include shape:
   * ```ts
   * {
   *   creator: { select: { id: true, name: true } },
   *   memberships: true,
   * }
   * ```
   *
   * Only relations present in `includeConfig` can be included — unknown
   * relation names from the query param are silently ignored (safe).
   *
   * No-op if fields() was already called.
   */
  dynamicInclude(includeConfig, defaultInclude) {
    if (this.hasSelectFields)
      return this;
    const result = {};
    defaultInclude?.forEach((field) => {
      if (includeConfig[field] !== void 0) {
        result[field] = includeConfig[field];
      }
    });
    const includeParam = this.queryParams.include;
    if (includeParam && typeof includeParam === "string") {
      includeParam.split(",").map((r) => r.trim()).filter(Boolean).forEach((relation) => {
        if (includeConfig[relation] !== void 0) {
          result[relation] = includeConfig[relation];
        }
      });
    }
    this.query.include = {
      ...this.query.include,
      ...result
    };
    return this;
  }
  // ─── Where (hard filter) ──────────────────────────────────────────────────
  /**
   * Merges a hard-coded condition into the `where` clause.
   * Use for business rules that clients must not override:
   *   .where({ isDeleted: false })
   *   .where({ classroomId: "abc" })
   *
   * Supports deep merge — calling where() multiple times accumulates conditions.
   */
  where(condition) {
    this.query.where = this.deepMerge(this.query.where, condition);
    this.countQuery.where = this.deepMerge(this.countQuery.where, condition);
    return this;
  }
  // ─── Execute ──────────────────────────────────────────────────────────────
  /**
   * Runs `findMany` and `count` in parallel and returns paginated results.
   * Always call this last after all builder methods.
   */
  async execute() {
    const [total, data] = await Promise.all([
      this.model.count(this.countQuery),
      this.model.findMany(this.query)
    ]);
    return {
      data,
      meta: {
        page: this.page,
        limit: this.limit,
        total,
        totalPages: Math.ceil(total / this.limit)
      }
    };
  }
  // ─── Count only ──────────────────────────────────────────────────────────
  /**
   * Runs only the count query — useful for existence checks or
   * dashboards that only need totals.
   */
  async count() {
    return this.model.count(this.countQuery);
  }
  // ─── Inspect ─────────────────────────────────────────────────────────────
  /**
   * Returns the built query object without executing it.
   * Useful for debugging or passing to a raw Prisma call.
   */
  getQuery() {
    return this.query;
  }
  // ─── Private helpers ──────────────────────────────────────────────────────
  /**
   * Deep-merges two plain objects.
   * Arrays are replaced (not concatenated) — this is intentional for
   * Prisma where-clause arrays like `OR` and `AND`.
   * For OR merging in search(), the caller handles concatenation explicitly.
   */
  deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
      const sourceVal = source[key];
      const targetVal = result[key];
      if (sourceVal !== null && typeof sourceVal === "object" && !Array.isArray(sourceVal) && targetVal !== null && typeof targetVal === "object" && !Array.isArray(targetVal)) {
        result[key] = this.deepMerge(targetVal, sourceVal);
      } else {
        result[key] = sourceVal;
      }
    }
    return result;
  }
  /**
   * Coerces a raw query param value to the most appropriate JS type.
   *
   * Rules (in order):
   *  1. "true" / "false"   → boolean
   *  2. Strict numeric string (no leading zeros, no scientific notation,
   *     no whitespace) → number
   *  3. Array             → { in: [...coerced items] }
   *  4. Anything else     → returned as-is (string)
   *
   * Intentionally conservative about numeric coercion — "007", "1e5",
   * " 3" are left as strings to avoid corrupting string IDs.
   */
  parseFilterValue(value) {
    if (value === "true")
      return true;
    if (value === "false")
      return false;
    if (typeof value === "string" && value !== "") {
      const strictNumeric = /^-?(0|[1-9]\d*)(\.\d+)?$/.test(value);
      if (strictNumeric)
        return Number(value);
    }
    if (Array.isArray(value)) {
      return { in: value.map((item) => this.parseFilterValue(item)) };
    }
    return value;
  }
  /**
   * Converts a range-operator object from the query string into a Prisma
   * filter object.
   *
   * Supported operators:
   *   Comparison : lt, lte, gt, gte, equals, not
   *   String     : contains, startsWith, endsWith
   *   Set        : in, notIn (value becomes an array)
   *
   * Unknown operators are dropped silently.
   * Returns the original value unchanged if no valid operators were found.
   */
  parseRangeFilter(value) {
    const rangeQuery = {};
    for (const [operator, rawValue] of Object.entries(value)) {
      const parsed = typeof rawValue === "string" && !isNaN(Number(rawValue)) && rawValue !== "" ? Number(rawValue) : rawValue;
      switch (operator) {
        case "lt":
        case "lte":
        case "gt":
        case "gte":
        case "equals":
        case "not":
        case "contains":
        case "startsWith":
        case "endsWith":
          rangeQuery[operator] = parsed;
          break;
        case "in":
        case "notIn":
          rangeQuery[operator] = Array.isArray(rawValue) ? rawValue : [parsed];
          break;
        // Unknown operators are intentionally ignored
        default:
          break;
      }
    }
    return Object.keys(rangeQuery).length > 0 ? rangeQuery : value;
  }
};

// dist/app/module/portfolio/portfolio.helpers.js
var asQueryModel = (model) => model;
var adminRoles = [Role.ADMIN, Role.SUPER_ADMIN];
var publishedWhere = {
  isDeleted: false,
  isPublished: true
};
var blogPublishedWhere = {
  isDeleted: false,
  status: BlogStatus.PUBLISHED
};
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// dist/app/module/activity/activity.service.js
var ActivityService = {
  async getPublished(query) {
    return new QueryBuilder(asQueryModel(prisma.activity), query, {
      searchableFields: ["title", "organizer", "shortDescription"],
      filterableFields: ["type", "isPublished"]
    }).where(publishedWhere).sort().paginate().execute();
  },
  async getPublishedBySlug(slug) {
    const activity = await prisma.activity.findFirst({
      where: { slug, ...publishedWhere }
    });
    if (!activity) {
      throw new AppError_default(StatusCodes3.NOT_FOUND, "Activity not found");
    }
    return activity;
  },
  async getAllAdmin(query) {
    return new QueryBuilder(asQueryModel(prisma.activity), query, {
      searchableFields: ["title", "organizer", "slug"],
      filterableFields: ["type", "isPublished"]
    }).where({ isDeleted: false }).sort().paginate().execute();
  },
  async getBySlugAdmin(slug) {
    const activity = await prisma.activity.findFirst({
      where: { slug, isDeleted: false }
    });
    if (!activity) {
      throw new AppError_default(StatusCodes3.NOT_FOUND, "Activity not found");
    }
    return activity;
  },
  async create(data) {
    const slug = data.slug || slugify(data.title);
    const existing = await prisma.activity.findUnique({ where: { slug } });
    if (existing) {
      throw new AppError_default(StatusCodes3.CONFLICT, "Activity slug already exists");
    }
    const maxOrder = await prisma.activity.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false }
    });
    return prisma.activity.create({
      data: {
        ...data,
        slug,
        sortOrder: data.sortOrder ?? (maxOrder._max.sortOrder ?? 0) + 1
      }
    });
  },
  async update(slug, data) {
    await ActivityService.getBySlugAdmin(slug);
    if (data.slug && data.slug !== slug) {
      const existing = await prisma.activity.findUnique({
        where: { slug: data.slug }
      });
      if (existing) {
        throw new AppError_default(StatusCodes3.CONFLICT, "Activity slug already exists");
      }
    }
    return prisma.activity.update({
      where: { slug },
      data
    });
  },
  async softDelete(slug) {
    await ActivityService.getBySlugAdmin(slug);
    return prisma.activity.update({
      where: { slug },
      data: { isDeleted: true }
    });
  }
};

// dist/app/module/activity/activity.controller.js
var getPublished = catchAsync(async (req, res) => {
  const result = await ActivityService.getPublished(req.query);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activities fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getPublishedBySlug = catchAsync(async (req, res) => {
  const activity = await ActivityService.getPublishedBySlug(req.params.slug);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activity fetched successfully",
    data: activity
  });
});
var getAllAdmin = catchAsync(async (req, res) => {
  const result = await ActivityService.getAllAdmin(req.query);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activities fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getBySlugAdmin = catchAsync(async (req, res) => {
  const activity = await ActivityService.getBySlugAdmin(req.params.slug);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activity fetched successfully",
    data: activity
  });
});
var create = catchAsync(async (req, res) => {
  const activity = await ActivityService.create(req.body);
  sendResponse(res, {
    statusCode: StatusCodes4.CREATED,
    success: true,
    message: "Activity created successfully",
    data: activity
  });
});
var update = catchAsync(async (req, res) => {
  const activity = await ActivityService.update(req.params.slug, req.body);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activity updated successfully",
    data: activity
  });
});
var remove = catchAsync(async (req, res) => {
  const activity = await ActivityService.softDelete(req.params.slug);
  sendResponse(res, {
    statusCode: StatusCodes4.OK,
    success: true,
    message: "Activity deleted successfully",
    data: activity
  });
});
var ActivityController = {
  getPublished,
  getPublishedBySlug,
  getAllAdmin,
  getBySlugAdmin,
  create,
  update,
  remove
};

// dist/app/module/activity/activity.route.js
var router = Router();
var adminAuth = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);
router.get("/", ActivityController.getPublished);
router.get("/admin/all", adminAuth, ActivityController.getAllAdmin);
router.get("/admin/:slug", adminAuth, ActivityController.getBySlugAdmin);
router.post("/", adminAuth, validateRequest(createActivitySchema), ActivityController.create);
router.get("/:slug", ActivityController.getPublishedBySlug);
router.patch("/:slug", adminAuth, validateRequest(updateActivitySchema), ActivityController.update);
router.delete("/:slug", adminAuth, ActivityController.remove);
var ActivityRoutes = router;

// dist/app/module/admin/admin.route.js
import { Router as Router2 } from "express";

// dist/app/module/admin/admin.service.js
import { StatusCodes as StatusCodes5 } from "http-status-codes";
var adminPublicSelect = {
  id: true,
  name: true,
  email: true,
  profilePhoto: true,
  contactNumber: true,
  isDeleted: true,
  deletedAt: true,
  userId: true,
  createdAt: true,
  updatedAt: true,
  user: {
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      status: true,
      emailVerified: true,
      image: true,
      isDeleted: true,
      createdAt: true,
      updatedAt: true
    }
  }
};
var assertSuperAdminRequester = (requestingUser) => {
  if (requestingUser.role !== Role.SUPER_ADMIN) {
    throw new AppError_default(StatusCodes5.FORBIDDEN, "Only Super Admin can manage admin accounts");
  }
};
var getAdminRecordOrThrow = async (id) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
    select: {
      id: true,
      userId: true,
      isDeleted: true,
      user: {
        select: {
          id: true,
          role: true,
          isDeleted: true
        }
      }
    }
  });
  if (!admin || admin.isDeleted || admin.user.isDeleted) {
    throw new AppError_default(StatusCodes5.NOT_FOUND, "Admin not found");
  }
  return admin;
};
var assertTargetCanBeManaged = (targetRole, action) => {
  if (targetRole === Role.SUPER_ADMIN) {
    throw new AppError_default(StatusCodes5.FORBIDDEN, action === "delete" ? "Super Admin accounts cannot be deleted" : "Super Admin accounts cannot be updated from this endpoint");
  }
};
var getAllAdmins = async (requestingUser) => {
  assertSuperAdminRequester(requestingUser);
  const admins = await prisma.admin.findMany({
    where: {
      isDeleted: false,
      user: {
        isDeleted: false
      }
    },
    select: adminPublicSelect,
    orderBy: {
      createdAt: "desc"
    }
  });
  return admins;
};
var getDashboardStats = async (requestingUser) => {
  if (requestingUser.role !== Role.ADMIN && requestingUser.role !== Role.SUPER_ADMIN) {
    throw new AppError_default(StatusCodes5.FORBIDDEN, "Only Admin or Super Admin can access dashboard stats");
  }
  const roleScope = requestingUser.role === Role.SUPER_ADMIN ? "SUPER_ADMIN" : "ADMIN";
  const [totalAdmins, totalSuperAdmins, totalProjects, publishedProjects, totalCertificates, totalActivities, totalBlogs, publishedBlogs, draftBlogs] = await Promise.all([
    prisma.admin.count({
      where: {
        isDeleted: false,
        user: { isDeleted: false, role: Role.ADMIN }
      }
    }),
    prisma.admin.count({
      where: {
        isDeleted: false,
        user: { isDeleted: false, role: Role.SUPER_ADMIN }
      }
    }),
    prisma.project.count({ where: { isDeleted: false } }),
    prisma.project.count({ where: { isDeleted: false, isPublished: true } }),
    prisma.certificate.count({ where: { isDeleted: false } }),
    prisma.activity.count({ where: { isDeleted: false } }),
    prisma.blogPost.count({ where: { isDeleted: false } }),
    prisma.blogPost.count({
      where: { isDeleted: false, status: BlogStatus.PUBLISHED }
    }),
    prisma.blogPost.count({
      where: { isDeleted: false, status: BlogStatus.DRAFT }
    })
  ]);
  return {
    roleScope,
    adminSummary: {
      totalAdmins,
      totalSuperAdmins,
      totalAdminAccounts: totalAdmins + totalSuperAdmins
    },
    portfolioSummary: {
      projects: { total: totalProjects, published: publishedProjects },
      certificates: totalCertificates,
      activities: totalActivities,
      blogs: {
        total: totalBlogs,
        published: publishedBlogs,
        drafts: draftBlogs
      }
    }
  };
};
var getAdminById = async (id, requestingUser) => {
  assertSuperAdminRequester(requestingUser);
  const admin = await prisma.admin.findFirst({
    where: {
      id,
      isDeleted: false,
      user: {
        isDeleted: false
      }
    },
    select: adminPublicSelect
  });
  if (!admin) {
    throw new AppError_default(StatusCodes5.NOT_FOUND, "Admin not found");
  }
  return admin;
};
var updateAdmin = async (id, payload, requestingUser) => {
  assertSuperAdminRequester(requestingUser);
  const adminRecord = await getAdminRecordOrThrow(id);
  assertTargetCanBeManaged(adminRecord.user.role, "update");
  const { admin } = payload;
  if (!admin || Object.keys(admin).length === 0) {
    throw new AppError_default(StatusCodes5.BAD_REQUEST, "No admin fields provided for update");
  }
  const updatedAdmin = await prisma.admin.update({
    where: {
      id
    },
    data: {
      ...admin
    },
    select: adminPublicSelect
  });
  return updatedAdmin;
};
var deleteAdmin = async (id, requestingUser) => {
  assertSuperAdminRequester(requestingUser);
  const adminRecord = await getAdminRecordOrThrow(id);
  assertTargetCanBeManaged(adminRecord.user.role, "delete");
  if (adminRecord.userId === requestingUser.userId) {
    throw new AppError_default(StatusCodes5.BAD_REQUEST, "You cannot delete yourself");
  }
  const result = await prisma.$transaction(async (tx) => {
    await tx.admin.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date()
      }
    });
    await tx.user.update({
      where: { id: adminRecord.userId },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date(),
        status: UserStatus.DELETED
      }
    });
    await tx.session.deleteMany({
      where: { userId: adminRecord.userId }
    });
    await tx.account.deleteMany({
      where: { userId: adminRecord.userId }
    });
    const admin = await tx.admin.findUnique({
      where: { id },
      select: adminPublicSelect
    });
    return admin;
  });
  return result;
};
var AdminService = {
  getDashboardStats,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};

// dist/app/module/admin/admin.controller.js
import { StatusCodes as StatusCodes6 } from "http-status-codes";
var getAllAdmins2 = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await AdminService.getAllAdmins(user);
  sendResponse(res, {
    statusCode: StatusCodes6.OK,
    success: true,
    message: "Admins fetched successfully",
    data: result
  });
});
var getDashboardStats2 = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await AdminService.getDashboardStats(user);
  sendResponse(res, {
    statusCode: StatusCodes6.OK,
    success: true,
    message: "Admin dashboard stats fetched successfully",
    data: result
  });
});
var getAdminById2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const admin = await AdminService.getAdminById(id, user);
  sendResponse(res, {
    statusCode: StatusCodes6.OK,
    success: true,
    message: "Admin fetched successfully",
    data: admin
  });
});
var updateAdmin2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const user = req.user;
  const updatedAdmin = await AdminService.updateAdmin(id, payload, user);
  sendResponse(res, {
    statusCode: StatusCodes6.OK,
    success: true,
    message: "Admin updated successfully",
    data: updatedAdmin
  });
});
var deleteAdmin2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const result = await AdminService.deleteAdmin(id, user);
  sendResponse(res, {
    statusCode: StatusCodes6.OK,
    success: true,
    message: "Admin deleted successfully",
    data: result
  });
});
var AdminController = {
  getDashboardStats: getDashboardStats2,
  getAllAdmins: getAllAdmins2,
  updateAdmin: updateAdmin2,
  deleteAdmin: deleteAdmin2,
  getAdminById: getAdminById2
};

// dist/app/module/admin/admin.validation.js
import z2 from "zod";
var updateAdminZodSchema = z2.object({
  admin: z2.object({
    name: z2.string("Name must be a string").optional(),
    profilePhoto: z2.url("Profile photo must be a valid URL").optional(),
    contactNumber: z2.string("Contact number must be a string").min(11, "Contact number must be at least 11 characters").max(14, "Contact number must be at most 15 characters").optional()
  }).optional()
});

// dist/app/module/admin/admin.route.js
var router2 = Router2();
router2.get("/stats", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), AdminController.getDashboardStats);
router2.get("/", checkAuth(Role.SUPER_ADMIN), AdminController.getAllAdmins);
router2.get("/:id", checkAuth(Role.SUPER_ADMIN), AdminController.getAdminById);
router2.patch("/:id", checkAuth(Role.SUPER_ADMIN), validateRequest(updateAdminZodSchema), AdminController.updateAdmin);
router2.delete("/:id", checkAuth(Role.SUPER_ADMIN), AdminController.deleteAdmin);
var AdminRoutes = router2;

// dist/app/module/auth/auth.route.js
import { Router as Router3 } from "express";

// dist/config/multer.config.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// dist/config/cloudinary.config.js
import { v2 as cloudinary } from "cloudinary";
import { StatusCodes as StatusCodes7 } from "http-status-codes";
cloudinary.config({
  cloud_name: envVars.CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY_API_SECRET
});
var sanitizeFileName = (fileName) => fileName.split(".").slice(0, -1).join(".").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
var getCloudinaryFolder = (fileName) => {
  const extension = fileName.split(".").pop()?.toLowerCase();
  return extension === "pdf" ? "pdfs" : "images";
};
var getCloudinaryResourceType = (fileName) => {
  const extension = fileName.split(".").pop()?.toLowerCase();
  return extension === "pdf" ? "raw" : "image";
};
var collapseDuplicateFolderSegments = (assetPath) => assetPath.replace(/^(Acadex\/pdfs)\/\1\//, "$1/").replace(/^(Acadex\/images)\/\1\//, "$1/");
var getDedupedPath = (pathname) => {
  const match = pathname.match(/(\/upload\/(?:v\d+\/)?)(.+)$/);
  if (!match) {
    return null;
  }
  const [, prefix, assetPath] = match;
  if (!prefix || !assetPath) {
    return null;
  }
  const collapsedAssetPath = collapseDuplicateFolderSegments(assetPath);
  if (collapsedAssetPath !== assetPath) {
    return `${prefix}${collapsedAssetPath}`;
  }
  const parts = assetPath.split("/");
  if (parts.length % 2 !== 0) {
    return null;
  }
  const half = parts.length / 2;
  const firstHalf = parts.slice(0, half).join("/");
  const secondHalf = parts.slice(half).join("/");
  if (firstHalf !== secondHalf) {
    return null;
  }
  return `${prefix}${secondHalf}`;
};
var normalizeCloudinaryUrl = (url, fileName) => {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.endsWith("cloudinary.com")) {
      return url;
    }
    const dedupedPath = getDedupedPath(parsed.pathname);
    if (dedupedPath) {
      parsed.pathname = dedupedPath;
    }
    if (fileName?.toLowerCase().endsWith(".pdf")) {
      parsed.pathname = parsed.pathname.replace("/image/upload/", "/raw/upload/");
    }
    return parsed.toString();
  } catch {
    return url;
  }
};
var uploadFileToCloudinary = async (buffer, fileName) => {
  if (!buffer || !fileName) {
    throw new AppError_default(StatusCodes7.BAD_REQUEST, "File buffer and file name are required for upload");
  }
  const fileNameWithoutExtension = sanitizeFileName(fileName);
  const uniqueName = Math.random().toString(36).substring(2) + "-" + Date.now() + "-" + fileNameWithoutExtension;
  const folder = getCloudinaryFolder(fileName);
  const resourceType = getCloudinaryResourceType(fileName);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      resource_type: resourceType,
      public_id: uniqueName,
      folder: `Acadex/${folder}`,
      use_filename: false,
      unique_filename: false
    }, (error, result) => {
      if (error) {
        return reject(new AppError_default(StatusCodes7.INTERNAL_SERVER_ERROR, "Failed to upload file to Cloudinary"));
      }
      const normalizedResult = result;
      normalizedResult.secure_url = normalizeCloudinaryUrl(normalizedResult.secure_url, fileName);
      resolve(normalizedResult);
    }).end(buffer);
  });
};
var deleteFileFromCloudinary = async (url, resourceType = "image") => {
  try {
    const normalizedUrl = normalizeCloudinaryUrl(url);
    const regex = /\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/;
    const match = normalizedUrl.match(regex);
    if (!match?.[1]) {
      return;
    }
    const publicId = match[1];
    const candidateIds = [publicId];
    if (url !== normalizedUrl) {
      const legacyMatch = url.match(regex);
      if (legacyMatch?.[1]) {
        candidateIds.push(legacyMatch[1]);
      }
    }
    for (const candidateId of [...new Set(candidateIds)]) {
      const result = await cloudinary.uploader.destroy(candidateId, {
        resource_type: resourceType
      });
      if (result.result === "ok") {
        console.log(`File ${candidateId} deleted from Cloudinary successfully`);
        return;
      }
      if (result.result !== "not found") {
        console.warn(`Cloudinary deletion returned status: ${result.result} for publicId: ${candidateId}`);
      }
    }
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    throw new AppError_default(StatusCodes7.INTERNAL_SERVER_ERROR, "Failed to delete file from Cloudinary");
  }
};
var cloudinaryUpload = cloudinary;

// dist/config/multer.config.js
var storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: async (req, file) => {
    const originalName = file.originalname;
    const extension = originalName.split(".").pop()?.toLowerCase();
    const fileNameWithoutExtension = originalName.split(".").slice(0, -1).join(".").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
    const uniqueName = `${Math.random().toString(36).substring(2)}-${Date.now()}-${fileNameWithoutExtension}`;
    const folder = extension === "pdf" ? "pdfs" : "images";
    return {
      folder: `Acadex/${folder}`,
      public_id: uniqueName,
      resource_type: "auto"
    };
  }
});
var fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only images and PDFs are allowed!"), false);
  }
};
var limits = {
  fileSize: 10 * 1024 * 1024
  // 10MB
};
var upload = multer({
  storage,
  fileFilter,
  limits
});
var memoryUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits
});

// dist/app/module/auth/auth.controller.js
import { StatusCodes as StatusCodes9 } from "http-status-codes";

// dist/app/utils/token.js
import ms from "ms";
var getAccessToken = (payload) => {
  const accessToken = jwtUtils.createToken(payload, envVars.ACCESS_TOKEN_SECRET, {
    ...envVars.ACCESS_TOKEN_EXPIRES_IN !== void 0 ? { expiresIn: envVars.ACCESS_TOKEN_EXPIRES_IN } : {}
  });
  return accessToken;
};
var getOAuthExchangeCode = (payload) => {
  return jwtUtils.createToken(payload, envVars.BETTER_AUTH_SECRET, {
    expiresIn: "2m"
  });
};
var getRefreshToken = (payload) => {
  const refreshToken = jwtUtils.createToken(payload, envVars.REFRESH_TOKEN_SECRET, {
    ...envVars.REFRESH_TOKEN_EXPIRES_IN !== void 0 ? { expiresIn: envVars.REFRESH_TOKEN_EXPIRES_IN } : {}
  });
  return refreshToken;
};
var getAccessTokenFromCookie = (res, token) => {
  const maxAge = ms(envVars.ACCESS_TOKEN_EXPIRES_IN);
  const isProd = envVars.NODE_ENV === "production";
  cookieUtils.setCookie(res, "accessToken", token, {
    httpOnly: true,
    secure: isProd,
    // `sameSite: "none"` requires `secure`, so relax it in dev.
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge
  });
};
var getRefreshTokenFromCookie = (res, token) => {
  const maxAge = ms(envVars.REFRESH_TOKEN_EXPIRES_IN);
  const isProd = envVars.NODE_ENV === "production";
  cookieUtils.setCookie(res, "refreshToken", token, {
    httpOnly: true,
    secure: isProd,
    // `sameSite: "none"` requires `secure`, so relax it in dev.
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge
  });
};
var getBetterAuthAccessToken = (res, token) => {
  const maxAge = ms(envVars.ACCESS_TOKEN_EXPIRES_IN);
  const isProd = envVars.NODE_ENV === "production";
  cookieUtils.setCookie(res, "better-auth.session_token", token, {
    httpOnly: true,
    secure: isProd,
    // `sameSite: "none"` requires `secure`, so relax it in dev.
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge
  });
};
var verifyOAuthExchangeCode = (token) => {
  return jwtUtils.verifyToken(token, envVars.BETTER_AUTH_SECRET);
};
var tokenUtils = {
  getAccessToken,
  getOAuthExchangeCode,
  getRefreshToken,
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  getBetterAuthAccessToken,
  verifyOAuthExchangeCode
};

// dist/app/lib/auth.js
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import ms2 from "ms";
import { bearer } from "better-auth/plugins";
var auth = betterAuth({
  baseURL: envVars.BETTER_AUTH_URL,
  secret: envVars.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
  user: {
    additionalFields: {
      role: { type: "string", required: true, defaultValue: Role.STUDENT },
      status: { type: "string", required: true, defaultValue: UserStatus.ACTIVE },
      needPasswordChange: { type: "boolean", required: true, defaultValue: false },
      isDeleted: { type: "boolean", required: true, defaultValue: false },
      deletedAt: { type: "date", required: false, defaultValue: null },
      lastLogin: { type: "date", required: false, defaultValue: null },
      lastIpAddress: { type: "string", required: false, defaultValue: null },
      lastUserAgent: { type: "string", required: false, defaultValue: null },
      failedLoginAttempts: { type: "number", required: true, defaultValue: 0 },
      lockedUntil: { type: "date", required: false, defaultValue: null }
    }
  },
  plugins: [bearer()],
  session: {
    expiresIn: ms2(envVars.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN) / 1e3,
    updateAge: ms2(envVars.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE) / 1e3,
    cookieCache: {
      enabled: true,
      maxAge: ms2(envVars.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN) / 1e3,
      cookieOptions: {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/"
      }
    }
  },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL || "http://localhost:5000",
    envVars.FRONTEND_URL
  ],
  advanced: {
    useSecureCookies: false,
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: true,
          httpOnly: true,
          path: "/"
        }
      },
      sessionToken: {
        attributes: {
          sameSite: "none",
          secure: true,
          httpOnly: true,
          path: "/"
        }
      }
    }
  }
});

// dist/app/module/auth/auth.service.js
import { StatusCodes as StatusCodes8 } from "http-status-codes";
var buildTokenPair = (user) => {
  const payload = {
    userId: user.id,
    role: user.role,
    name: user.name,
    email: user.email,
    status: user.status,
    isDeleted: user.isDeleted,
    emailVerified: user.emailVerified
  };
  return {
    accessToken: tokenUtils.getAccessToken(payload),
    refreshToken: tokenUtils.getRefreshToken(payload)
  };
};
var registerStudent = async (payload, fileBuffer, fileName) => {
  const { name, email, password } = payload;
  const uploadPromise = fileBuffer && fileName ? uploadFileToCloudinary(fileBuffer, fileName).then((res) => res.secure_url).catch(() => {
    throw new AppError_default(StatusCodes8.BAD_REQUEST, "Failed to upload image. Please try again.");
  }) : Promise.resolve(void 0);
  const signUpPromise = auth.api.signUpEmail({
    body: { name, email, password }
  });
  let imageUrl;
  let authData;
  try {
    [imageUrl, authData] = await Promise.all([uploadPromise, signUpPromise]);
  } catch (error) {
    if (error?.message?.toLowerCase().includes("exist") || error?.status === 409) {
      throw new AppError_default(StatusCodes8.CONFLICT, "A user with this email already exists");
    }
    throw error;
  }
  if (!authData?.user) {
    if (imageUrl) {
      await deleteFileFromCloudinary(imageUrl, "image").catch(() => {
      });
    }
    throw new AppError_default(StatusCodes8.BAD_REQUEST, "User registration failed");
  }
  try {
    const [normalUser] = await prisma.$transaction(async (tx) => {
      const createdNormalUser = await tx.normalUser.create({
        data: {
          userId: authData.user.id,
          name,
          email,
          ...imageUrl !== void 0 ? { profilePhoto: imageUrl } : {}
        }
      });
      if (imageUrl) {
        await tx.user.update({
          where: { id: authData.user.id },
          data: { image: imageUrl }
        });
        authData.user.image = imageUrl;
      }
      return [createdNormalUser];
    });
    const { accessToken, refreshToken } = buildTokenPair({
      id: authData.user.id,
      role: authData.user.role,
      name: authData.user.name,
      email: authData.user.email,
      status: authData.user.status,
      isDeleted: !!authData.user.isDeleted,
      emailVerified: authData.user.emailVerified
    });
    return {
      user: authData.user,
      normalUser,
      token: authData.token,
      accessToken,
      refreshToken
    };
  } catch (error) {
    try {
      if (imageUrl) {
        await deleteFileFromCloudinary(imageUrl, "image");
      }
      await prisma.user.delete({ where: { id: authData.user.id } });
    } catch (rollbackErr) {
      console.error("Rollback failed for user:", authData.user.id, rollbackErr);
    }
    const prismaErrorCode = typeof error === "object" && error !== null && "code" in error && typeof error.code === "string" ? error.code : null;
    if (prismaErrorCode === "P2002") {
      throw new AppError_default(StatusCodes8.CONFLICT, "This email is already registered. Please log in or use a different email.");
    }
    throw error;
  }
};
var loginUser = async (payload) => {
  const { email, password } = payload;
  const dbUser = await prisma.user.findUnique({ where: { email } });
  if (!dbUser) {
    throw new AppError_default(StatusCodes8.UNAUTHORIZED, "Invalid email or password");
  }
  if (dbUser.isDeleted || dbUser.status === UserStatus.DELETED) {
    throw new AppError_default(StatusCodes8.FORBIDDEN, "This account has been deleted");
  }
  if (dbUser.status === UserStatus.SUSPENDED) {
    throw new AppError_default(StatusCodes8.FORBIDDEN, "This account has been suspended");
  }
  const authData = await auth.api.signInEmail({ body: { email, password } });
  const { accessToken, refreshToken } = buildTokenPair({
    id: authData.user.id,
    role: authData.user.role,
    name: authData.user.name,
    email: authData.user.email,
    status: authData.user.status,
    isDeleted: !!authData.user.isDeleted,
    emailVerified: authData.user.emailVerified
  });
  return {
    user: authData.user,
    token: authData.token,
    accessToken,
    refreshToken
  };
};
var fetchCurrentUserById = async (userId) => {
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      normalUser: true,
      admin: true
    }
  });
  if (!dbUser) {
    throw new AppError_default(StatusCodes8.NOT_FOUND, "User not found");
  }
  return dbUser;
};
var getMe = async (user) => {
  return fetchCurrentUserById(user.userId);
};
var updateProfile = async (payload) => {
  const { userId, role, name, profilePhoto, fileBuffer, fileName, contactNumber, address, gender } = payload;
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      role: true,
      normalUser: { select: { id: true } },
      admin: { select: { id: true } }
    }
  });
  if (!dbUser) {
    throw new AppError_default(StatusCodes8.NOT_FOUND, "User not found");
  }
  const uploadedProfilePhoto = fileBuffer && fileName ? await uploadFileToCloudinary(fileBuffer, fileName).then((result) => result.secure_url) : void 0;
  const finalProfilePhoto = uploadedProfilePhoto !== void 0 ? uploadedProfilePhoto : profilePhoto;
  await prisma.$transaction(async (tx) => {
    const userUpdateData = {};
    if (name !== void 0) {
      userUpdateData.name = name;
    }
    if (finalProfilePhoto !== void 0) {
      userUpdateData.image = finalProfilePhoto;
    }
    if (Object.keys(userUpdateData).length > 0) {
      await tx.user.update({
        where: { id: userId },
        data: userUpdateData
      });
    }
    if (role === Role.STUDENT && dbUser.normalUser) {
      const normalUserUpdateData = {};
      if (name !== void 0) {
        normalUserUpdateData.name = name;
      }
      if (finalProfilePhoto !== void 0) {
        normalUserUpdateData.profilePhoto = finalProfilePhoto;
      }
      if (contactNumber !== void 0) {
        normalUserUpdateData.contactNumber = contactNumber;
      }
      if (address !== void 0) {
        normalUserUpdateData.address = address;
      }
      if (gender !== void 0) {
        normalUserUpdateData.gender = gender;
      }
      if (Object.keys(normalUserUpdateData).length > 0) {
        await tx.normalUser.update({
          where: { userId },
          data: normalUserUpdateData
        });
      }
    }
    if ((role === Role.ADMIN || role === Role.SUPER_ADMIN) && dbUser.admin) {
      const adminUpdateData = {};
      if (name !== void 0) {
        adminUpdateData.name = name;
      }
      if (finalProfilePhoto !== void 0) {
        adminUpdateData.profilePhoto = finalProfilePhoto;
      }
      if (contactNumber !== void 0) {
        adminUpdateData.contactNumber = contactNumber;
      }
      if (Object.keys(adminUpdateData).length > 0) {
        await tx.admin.update({
          where: { userId },
          data: adminUpdateData
        });
      }
    }
  });
  return fetchCurrentUserById(userId);
};
var getNewTokens = async (oldRefreshToken, sessionToken) => {
  const verified = jwtUtils.verifyToken(oldRefreshToken, envVars.REFRESH_TOKEN_SECRET);
  if (!verified.success || !verified.decoded) {
    throw new AppError_default(StatusCodes8.UNAUTHORIZED, "Invalid refresh token");
  }
  const { decoded } = verified;
  const { accessToken, refreshToken: newRefreshToken } = buildTokenPair({
    id: decoded.userId,
    role: decoded.role,
    name: decoded.name,
    email: decoded.email,
    status: decoded.status,
    isDeleted: decoded.isDeleted,
    emailVerified: decoded.emailVerified
  });
  if (sessionToken) {
    const session = await prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true }
    });
    if (session) {
      await prisma.session.update({
        where: { token: sessionToken },
        data: {
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3),
          updatedAt: /* @__PURE__ */ new Date()
        }
      });
    }
  }
  return {
    accessToken,
    refreshToken: newRefreshToken
  };
};
var changePassword = async (payload, sessionToken) => {
  const session = await auth.api.getSession({
    headers: new Headers({ Authorization: `Bearer ${sessionToken}` })
  });
  if (!session?.user) {
    throw new AppError_default(StatusCodes8.UNAUTHORIZED, "Invalid or expired session");
  }
  const { currentPassword, newPassword } = payload;
  await auth.api.changePassword({
    body: { currentPassword, newPassword, revokeOtherSessions: true },
    headers: new Headers({ Authorization: `Bearer ${sessionToken}` })
  });
  if (session.user.needPasswordChange) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { needPasswordChange: false }
    });
  }
  const { accessToken, refreshToken } = buildTokenPair({
    id: session.user.id,
    role: session.user.role,
    name: session.user.name,
    email: session.user.email,
    status: session.user.status,
    isDeleted: !!session.user.isDeleted,
    emailVerified: session.user.emailVerified
  });
  return { accessToken, refreshToken };
};
var logoutUser = async (sessionToken) => {
  if (!sessionToken) {
    throw new AppError_default(StatusCodes8.UNAUTHORIZED, "No active session");
  }
  return auth.api.signOut({
    headers: new Headers({ Authorization: `Bearer ${sessionToken}` })
  });
};
var AuthService = {
  registerStudent,
  loginUser,
  getMe,
  updateProfile,
  getNewTokens,
  changePassword,
  logoutUser
};

// dist/app/module/auth/auth.controller.js
import ms3 from "ms";
var setAuthCookies = (res, tokens) => {
  tokenUtils.getAccessTokenFromCookie(res, tokens.accessToken);
  tokenUtils.getRefreshTokenFromCookie(res, tokens.refreshToken);
  if (tokens.sessionToken) {
    tokenUtils.getBetterAuthAccessToken(res, tokens.sessionToken);
    res.cookie("better-auth.session_token", tokens.sessionToken, {
      httpOnly: true,
      secure: envVars.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: ms3(envVars.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN)
    });
  }
};
var clearAuthCookies = (res) => {
  const opts = { httpOnly: true, secure: true, sameSite: "none" };
  cookieUtils.clearCookie(res, "accessToken", opts);
  cookieUtils.clearCookie(res, "refreshToken", opts);
  cookieUtils.clearCookie(res, "better-auth.session_token", opts);
};
var registerStudent2 = catchAsync(async (req, res) => {
  const fileBuffer = req.file?.buffer;
  const fileName = req.file?.originalname;
  const result = await AuthService.registerStudent(req.body, fileBuffer, fileName);
  setAuthCookies(res, {
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    ...result.token ? { sessionToken: result.token } : {}
  });
  sendResponse(res, {
    statusCode: StatusCodes9.CREATED,
    success: true,
    message: "Student registered successfully",
    data: {
      user: result.user,
      normalUser: result.normalUser,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      token: result.token
    }
  });
});
var loginUser2 = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  setAuthCookies(res, {
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    ...result.token ? { sessionToken: result.token } : {}
  });
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Logged in successfully",
    data: {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      token: result.token
    }
  });
});
var getMe2 = catchAsync(async (req, res) => {
  const result = await AuthService.getMe(req.user);
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "User fetched successfully",
    data: result
  });
});
var updateProfile2 = catchAsync(async (req, res) => {
  const user = req.user;
  const fileBuffer = req.file?.buffer;
  const fileName = req.file?.originalname;
  const result = await AuthService.updateProfile({
    userId: user.userId,
    role: user.role,
    name: req.body.name,
    profilePhoto: req.body.profilePhoto,
    fileBuffer,
    fileName,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    gender: req.body.gender
  });
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Profile updated successfully",
    data: result
  });
});
var getNewTokens2 = catchAsync(async (req, res) => {
  const oldRefreshToken = req.cookies.refreshToken;
  const sessionToken = req.cookies["better-auth.session_token"];
  if (!oldRefreshToken) {
    throw new AppError_default(StatusCodes9.UNAUTHORIZED, "Refresh token not found");
  }
  const result = await AuthService.getNewTokens(oldRefreshToken, sessionToken);
  tokenUtils.getAccessTokenFromCookie(res, result.accessToken);
  tokenUtils.getRefreshTokenFromCookie(res, result.refreshToken);
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Tokens refreshed successfully",
    data: {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken
    }
  });
});
var changePassword2 = catchAsync(async (req, res) => {
  const sessionToken = req.cookies["better-auth.session_token"];
  const result = await AuthService.changePassword(req.body, sessionToken);
  tokenUtils.getAccessTokenFromCookie(res, result.accessToken);
  tokenUtils.getRefreshTokenFromCookie(res, result.refreshToken);
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Password changed successfully",
    data: null
  });
});
var logoutUser2 = catchAsync(async (req, res) => {
  const sessionToken = req.cookies["better-auth.session_token"];
  await AuthService.logoutUser(sessionToken);
  clearAuthCookies(res);
  sendResponse(res, {
    statusCode: StatusCodes9.OK,
    success: true,
    message: "Logged out successfully",
    data: null
  });
});
var AuthController = {
  registerStudent: registerStudent2,
  loginUser: loginUser2,
  getMe: getMe2,
  updateProfile: updateProfile2,
  getNewTokens: getNewTokens2,
  changePassword: changePassword2,
  logoutUser: logoutUser2
};

// dist/app/module/auth/auth.validation.js
import z3 from "zod";
var registerStudentZodSchema = z3.object({
  name: z3.string({ message: "Name is required" }).min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters").trim(),
  email: z3.string({ message: "Email is required" }).email("Invalid email address").toLowerCase().trim(),
  password: z3.string({ message: "Password is required" }).min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 characters")
});
var loginZodSchema = z3.object({
  email: z3.string({ message: "Email is required" }).email("Invalid email address").toLowerCase().trim(),
  password: z3.string({ message: "Password is required" }).min(1, "Password is required")
});
var changePasswordZodSchema = z3.object({
  currentPassword: z3.string({ message: "Current password is required" }).min(1, "Current password is required"),
  newPassword: z3.string({ message: "New password is required" }).min(6, "New password must be at least 6 characters").max(20, "New password must be at most 20 characters")
});
var verifyEmailZodSchema = z3.object({
  email: z3.string({ message: "Email is required" }).email("Invalid email address"),
  otp: z3.string({ message: "OTP is required" }).min(4, "OTP must be at least 4 characters").max(10, "OTP must be at most 10 characters")
});
var forgetPasswordZodSchema = z3.object({
  email: z3.string({ message: "Email is required" }).email("Invalid email address")
});
var resetPasswordZodSchema = z3.object({
  email: z3.string({ message: "Email is required" }).email("Invalid email address"),
  otp: z3.string({ message: "OTP is required" }).min(4, "OTP must be at least 4 characters").max(10, "OTP must be at most 10 characters"),
  newPassword: z3.string({ message: "New password is required" }).min(6, "New password must be at least 6 characters").max(20, "New password must be at most 20 characters")
});
var optionalTrimmedString = z3.preprocess((value) => {
  if (typeof value !== "string")
    return value;
  const trimmed = value.trim();
  return trimmed === "" ? void 0 : trimmed;
}, z3.string().trim().optional());
var optionalNullableTrimmedString = z3.preprocess((value) => {
  if (value === null)
    return null;
  if (typeof value !== "string")
    return value;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}, z3.string().trim().nullable().optional());
var updateProfileZodSchema = z3.object({
  name: optionalTrimmedString.pipe(z3.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters").optional()),
  profilePhoto: z3.preprocess((value) => {
    if (value === null)
      return null;
    if (typeof value !== "string")
      return value;
    const trimmed = value.trim();
    return trimmed === "" ? null : trimmed;
  }, z3.string().url("Profile photo must be a valid URL").nullable().optional()),
  contactNumber: optionalNullableTrimmedString.pipe(z3.string().min(7, "Contact number must be at least 7 characters").max(15, "Contact number must be at most 15 characters").regex(/^\+?[0-9\s\-()]+$/, "Contact number contains invalid characters").nullable().optional()),
  address: optionalNullableTrimmedString.pipe(z3.string().min(3, "Address must be at least 3 characters").max(200, "Address must be at most 200 characters").nullable().optional()),
  gender: z3.preprocess((value) => {
    if (value === null)
      return null;
    if (typeof value !== "string")
      return value;
    const trimmed = value.trim();
    return trimmed === "" ? null : trimmed;
  }, z3.nativeEnum(Gender).nullable().optional())
}).refine((data) => data.name !== void 0 || data.profilePhoto !== void 0 || data.contactNumber !== void 0 || data.address !== void 0 || data.gender !== void 0, {
  message: "At least one profile field must be provided"
});

// dist/app/module/auth/auth.route.js
var router3 = Router3();
router3.post("/register", memoryUpload.single("image"), validateRequest(registerStudentZodSchema), AuthController.registerStudent);
router3.post("/login", validateRequest(loginZodSchema), AuthController.loginUser);
router3.post("/refresh-token", AuthController.getNewTokens);
var allRoles = [Role.STUDENT, Role.ADMIN, Role.SUPER_ADMIN];
router3.get("/me", checkAuth(...allRoles), AuthController.getMe);
router3.patch("/me", checkAuth(...allRoles), memoryUpload.single("image"), validateRequest(updateProfileZodSchema), AuthController.updateProfile);
router3.post("/change-password", checkAuth(...allRoles), validateRequest(changePasswordZodSchema), AuthController.changePassword);
router3.post("/logout", checkAuth(...allRoles), AuthController.logoutUser);
var AuthRoute = router3;

// dist/app/module/blog/blog.route.js
import { Router as Router4 } from "express";

// dist/app/module/blog/blog.controller.js
import { StatusCodes as StatusCodes11 } from "http-status-codes";

// dist/app/module/blog/blog.service.js
import { StatusCodes as StatusCodes10 } from "http-status-codes";
var BlogService = {
  async getPublished(query) {
    const limit = query.limit ? Number(query.limit) : void 0;
    const featured = query.featured === "true";
    if (limit && !query.page) {
      const posts = await prisma.blogPost.findMany({
        where: {
          ...blogPublishedWhere,
          ...featured ? { featured: true } : {}
        },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: limit
      });
      return {
        data: posts.map(BlogService.toPublicDTO),
        meta: { page: 1, limit, total: posts.length, totalPages: 1 }
      };
    }
    const result = await new QueryBuilder(asQueryModel(prisma.blogPost), query, {
      searchableFields: ["title", "excerpt", "category", "author"],
      filterableFields: ["category", "featured", "status"]
    }).where(blogPublishedWhere).sort().paginate().execute();
    return {
      data: result.data.map((post) => BlogService.toPublicDTO(post)),
      meta: result.meta
    };
  },
  async getPublishedBySlug(slug) {
    const post = await prisma.blogPost.findFirst({
      where: { slug, ...blogPublishedWhere }
    });
    if (!post) {
      throw new AppError_default(StatusCodes10.NOT_FOUND, "Blog post not found");
    }
    return BlogService.toPublicDTO(post);
  },
  async getAllAdmin(query) {
    const result = await new QueryBuilder(asQueryModel(prisma.blogPost), query, {
      searchableFields: ["title", "slug", "category", "author"],
      filterableFields: ["status", "category", "featured"]
    }).where({ isDeleted: false }).sort().paginate().execute();
    return {
      data: result.data.map((post) => BlogService.toAdminDTO(post)),
      meta: result.meta
    };
  },
  async getByIdAdmin(id) {
    const post = await prisma.blogPost.findFirst({
      where: { id, isDeleted: false }
    });
    if (!post) {
      throw new AppError_default(StatusCodes10.NOT_FOUND, "Blog post not found");
    }
    return BlogService.toAdminDTO(post);
  },
  async create(data) {
    const slug = data.slug || slugify(data.title);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      throw new AppError_default(StatusCodes10.CONFLICT, "Blog slug already exists");
    }
    const status = data.status || BlogStatus.DRAFT;
    const content = data.content;
    const readingTime = data.readingTime || estimateReadingTime(content);
    return prisma.blogPost.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        content,
        coverImage: data.coverImage,
        category: data.category,
        tags: data.tags || [],
        readingTime,
        featured: data.featured ?? false,
        author: data.author,
        status,
        publishedAt: status === BlogStatus.PUBLISHED ? data.publishedAt ? new Date(data.publishedAt) : /* @__PURE__ */ new Date() : null
      }
    });
  },
  async update(id, data) {
    const existing = await BlogService.getByIdAdmin(id);
    if (data.slug && data.slug !== existing.slug) {
      const slugTaken = await prisma.blogPost.findUnique({
        where: { slug: data.slug }
      });
      if (slugTaken) {
        throw new AppError_default(StatusCodes10.CONFLICT, "Blog slug already exists");
      }
    }
    const content = data.content;
    const status = data.status;
    const updateData = { ...data };
    if (content) {
      updateData.readingTime = data.readingTime || estimateReadingTime(content);
    }
    if (status === BlogStatus.PUBLISHED && !existing.publishedAt) {
      updateData.publishedAt = data.publishedAt ? new Date(data.publishedAt) : /* @__PURE__ */ new Date();
    }
    if (status === BlogStatus.DRAFT) {
      updateData.publishedAt = null;
    }
    if (data.publishedAt) {
      updateData.publishedAt = new Date(data.publishedAt);
    }
    const updated = await prisma.blogPost.update({
      where: { id },
      data: updateData
    });
    return BlogService.toAdminDTO(updated);
  },
  async softDelete(id) {
    await BlogService.getByIdAdmin(id);
    return prisma.blogPost.update({
      where: { id },
      data: { isDeleted: true }
    });
  },
  toPublicDTO(post) {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      category: post.category,
      tags: post.tags,
      publishedAt: post.publishedAt?.toISOString().split("T")[0] ?? "",
      readingTime: post.readingTime,
      featured: post.featured,
      author: post.author
    };
  },
  toAdminDTO(post) {
    return {
      ...BlogService.toPublicDTO(post),
      status: post.status,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString()
    };
  }
};

// dist/app/module/blog/blog.controller.js
var getPublished2 = catchAsync(async (req, res) => {
  const result = await BlogService.getPublished(req.query);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog posts fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getPublishedBySlug2 = catchAsync(async (req, res) => {
  const post = await BlogService.getPublishedBySlug(req.params.slug);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog post fetched successfully",
    data: post
  });
});
var getAllAdmin2 = catchAsync(async (req, res) => {
  const result = await BlogService.getAllAdmin(req.query);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog posts fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getByIdAdmin = catchAsync(async (req, res) => {
  const post = await BlogService.getByIdAdmin(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog post fetched successfully",
    data: post
  });
});
var create2 = catchAsync(async (req, res) => {
  const post = await BlogService.create(req.body);
  sendResponse(res, {
    statusCode: StatusCodes11.CREATED,
    success: true,
    message: "Blog post created successfully",
    data: BlogService.toAdminDTO(post)
  });
});
var update2 = catchAsync(async (req, res) => {
  const post = await BlogService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog post updated successfully",
    data: post
  });
});
var remove2 = catchAsync(async (req, res) => {
  const post = await BlogService.softDelete(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes11.OK,
    success: true,
    message: "Blog post deleted successfully",
    data: post
  });
});
var BlogController = {
  getPublished: getPublished2,
  getPublishedBySlug: getPublishedBySlug2,
  getAllAdmin: getAllAdmin2,
  getByIdAdmin,
  create: create2,
  update: update2,
  remove: remove2
};

// dist/app/module/blog/blog.route.js
var router4 = Router4();
var adminAuth2 = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);
router4.get("/", BlogController.getPublished);
router4.get("/admin/all", adminAuth2, BlogController.getAllAdmin);
router4.get("/admin/:id", adminAuth2, BlogController.getByIdAdmin);
router4.post("/", adminAuth2, validateRequest(createBlogSchema), BlogController.create);
router4.get("/slug/:slug", BlogController.getPublishedBySlug);
router4.patch("/:id", adminAuth2, validateRequest(updateBlogSchema), BlogController.update);
router4.delete("/:id", adminAuth2, BlogController.remove);
var BlogRoutes = router4;

// dist/app/module/certificate/certificate.route.js
import { Router as Router5 } from "express";

// dist/app/module/certificate/certificate.controller.js
import { StatusCodes as StatusCodes13 } from "http-status-codes";

// dist/app/module/certificate/certificate.service.js
import { StatusCodes as StatusCodes12 } from "http-status-codes";
var CertificateService = {
  async getPublished(query) {
    return new QueryBuilder(asQueryModel(prisma.certificate), query, {
      searchableFields: ["title", "issuer", "description"],
      filterableFields: ["isPublished"]
    }).where(publishedWhere).sort().paginate().execute();
  },
  async getPublishedById(id) {
    const certificate = await prisma.certificate.findFirst({
      where: { id, ...publishedWhere }
    });
    if (!certificate) {
      throw new AppError_default(StatusCodes12.NOT_FOUND, "Certificate not found");
    }
    return certificate;
  },
  async getAllAdmin(query) {
    return new QueryBuilder(asQueryModel(prisma.certificate), query, {
      searchableFields: ["title", "issuer"],
      filterableFields: ["isPublished"]
    }).where({ isDeleted: false }).sort().paginate().execute();
  },
  async getByIdAdmin(id) {
    const certificate = await prisma.certificate.findFirst({
      where: { id, isDeleted: false }
    });
    if (!certificate) {
      throw new AppError_default(StatusCodes12.NOT_FOUND, "Certificate not found");
    }
    return certificate;
  },
  async create(data) {
    const maxOrder = await prisma.certificate.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false }
    });
    return prisma.certificate.create({
      data: {
        ...data,
        sortOrder: data.sortOrder ?? (maxOrder._max.sortOrder ?? 0) + 1
      }
    });
  },
  async update(id, data) {
    await CertificateService.getByIdAdmin(id);
    return prisma.certificate.update({
      where: { id },
      data
    });
  },
  async softDelete(id) {
    await CertificateService.getByIdAdmin(id);
    return prisma.certificate.update({
      where: { id },
      data: { isDeleted: true }
    });
  },
  async reorder(items) {
    await prisma.$transaction(items.map((item) => prisma.certificate.update({
      where: { id: item.id },
      data: { sortOrder: item.sortOrder }
    })));
    return { updated: items.length };
  }
};

// dist/app/module/certificate/certificate.controller.js
var getPublished3 = catchAsync(async (req, res) => {
  const result = await CertificateService.getPublished(req.query);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificates fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getPublishedById = catchAsync(async (req, res) => {
  const certificate = await CertificateService.getPublishedById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificate fetched successfully",
    data: certificate
  });
});
var getAllAdmin3 = catchAsync(async (req, res) => {
  const result = await CertificateService.getAllAdmin(req.query);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificates fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getByIdAdmin2 = catchAsync(async (req, res) => {
  const certificate = await CertificateService.getByIdAdmin(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificate fetched successfully",
    data: certificate
  });
});
var create3 = catchAsync(async (req, res) => {
  const certificate = await CertificateService.create(req.body);
  sendResponse(res, {
    statusCode: StatusCodes13.CREATED,
    success: true,
    message: "Certificate created successfully",
    data: certificate
  });
});
var update3 = catchAsync(async (req, res) => {
  const certificate = await CertificateService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificate updated successfully",
    data: certificate
  });
});
var remove3 = catchAsync(async (req, res) => {
  const certificate = await CertificateService.softDelete(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificate deleted successfully",
    data: certificate
  });
});
var reorder = catchAsync(async (req, res) => {
  const result = await CertificateService.reorder(req.body.items);
  sendResponse(res, {
    statusCode: StatusCodes13.OK,
    success: true,
    message: "Certificates reordered successfully",
    data: result
  });
});
var CertificateController = {
  getPublished: getPublished3,
  getPublishedById,
  getAllAdmin: getAllAdmin3,
  getByIdAdmin: getByIdAdmin2,
  create: create3,
  update: update3,
  remove: remove3,
  reorder
};

// dist/app/module/certificate/certificate.route.js
var router5 = Router5();
var adminAuth3 = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);
router5.get("/", CertificateController.getPublished);
router5.get("/admin/all", adminAuth3, CertificateController.getAllAdmin);
router5.patch("/admin/reorder", adminAuth3, validateRequest(reorderSchema), CertificateController.reorder);
router5.get("/admin/:id", adminAuth3, CertificateController.getByIdAdmin);
router5.post("/", adminAuth3, validateRequest(createCertificateSchema), CertificateController.create);
router5.get("/:id", CertificateController.getPublishedById);
router5.patch("/:id", adminAuth3, validateRequest(updateCertificateSchema), CertificateController.update);
router5.delete("/:id", adminAuth3, CertificateController.remove);
var CertificateRoutes = router5;

// dist/app/module/project/project.route.js
import { Router as Router6 } from "express";

// dist/app/module/project/project.controller.js
import { StatusCodes as StatusCodes15 } from "http-status-codes";

// dist/app/module/project/project.service.js
import { StatusCodes as StatusCodes14 } from "http-status-codes";
var ProjectService = {
  async getPublished(query) {
    const result = await new QueryBuilder(asQueryModel(prisma.project), query, {
      searchableFields: ["title", "tag", "description"],
      filterableFields: ["isPublished"]
    }).where(publishedWhere).sort().paginate().execute();
    return result;
  },
  async getPublishedById(id) {
    const project = await prisma.project.findFirst({
      where: { id, ...publishedWhere }
    });
    if (!project) {
      throw new AppError_default(StatusCodes14.NOT_FOUND, "Project not found");
    }
    return project;
  },
  async getAllAdmin(query) {
    return new QueryBuilder(asQueryModel(prisma.project), query, {
      searchableFields: ["title", "tag"],
      filterableFields: ["isPublished"]
    }).where({ isDeleted: false }).sort().paginate().execute();
  },
  async getByIdAdmin(id) {
    const project = await prisma.project.findFirst({
      where: { id, isDeleted: false }
    });
    if (!project) {
      throw new AppError_default(StatusCodes14.NOT_FOUND, "Project not found");
    }
    return project;
  },
  async create(data) {
    const maxOrder = await prisma.project.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false }
    });
    return prisma.project.create({
      data: {
        ...data,
        sortOrder: data.sortOrder ?? (maxOrder._max.sortOrder ?? 0) + 1
      }
    });
  },
  async update(id, data) {
    await ProjectService.getByIdAdmin(id);
    return prisma.project.update({
      where: { id },
      data
    });
  },
  async softDelete(id) {
    await ProjectService.getByIdAdmin(id);
    return prisma.project.update({
      where: { id },
      data: { isDeleted: true }
    });
  },
  async reorder(items) {
    await prisma.$transaction(items.map((item) => prisma.project.update({
      where: { id: item.id },
      data: { sortOrder: item.sortOrder }
    })));
    return { updated: items.length };
  }
};

// dist/app/module/project/project.controller.js
var getPublished4 = catchAsync(async (req, res) => {
  const result = await ProjectService.getPublished(req.query);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getPublishedById2 = catchAsync(async (req, res) => {
  const project = await ProjectService.getPublishedById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Project fetched successfully",
    data: project
  });
});
var getAllAdmin4 = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllAdmin(req.query);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result.data,
    meta: result.meta
  });
});
var getByIdAdmin3 = catchAsync(async (req, res) => {
  const project = await ProjectService.getByIdAdmin(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Project fetched successfully",
    data: project
  });
});
var create4 = catchAsync(async (req, res) => {
  const project = await ProjectService.create(req.body);
  sendResponse(res, {
    statusCode: StatusCodes15.CREATED,
    success: true,
    message: "Project created successfully",
    data: project
  });
});
var update4 = catchAsync(async (req, res) => {
  const project = await ProjectService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Project updated successfully",
    data: project
  });
});
var remove4 = catchAsync(async (req, res) => {
  const project = await ProjectService.softDelete(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Project deleted successfully",
    data: project
  });
});
var reorder2 = catchAsync(async (req, res) => {
  const result = await ProjectService.reorder(req.body.items);
  sendResponse(res, {
    statusCode: StatusCodes15.OK,
    success: true,
    message: "Projects reordered successfully",
    data: result
  });
});
var ProjectController = {
  getPublished: getPublished4,
  getPublishedById: getPublishedById2,
  getAllAdmin: getAllAdmin4,
  getByIdAdmin: getByIdAdmin3,
  create: create4,
  update: update4,
  remove: remove4,
  reorder: reorder2
};

// dist/app/module/project/project.route.js
var router6 = Router6();
var adminAuth4 = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);
router6.get("/", ProjectController.getPublished);
router6.get("/admin/all", adminAuth4, ProjectController.getAllAdmin);
router6.patch("/admin/reorder", adminAuth4, validateRequest(reorderSchema), ProjectController.reorder);
router6.get("/admin/:id", adminAuth4, ProjectController.getByIdAdmin);
router6.post("/", adminAuth4, validateRequest(createProjectSchema), ProjectController.create);
router6.get("/:id", ProjectController.getPublishedById);
router6.patch("/:id", adminAuth4, validateRequest(updateProjectSchema), ProjectController.update);
router6.delete("/:id", adminAuth4, ProjectController.remove);
var ProjectRoutes = router6;

// dist/app/module/upload/upload.route.js
import { Router as Router7 } from "express";

// dist/app/module/upload/upload.controller.js
import { StatusCodes as StatusCodes16 } from "http-status-codes";
var uploadImage = catchAsync(async (req, res) => {
  const file = req.file;
  if (!file?.buffer || !file?.originalname) {
    sendResponse(res, {
      statusCode: StatusCodes16.BAD_REQUEST,
      success: false,
      message: "No file uploaded"
    });
    return;
  }
  const result = await uploadFileToCloudinary(file.buffer, file.originalname);
  sendResponse(res, {
    statusCode: StatusCodes16.OK,
    success: true,
    message: "Image uploaded successfully",
    data: {
      url: result.secure_url,
      publicId: result.public_id
    }
  });
});
var UploadController = {
  uploadImage
};

// dist/app/module/upload/upload.route.js
var router7 = Router7();
router7.post("/image", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), memoryUpload.single("file"), UploadController.uploadImage);
var UploadRoutes = router7;

// dist/app/module/user/user.route.js
import { Router as Router8 } from "express";

// dist/app/module/user/user.controller.js
import { StatusCodes as StatusCodes18 } from "http-status-codes";

// dist/app/module/user/user.service.js
import { StatusCodes as StatusCodes17 } from "http-status-codes";
var userPublicSelect = {
  id: true,
  email: true,
  name: true,
  role: true,
  status: true,
  emailVerified: true,
  image: true,
  isDeleted: true,
  createdAt: true,
  updatedAt: true
};
var assertEmailNotTaken = async (email) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError_default(StatusCodes17.CONFLICT, "A user with this email already exists");
  }
};
var rollbackAuthUser = async (userId) => {
  try {
    await prisma.user.delete({ where: { id: userId } });
  } catch (err) {
    console.error("Rollback failed for auth user:", userId, err);
  }
};
var createAdmin = async (payload, requestingUserRole) => {
  if (payload.role === Role.SUPER_ADMIN && requestingUserRole !== Role.SUPER_ADMIN) {
    throw new AppError_default(StatusCodes17.FORBIDDEN, "Only a Super Admin can create another Super Admin");
  }
  await assertEmailNotTaken(payload.admin.email);
  const { user: authUser } = await auth.api.signUpEmail({
    body: {
      ...payload.admin,
      password: payload.password,
      role: payload.role,
      needPasswordChange: false
    }
  });
  try {
    return await prisma.$transaction(async (tx) => {
      return tx.admin.create({
        data: {
          userId: authUser.id,
          ...payload.admin
        },
        include: {
          user: { select: userPublicSelect }
        }
      });
    });
  } catch (error) {
    await rollbackAuthUser(authUser.id);
    throw error;
  }
};
var UserService = {
  createAdmin
};

// dist/app/module/user/user.controller.js
var createAdmin2 = catchAsync(async (req, res) => {
  const requestingUser = req.user;
  const result = await UserService.createAdmin(req.body, requestingUser.role);
  sendResponse(res, {
    statusCode: StatusCodes18.CREATED,
    success: true,
    message: "Admin registered successfully",
    data: result
  });
});
var UserController = {
  createAdmin: createAdmin2
};

// dist/app/module/user/user.validation.js
import z4 from "zod";
var passwordSchema = z4.string({ message: "Password is required" }).min(6, "Password must be at least 6 characters").max(20, "Password must be at most 20 characters");
var nameSchema = z4.string({ message: "Name is required" }).min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters").trim();
var emailSchema = z4.string({ message: "Email is required" }).email("Invalid email address").toLowerCase().trim();
var contactNumberSchema = z4.string({ message: "Contact number must be a string" }).min(7, "Contact number must be at least 7 characters").max(15, "Contact number must be at most 15 characters").regex(/^\+?[0-9\s\-()]+$/, "Contact number contains invalid characters");
var createAdminZodSchema = z4.object({
  password: passwordSchema,
  admin: z4.object({
    name: nameSchema,
    email: emailSchema,
    contactNumber: contactNumberSchema.optional(),
    profilePhoto: z4.string().url("Profile photo must be a valid URL").optional()
  }),
  /**
   * SUPER_ADMIN can assign ADMIN or SUPER_ADMIN.
   * ADMIN can only assign ADMIN.
   * This is enforced in the service layer — the route only checks that the
   * requesting user is at least ADMIN.
   */
  role: z4.enum([Role.ADMIN, Role.SUPER_ADMIN], {
    message: "Role must be ADMIN or SUPER_ADMIN"
  })
});
var createCRApplicationZodSchema = z4.object({
  semesterId: z4.string().cuid("Invalid semester ID").optional(),
  reason: z4.string({ message: "Reason is required" }).min(20, "Please provide a reason of at least 20 characters").max(500, "Reason must be at most 500 characters")
});

// dist/app/module/user/user.route.js
var router8 = Router8();
router8.post("/create-admin", checkAuth(Role.SUPER_ADMIN), validateRequest(createAdminZodSchema), UserController.createAdmin);
var UserRoutes = router8;

// dist/app/routes/index.js
var router9 = express.Router();
router9.use("/auth", AuthRoute);
router9.use("/users", UserRoutes);
router9.use("/admins", AdminRoutes);
router9.use("/projects", ProjectRoutes);
router9.use("/certificates", CertificateRoutes);
router9.use("/activities", ActivityRoutes);
router9.use("/blogs", BlogRoutes);
router9.use("/upload", UploadRoutes);
var IndexRoute = router9;

// dist/app/middleware/globalErrorhandler.js
import multer2 from "multer";
import { StatusCodes as StatusCodes20 } from "http-status-codes";
import z5 from "zod";

// dist/app/errorHelpers/handlezoderror.js
import { StatusCodes as StatusCodes19 } from "http-status-codes";
var handleZodError = (error) => {
  const statusCode = StatusCodes19.BAD_REQUEST;
  const message = "Zod Validation Error";
  const errorSources = [];
  error.issues.forEach((issue) => {
    errorSources.push({
      path: issue.path.join(".") || "",
      message: issue.message
    });
  });
  return { statusCode, message, errorSources };
};
var handlezoderror_default = handleZodError;

// dist/app/middleware/globalErrorhandler.js
var globalErrorhandler = (err, req, res, next) => {
  if (envVars.NODE_ENV === "development") {
    console.log("Error from Global Error Handler", err);
  }
  let errorSources = [];
  let statusCode = StatusCodes20.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let stack = void 0;
  if (err instanceof z5.ZodError) {
    const simplifiedError = handlezoderror_default(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof multer2.MulterError) {
    statusCode = StatusCodes20.BAD_REQUEST;
    message = err.code === "LIMIT_FILE_SIZE" ? "One or more files exceed the maximum size (10MB per file)" : err.message;
    errorSources = [{ path: "files", message }];
  } else if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
    statusCode = StatusCodes20.CONFLICT;
    message = "This information already exists. Please use a different value.";
    errorSources = [
      {
        path: Array.isArray(err.meta?.target) ? String(err.meta.target[0]) : "",
        message
      }
    ];
    stack = err.stack;
  } else if (err instanceof AppError_default) {
    statusCode = err.statusCode;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  } else if (err instanceof Error) {
    statusCode = StatusCodes20.INTERNAL_SERVER_ERROR;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  }
  const errorResponse = {
    success: false,
    statusCode,
    message,
    errorSources,
    ...envVars.NODE_ENV === "development" ? { error: err } : {},
    ...envVars.NODE_ENV === "development" && stack ? { stack } : {}
  };
  res.status(statusCode).json(errorResponse);
};

// dist/app/middleware/notFound.js
import { StatusCodes as StatusCodes21 } from "http-status-codes";
var notFound = (req, res, next) => {
  res.status(StatusCodes21.NOT_FOUND).json({
    message: "Not Found",
    success: false,
    error: `Route ${req.originalUrl} Not Found`
  });
};

// dist/app.js
var app = express2();
var templateCandidates = [
  path.resolve(process.cwd(), "api/templates"),
  path.resolve(process.cwd(), "src/app/templates"),
  path.resolve(process.cwd(), "dist/app/templates")
];
var templatesDir = templateCandidates.find((dir) => fs.existsSync(dir)) ?? templateCandidates[0];
app.set("view engine", "ejs");
app.set("views", templatesDir);
var corsOptions = {
  origin: [
    envVars.FRONTEND_URL,
    envVars.BETTER_AUTH_URL,
    "http://localhost:3000",
    "http://localhost:5000",
    ...process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use("/api/auth", toNodeHandler(auth));
app.use(express2.json());
app.use(cookieParser());
app.use(express2.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Acadex Server is running \u{1F680}");
});
app.use("/api/v1", IndexRoute);
app.use(globalErrorhandler);
app.use(notFound);
var app_default = app;

// dist/app/utils/seed.js
var seedSuperAdmin = async () => {
  try {
    if (!envVars.SUPER_ADMIN_EMAIL || !envVars.SUPER_ADMIN_PASSWORD) {
      console.warn("SUPER_ADMIN_EMAIL or SUPER_ADMIN_PASSWORD not set. Skipping seeding.");
      return;
    }
    const trimmedEmail = envVars.SUPER_ADMIN_EMAIL.trim();
    const isSuperAdminExist = await prisma.user.findFirst({
      where: {
        role: Role.SUPER_ADMIN
      }
    });
    if (isSuperAdminExist) {
      console.log("Super admin already exists. Skipping seeding super admin.");
      return;
    }
    console.log(`Seeding super admin with email: ${trimmedEmail}`);
    const superAdminUser = await auth.api.signUpEmail({
      body: {
        email: trimmedEmail,
        password: envVars.SUPER_ADMIN_PASSWORD,
        name: "Super Admin",
        role: Role.SUPER_ADMIN,
        needPasswordChange: false,
        rememberMe: false
      }
    });
    if (!superAdminUser || !superAdminUser.user) {
      throw new Error("Failed to create super admin user through auth API");
    }
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: {
          id: superAdminUser.user.id
        },
        data: {
          emailVerified: true
        }
      });
      await tx.admin.create({
        data: {
          userId: superAdminUser.user.id,
          name: "Super Admin",
          email: trimmedEmail
        }
      });
    });
    const superAdmin = await prisma.admin.findFirst({
      where: {
        email: trimmedEmail
      },
      include: {
        user: true
      }
    });
    console.log("Super Admin Created successfully.");
  } catch (error) {
    console.error("Error seeding super admin: ", error);
    try {
      if (envVars.SUPER_ADMIN_EMAIL) {
        await prisma.user.deleteMany({
          where: {
            email: envVars.SUPER_ADMIN_EMAIL.trim()
          }
        });
      }
    } catch (cleanupError) {
      console.error("Failed to clean up super admin seed state:", cleanupError);
    }
  }
};

// dist/app/utils/seed-portfolio.js
var projectsSeed = [
  {
    title: "Acadex",
    tag: "Next.js Platform",
    images: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/one_uz50sw.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/two_ozn9cp.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/three_p83x25.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png"
    ],
    description: "A classroom-first study platform where students can join classrooms, organize subjects and folders, upload notes, save favorites, track leaderboard activity, and collaborate through a clean role-aware academic workflow.",
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
      "Radix UI"
    ],
    liveLink: "https://acadex-client.vercel.app/",
    frontendLink: "https://github.com/iktushar01/Acadex-client.git",
    backendLink: "https://github.com/iktushar01/Acadex-server.git",
    challenges: [
      "Designing role-aware dashboard flows for students, CRs, admins, and super admins across protected routes",
      "Structuring classroom, subject, folder, and note management into a clear academic hierarchy",
      "Handling approval-aware note workflows with favorites, comments, and leaderboard activity"
    ],
    improvements: [
      "Add richer classroom analytics",
      "Introduce real-time activity updates",
      "Expand note discovery with filters"
    ],
    sortOrder: 1
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
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778815927/Screenshot_2026-05-15_093024_y9cblf.png"
    ],
    description: "A comprehensive POS Store Management System with advanced inventory tracking, supplier management, and warehouse operations.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Table",
      "Axios",
      "SweetAlert2"
    ],
    liveLink: "https://retail-flow-client.vercel.app/dashboard/overview",
    frontendLink: "https://github.com/iktushar01/RetailFlow-client.git",
    backendLink: "https://github.com/iktushar01/RetailFlow-server.git",
    challenges: [
      "Implementing secure session management",
      "Building complex procurement workflows",
      "Managing real-time inventory updates"
    ],
    improvements: [
      "Add sales POS terminal",
      "Implement barcode scanning",
      "Add email notifications"
    ],
    sortOrder: 2
  },
  {
    title: "Easy Home - Real Estate Platform",
    tag: "MERN Stack",
    images: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/one_zgibwm.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465885/two_ram1lj.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/three_opba7k.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465883/four_riopet.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465882/five_um6rxu.png"
    ],
    description: "A MERN stack real estate platform with role-based dashboards, wishlist functionality, and Stripe payment integration.",
    technologies: [
      "React",
      "Firebase Auth",
      "MongoDB",
      "Express.js",
      "Node.js",
      "TanStack Query",
      "Stripe.js",
      "Tailwind CSS"
    ],
    liveLink: "https://easy-home-5ec20.web.app/",
    frontendLink: "https://github.com/iktushar01/Easy-Home-Client.git",
    backendLink: "https://github.com/iktushar01/Easy-Home-Server.git",
    challenges: [
      "Dynamic role-based dashboards",
      "JWT route security",
      "Stripe payment logic"
    ],
    improvements: [
      "Add agent selling statistics",
      "Implement property report system",
      "Multi-language support"
    ],
    sortOrder: 3
  }
];
var certificatesSeed = [
  {
    title: "Complete Web Development Course with Jhankar Mahbub",
    issuer: "Programming Hero",
    date: "2024",
    description: "Successfully completed an intensive full-stack web development bootcamp covering React.js, Node.js, Express.js, MongoDB, and modern JavaScript.",
    image: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Firebase",
      "JWT"
    ],
    credentialUrl: "https://web.programming-hero.com/",
    sortOrder: 1
  },
  {
    title: "Webflow Professional Certification",
    issuer: "Webflow",
    date: "2023",
    description: "Certified in Webflow platform mastery, demonstrating proficiency in no-code web design, responsive layouts, and CMS integration.",
    image: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    skills: [
      "Webflow",
      "Web Design",
      "Responsive Design",
      "CMS",
      "UI/UX",
      "No-Code"
    ],
    credentialUrl: "https://webflow.com/",
    sortOrder: 2
  }
];
var activitiesSeed = [
  {
    slug: "acadex-hackathon-2025",
    title: "National Inter-University Hackathon",
    type: "hackathon",
    organizer: "Bangladesh ICT Division",
    date: "March 2025",
    location: "Dhaka, Bangladesh",
    achievement: "Winner",
    shortDescription: "Built Acadex \u2014 a classroom-first study platform \u2014 in 36 hours. Led a team of four to deliver a full-stack MVP with real-time collaboration.",
    fullDescription: "Participated in a 36-hour national hackathon focused on EdTech innovation. Our team identified gaps in how students organize academic materials across fragmented tools and built Acadex \u2014 a unified classroom platform with role-aware workflows, note sharing, and leaderboard gamification. We pitched to a panel of industry judges and won first place for technical execution and product vision.",
    coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1782219446/ChatGPT_Image_May_17_2026_10_02_44_AM_ej3p2z.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/one_uz50sw.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/two_ozn9cp.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/three_p83x25.png"
    ],
    role: "Team Lead & Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    teamMembers: [
      "Tushar Islam",
      "Team Member A",
      "Team Member B",
      "Team Member C"
    ],
    timeline: [
      {
        label: "Day 1 \u2014 Ideation",
        value: "Problem research, wireframes, architecture"
      },
      {
        label: "Day 1 \u2014 Build",
        value: "Auth, classroom CRUD, file uploads"
      },
      {
        label: "Day 2 \u2014 Polish",
        value: "Leaderboard, UI refinement, demo prep"
      },
      { label: "Final Pitch", value: "Live demo + Q&A with judges" }
    ],
    outcomes: [
      "Won 1st place among 40+ teams",
      "Received mentorship from senior engineers",
      "Project evolved into ongoing portfolio flagship"
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png"
    ],
    projectName: "Acadex",
    problemStatement: "Students juggle notes, assignments, and class communication across WhatsApp, Google Drive, and paper \u2014 with no single academic hub.",
    solutionOverview: "A classroom-centric platform where teachers create classes, students join with codes, upload organized notes, and compete on a subject-wise leaderboard.",
    githubLink: "https://github.com/iktushar01",
    demoLink: "https://www.iktushar01.me",
    demoVideoLink: "https://www.youtube.com",
    teamSize: 4,
    awards: ["1st Place \u2014 Best EdTech Solution", "Audience Choice Award"],
    devpostLink: "https://devpost.com",
    eventWebsite: "https://www.ictd.gov.bd",
    sortOrder: 1
  },
  {
    slug: "web-dev-workshop-2024",
    title: "Advanced React & Next.js Workshop",
    type: "workshop",
    organizer: "Programming Hero",
    date: "August 2024",
    location: "Online",
    achievement: "Participant",
    shortDescription: "Hands-on workshop covering React Server Components, App Router patterns, and performance optimization in production Next.js apps.",
    fullDescription: "A two-day intensive workshop led by senior instructors from Programming Hero. Covered modern React 19 features, Next.js App Router architecture, data fetching strategies, and deployment best practices. Built a mini project applying server and client component boundaries.",
    coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png"
    ],
    role: "Participant",
    techStack: ["React 19", "Next.js", "TypeScript"],
    outcomes: [
      "Completed all workshop assignments",
      "Built a server-rendered dashboard prototype"
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/programingHero_avnspb.png"
    ],
    eventWebsite: "https://web.programming-hero.com",
    slidesLink: "https://slides.com",
    sortOrder: 2
  },
  {
    slug: "coding-competition-2024",
    title: "Regional Competitive Programming Contest",
    type: "competition",
    organizer: "ACM Student Chapter",
    date: "November 2024",
    location: "Chittagong, Bangladesh",
    achievement: "Finalist",
    shortDescription: "Solved algorithmic challenges under time pressure. Advanced to the regional finals among 200+ participants.",
    fullDescription: "Competed in a 5-hour ICPC-style programming contest featuring data structures, graph algorithms, and dynamic programming problems. Our team placed in the top 15, qualifying for the regional finals. Strengthened problem decomposition and time-management skills under competitive conditions.",
    coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png"
    ],
    role: "Team Programmer",
    techStack: ["C++", "Python", "Algorithms"],
    teamMembers: ["Tushar Islam", "Teammate 1", "Teammate 2"],
    teamSize: 3,
    outcomes: [
      "Regional finalist \u2014 top 15 of 200+ teams",
      "Solved 6 of 10 problems in qualifiers"
    ],
    eventWebsite: "https://icpc.global",
    sortOrder: 3
  },
  {
    slug: "tech-seminar-2024",
    title: "Future of Web Development Seminar",
    type: "seminar",
    organizer: "Google Developer Groups",
    date: "June 2024",
    location: "Dhaka, Bangladesh",
    achievement: "Participant",
    shortDescription: "Industry seminar on AI-assisted development, edge computing, and the evolving full-stack landscape in 2024\u20132025.",
    fullDescription: "Attended keynote sessions from senior engineers at leading tech companies. Topics included AI pair programming, WebAssembly adoption, and sustainable software architecture. Networked with local developer community and participated in an open Q&A panel.",
    coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/four_qsaher.png",
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png"
    ],
    role: "Attendee",
    outcomes: [
      "Expanded professional network",
      "Gained insights on AI tooling trends"
    ],
    eventWebsite: "https://gdg.community.dev",
    sortOrder: 4
  },
  {
    slug: "community-volunteer-2023",
    title: "Code for Community \u2014 Teaching Program",
    type: "volunteer",
    organizer: "Local Youth Tech Initiative",
    date: "2023 \u2014 2024",
    location: "Chittagong, Bangladesh",
    achievement: "Volunteer",
    shortDescription: "Volunteered as a web development mentor, teaching HTML, CSS, and JavaScript fundamentals to 30+ high school students.",
    fullDescription: "Led weekly coding sessions for underprivileged students with limited access to technology education. Designed beginner-friendly curriculum, hands-on exercises, and a capstone mini-project where students built their first personal portfolio pages.",
    coverImage: "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png",
    gallery: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778465636/five_nr05q8.png"
    ],
    role: "Web Development Mentor",
    techStack: ["HTML", "CSS", "JavaScript"],
    outcomes: [
      "Mentored 30+ students over 6 months",
      "15 students completed capstone portfolios",
      "Received community appreciation certificate"
    ],
    certificateImages: [
      "https://res.cloudinary.com/dfoqasqnw/image/upload/v1778464974/webflow_kkq5i2.png"
    ],
    sortOrder: 5
  }
];
async function seedBlogsFromFrontend() {
  const { blogPostsData: blogPostsData2 } = await Promise.resolve().then(() => (init_blogs(), blogs_exports));
  for (const post of blogPostsData2) {
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
        status: BlogStatus.PUBLISHED
      }
    });
  }
}
var seedPortfolio = async () => {
  try {
    const [existingProjects, existingBlogs] = await Promise.all([
      prisma.project.count(),
      prisma.blogPost.count()
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
            certificateImages: activity.certificateImages ?? []
          }
        });
      }
    }
    if (existingBlogs === 0) {
      await seedBlogsFromFrontend();
    }
    console.log("Portfolio data seeded successfully.");
  } catch (error) {
    console.error("Error seeding portfolio data:", error);
  }
};

// dist/server.js
if (process.env.NODE_ENV !== "production") {
  import("dotenv/config");
}
var bootstrap = async () => {
  try {
    const port = process.env.PORT || envVars.PORT || 5e3;
    await app_default.listen(port);
    console.log(`\u2705 Server running on ${process.env.NODE_ENV || envVars.NODE_ENV} mode at http://localhost:${port}`);
    seedSuperAdmin().catch((error) => {
      console.error("Super admin seed skipped due to startup error:", error);
    });
    seedPortfolio().catch((error) => {
      console.error("Portfolio seed skipped due to startup error:", error);
    });
  } catch (error) {
    if (error.code === "EADDRINUSE") {
      console.error(`\u274C Port ${process.env.PORT || envVars.PORT} is already in use.`);
    } else {
      console.error("\u274C Failed to start server:", error);
    }
  }
};
if (process.env.VERCEL === "1") {
  seedSuperAdmin().catch((error) => {
    console.error("Super admin seed skipped due to startup error:", error);
  });
  seedPortfolio().catch((error) => {
    console.error("Portfolio seed skipped due to startup error:", error);
  });
}
if (process.env.VERCEL !== "1") {
  bootstrap();
}
var server_default = app_default;
export {
  server_default as default
};
