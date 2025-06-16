import { PostForm } from "@/components/post/post-form";

export function PostFormWrapper() {
  async function handleCreatePost(formData: FormData) {
    'use server';
    const { createPost } = await import("@/app/actions");
    await createPost(formData);
  }
  return <PostForm action={handleCreatePost} />;
}
