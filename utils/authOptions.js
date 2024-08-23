import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in
    async signIn({ profile }) {
      // Connect to db
      // Check if user exists
      // if not create user
      // return true to allow sign in
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      // Get user from db
      // Assign user id from session
      // return session
    },
  },
};
