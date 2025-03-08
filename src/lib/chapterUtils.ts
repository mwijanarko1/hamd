import { ChapterContent } from '@/app/dashboard/chapter/types';

export async function getChapterContent(chapterId: number): Promise<ChapterContent> {
  try {
    const module = await import(`@/app/dashboard/chapter/content/chapter${chapterId}`);
    return module[`chapter${chapterId}Content`];
  } catch (error) {
    console.error(`Error loading chapter ${chapterId} content:`, error);
    throw new Error(`Chapter ${chapterId} content not found`);
  }
} 