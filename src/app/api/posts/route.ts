import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/posts - Lista todos os posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar posts' }, { status: 500 });
  }
}

// POST /api/posts - Cria um novo post
export async function POST(request: Request) {
  try {
    const { title, content, authorId } = await request.json();
    const post = await prisma.post.create({
      data: { title, content, authorId },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar post' }, { status: 500 });
  }
}
