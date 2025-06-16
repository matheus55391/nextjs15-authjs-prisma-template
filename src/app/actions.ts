"use server";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { auth } from "@/lib/auth";

const postSchema = z.object({
  title: z.string().min(1),
});

export async function createPost(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Não autenticado");
  const parsed = postSchema.safeParse({
    title: formData.get("title"),
  });
  if (!parsed.success) {
    throw new Error("Título inválido");
  }
  await prisma.post.create({
    data: { title: parsed.data.title, authorId: session.user.id },
  });
  revalidateTag("posts-list");
}

export async function deletePost(id: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Não autenticado");
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post || post.authorId !== session.user.id) throw new Error("Acesso negado");
  await prisma.post.delete({ where: { id } });
  revalidateTag("posts-list");
}
