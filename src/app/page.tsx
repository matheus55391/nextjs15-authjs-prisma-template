import { auth } from "@/lib/auth";
import { SignInCard } from "@/components/user/signin-button";
import { UserHeader } from "@/components/user/user-header";
import { PostFormWrapper } from "@/components/post/post-form-wrapper";
import { PostListWrapper } from "@/components/post/post-list-wrapper";
import { usePosts } from "@/hooks/use-posts";

export default async function Home() {
  const session = await auth();
  const posts = await usePosts();
  if (session?.user) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6  rounded-lg shadow-md">
        <UserHeader />
        <div className="mb-4 flex justify-end">
          {/* SignOut já está no UserHeader, pode remover daqui se duplicado */}
        </div>
        <div className="mb-6">
          <PostFormWrapper />
        </div>
        <PostListWrapper posts={posts} />
      </div>
    )
  }
  return <SignInCard />;
}
