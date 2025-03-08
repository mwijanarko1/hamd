import { ChapterContent } from '@/app/dashboard/chapter/types';

async function loadChapterModule(chapterId: number) {
  return import(`@/app/dashboard/chapter/content/chapter${chapterId}`);
}

export async function getChapterContent(chapterId: number): Promise<ChapterContent> {
  try {
    const chapterModule = await loadChapterModule(chapterId);
    return chapterModule[`chapter${chapterId}Content`];
  } catch (error) {
    console.error(`Error loading chapter ${chapterId} content:`, error);
    throw new Error(`Chapter ${chapterId} content not found`);
  }
} 