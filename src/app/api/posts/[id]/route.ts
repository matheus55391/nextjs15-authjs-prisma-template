import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/posts/[id] - Busca um post pelo ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: { author: true },
    });
    if (!post) {
      return NextResponse.json({ error: 'Post não encontrado' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar post' }, { status: 500 });
  }
}

// DELETE /api/posts/[id] - Deleta um post pelo ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.delete({
      where: { id: params.id },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar post' }, { status: 500 });
  }
}
