import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
    ],
  
    secret: process.env.SECRET,
  
    session: {
      strategy: "database",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      updateAge: 60 * 60 * 24, // 24 hours
    },
  
    useSecureCookies: process.env.NODE_ENV === "production",
  
    callbacks: {
      async redirect({ baseUrl }) {
        return baseUrl;
      },
      async session({ session, user }) {
        if (session?.user) session.user.id = user.id;
        return session;
      },
    },
  };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }