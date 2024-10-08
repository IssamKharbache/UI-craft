import { withAuth } from "next-auth/middleware"

export default withAuth(
{
    pages: {
        signIn: "/sign-in",
        signOut:"/"
      },
}
)

export const config = { matcher: ["/dashboard","/favorites","/categories","/settings"]}