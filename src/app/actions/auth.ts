'use server';

import { signIn, auth, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/joined" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

export async function getCurrentUserSession() {
  const session = await auth();
  return session;
}
