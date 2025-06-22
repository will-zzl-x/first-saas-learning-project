import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google"; // Adjust the import if using a different provider
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo"; // Adjust the path as necessary

const config = {
  providers: [
    // Add your authentication providers here
    // Example:
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Resend({
      apiKey: process.env.RESEND_KEY, // Ensure you have this environment variable set
      from: "noreply@resend.feedly.cyou",
      name: "Email",
    }),
    Google({
      clientId: process.env.GOOGLE_ID, // Ensure you have this environment variable set
      clientSecret: process.env.GOOGLE_SECRET, // Ensure you have this environment variable set
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
