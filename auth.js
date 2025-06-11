import NextAuth from "next-auth";

const config = {
  providers: [
    // Add your authentication providers here
    // Example:
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
