import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/db"
import { accounts, sessions, users, verificationTokens } from "@/lib/schema"
import { joinWaitlist } from "@/app/actions/waitlist"
import { cookies } from "next/headers"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
  events: {
    async createUser({ user }) {
      if (user.email) {
        let city: string | undefined = undefined;
        try {
          city = cookies().get("waitlist_city")?.value;
        } catch {}
        
        // Automatically add them to the custom waitlist table and send Resend confirmation email based on your existing logic! 🐾 
        await joinWaitlist({ 
          email: user.email,
          name: user.name || undefined,
          city: city || undefined
        });
      }
    }
  }
})
