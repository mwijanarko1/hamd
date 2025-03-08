import { ChapterContent } from '@/app/dashboard/chapter/types';

export async function getChapterContent(chapterId: number): Promise<ChapterContent> {
  try {
    const response = await fetch(`/api/chapters/${chapterId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `Failed to load chapter ${chapterId}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error loading chapter ${chapterId} content:`, error);
    throw new Error(`Chapter ${chapterId} content not found`);
  }
} 