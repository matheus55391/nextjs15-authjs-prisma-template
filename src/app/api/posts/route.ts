import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET /api/posts - Lista todos os posts
export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(posts, {
    headers: {
      'x-nextjs-cache-tags': 'posts-list',
    },
  });
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
