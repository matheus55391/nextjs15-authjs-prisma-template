import { signOut } from "@/lib/auth";

export function SignOut({ label = "Sair" }: { label?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">{label}</button>
    </form>
  );
}
