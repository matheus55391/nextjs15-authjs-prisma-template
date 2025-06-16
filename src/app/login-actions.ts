"use server";
import { signIn } from "@/lib/auth";

export async function loginWithGithub() {
  await signIn("github", { redirectTo: "/" });
}

export async function loginWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}
