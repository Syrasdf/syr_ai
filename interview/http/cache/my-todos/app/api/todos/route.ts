import {
  NextResponse
} from 'next/server';
import {
  PrismaClient
} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title } = await req.json()
    const todo = await prisma.todos.create({
      data: {
        title
      }
    });
    return NextResponse.json(todo)
  } catch (error) {
    console.error('POST /api/todos error:', error);
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 取所有的
    const todos = await prisma.todos.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
    return NextResponse.json(todos)
  } catch (error) {
    console.error('GET /api/todos error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}