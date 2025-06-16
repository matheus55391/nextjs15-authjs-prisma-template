import { signIn } from "@/lib/auth";

export function SignInCard() {
  return (
    <div className="max-w-sm mx-auto mt-20 p-8 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6">Entrar na sua conta</h2>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/" });
        }}
        className="w-full mb-3"
      >
        <button
          type="submit"
          className="w-full py-2 px-4 rounded bg-black text-white hover:bg-gray-800 transition cursor-pointer"
        >
          Entrar com GitHub
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
        className="w-full"
      >
        <button
          type="submit"
          className="w-full py-2 px-4 rounded bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
        >
          Entrar com Google
        </button>
      </form>
    </div>
  );
}
