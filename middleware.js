export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/properties/saved", "/messages"],
};
// When finished, include 'properties/add'
