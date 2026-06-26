import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { Role, UserStatus } from "./prisma-exports";
import { envVars } from "../../config/env";
import ms, { StringValue } from "ms";
import { bearer } from "better-auth/plugins";

export const auth = betterAuth({
    baseURL: envVars.BETTER_AUTH_URL,
    secret: envVars.BETTER_AUTH_SECRET,
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
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
            lockedUntil: { type: "date", required: false, defaultValue: null },
        },
    },
    plugins: [bearer()],
    session: {
        expiresIn:
            ms(envVars.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN as StringValue) / 1000,
        updateAge:
            ms(envVars.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE as StringValue) / 1000,
        cookieCache: {
            enabled: true,
            maxAge:
                ms(envVars.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN as StringValue) /
                1000,
            cookieOptions: {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                path: "/",
            },
        },
    },
    trustedOrigins: [
        process.env.BETTER_AUTH_URL || "http://localhost:5000",
        envVars.FRONTEND_URL,
    ],
    advanced: {
        useSecureCookies: false,
        cookies: {
            state: {
                attributes: {
                    sameSite: "none",
                    secure: true,
                    httpOnly: true,
                    path: "/",
                },
            },
            sessionToken: {
                attributes: {
                    sameSite: "none",
                    secure: true,
                    httpOnly: true,
                    path: "/",
                },
            },
        },
    },
});
