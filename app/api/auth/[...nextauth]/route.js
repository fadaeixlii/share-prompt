"use server";

import Users from "@/models/user";
import { connectToDb } from "@/utils/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const sessionUser = await Users.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDb();
        // check if user already exist
        const userExist = await Users.findOne({
          email: profile.email,
        });

        //  or not exist
        console.log(profile);
        if (!userExist) {
          await Users.create({
            email: profile.email,
            username: profile.name.replaceAll(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
