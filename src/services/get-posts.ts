export async function getPostsService() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/posts`, { next: { tags: ["posts-list"] } });
  return res.json();
}