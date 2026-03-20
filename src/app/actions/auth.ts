'use server';

import { signIn, auth } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/joined" });
}

export async function getCurrentUserSession() {
  const session = await auth();
  return session;
}
