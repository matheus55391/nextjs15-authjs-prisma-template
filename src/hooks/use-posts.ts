import { getPostsService } from "@/services/get-posts";

export async function usePosts() {
  return await getPostsService();
}
