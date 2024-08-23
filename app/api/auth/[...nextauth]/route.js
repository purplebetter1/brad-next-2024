import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NexAuth(authOptions);

export { handler as GET, handler as POST };
