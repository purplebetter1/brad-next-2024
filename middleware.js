export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/properties/saved", '/properties/add', "/messages"],
};

