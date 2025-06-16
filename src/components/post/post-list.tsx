import { auth } from "@/lib/auth";

export async function PostList({ posts, onDelete }: { posts: any[]; onDelete: (id: string) => Promise<void> }) {
  const session = await auth();
  return (
    <ul style={{ marginTop: 24 }}>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          {session?.user?.id === post.authorId && (
            <form action={async () => { 'use server'; await onDelete(post.id); }} style={{ display: "inline" }}>
              <button type="submit" style={{ marginLeft: 8 }}>Deletar</button>
            </form>
          )}
        </li>
      ))}
    </ul>
  );
}
