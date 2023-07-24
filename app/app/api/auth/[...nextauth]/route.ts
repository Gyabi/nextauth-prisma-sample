import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";

// Auth.js設定値の作成
export const authOptions: NextAuthOptions = {
    // 利用するDBアダプタの指定
    adapter: PrismaAdapter(prisma),
    // 有効化する認証プロバイダの指定
    // ここに記載したプロバイダがログイン画面で自動実装される
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
    ],
    // シークレットキー
    secret: process.env.NEXTAUTH_SECRET,
    
    // セッション方式の設定
    session: {
      strategy: "database",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      updateAge: 60 * 60 * 24, // 24 hours
    },
    
    callbacks: {
      // リダイレクト時の動作を設定
      async redirect({ baseUrl }) {
        return baseUrl;
      },
      // セッションの設定
      async session({ session, user }) {
        if (session?.user) session.user.id = user.id;
        return session;
      }
    },
  };

// NextAuthのハンドラーを作成
const handler = NextAuth(authOptions);

// 公開
export { handler as GET, handler as POST }