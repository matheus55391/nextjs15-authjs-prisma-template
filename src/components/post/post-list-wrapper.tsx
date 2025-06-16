import { PostList } from "@/components/post/post-list";

export async function PostListWrapper({ posts }: { posts: any[] }) {
  async function handleDeletePost(id: string) {
    'use server';
    const { deletePost } = await import("@/app/actions");
    await deletePost(id);
  }
  return <PostList posts={posts} onDelete={handleDeletePost} />;
}
