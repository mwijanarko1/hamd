import { NextResponse } from 'next/server';
import { ChapterContent } from '@/app/dashboard/chapter/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const chapterId = parseInt(params.id);
    const imported = await import(`@/app/dashboard/chapter/content/chapter${chapterId}`);
    const content = imported[`chapter${chapterId}Content`] as ChapterContent;

    if (!content) {
      return new NextResponse(JSON.stringify({ error: `Content not found in chapter ${chapterId}` }), {
        status: 404,
      });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error(`Error loading chapter ${params.id} content:`, error);
    return new NextResponse(JSON.stringify({ error: `Chapter ${params.id} content not found` }), {
      status: 404,
    });
  }
} 