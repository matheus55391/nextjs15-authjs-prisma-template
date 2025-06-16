import { prisma } from "@/lib/prisma";

export async function getDashboardPosts() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
    },
  });
  return posts.map((post) => ({
    id: post.id,
    author: {
      name: post.author?.name || "Usuário",
      username: post.author?.email?.split("@")[0] || "anon",
      avatar: post.author?.image || "/placeholder.svg?height=40&width=40",
      verified: true, // ajuste conforme sua lógica
    },
    content: post.title, // ajuste para usar o campo correto
    tags: [], // adicione tags se houver
    timestamp: post.createdAt.toLocaleString("pt-BR", { hour: "2-digit", hour12: false, day: "2-digit", month: "2-digit" }),
    likes: 0,
    comments: 0,
    reposts: 0,
  }));
}
