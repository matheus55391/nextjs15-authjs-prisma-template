import { auth } from "@/lib/auth";
import { SignIn } from "./components/signin-button";
import { SignOut } from "./components/signout-button";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <>
          <h1>Bem-vindo, {session.user?.name || "usuário"}!</h1>
          <p>Você está logado.</p>
          <SignOut />
        </>
      ) : (
        <>
          <h1>Bem-vindo!</h1>
          <p>Por favor, faça login para continuar.</p>
          <SignIn />
        </>
      )}
    </div>
  );
}
