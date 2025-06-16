export function PostForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  return (
    <form action={action} style={{ marginTop: 24 }}>
      <input name="title" placeholder="Novo post" required />
      <button type="submit">Criar post</button>
    </form>
  );
}
