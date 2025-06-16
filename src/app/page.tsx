import { usePosts } from "@/hooks/use-posts";
import { auth } from "@/lib/auth";
import DashboardPage from "./dashboard/page";
import LoginPage from "./login/page";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <DashboardPage/> 
    )
  }
  return <LoginPage/>;
}
