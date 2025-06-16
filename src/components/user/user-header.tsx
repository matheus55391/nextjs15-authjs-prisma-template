import { auth } from "@/lib/auth";
import { SignOut } from "@/components/user/signout-button";

export async function UserHeader() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div className="flex items-center mb-6 justify-between">
      <div className="flex items-center">
        {session.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name || "Avatar"}
            className="w-14 h-14 rounded-full mr-4"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold">
            Bem-vindo, {session.user?.name || "usuário"}!
          </h1>
          <p>Você está logado.</p>
        </div>
      </div>
      <SignOut />
    </div>
  );
}
