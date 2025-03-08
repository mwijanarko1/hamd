import { cache } from 'react';

export interface BlogPost {
  title: string;
  description: string;
  content: string;
  category: string;
  publishedAt: Date;
  slug: string;
  icon: string;
}

interface RawBlogPost extends Omit<BlogPost, 'publishedAt'> {
  publishedAt: string;
}

// Cache the blog posts loading to avoid multiple API calls
export const getBlogPosts = cache(async () => {
  // Use absolute URL with the current origin
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
    : process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000'
      : 'http://localhost:3000'; // Default to localhost if no URL is available
      
  try {
    const response = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const posts = await response.json() as RawBlogPost[];
    
    // Parse dates but keep icon as string
    return posts.map((post) => ({
      ...post,
      publishedAt: new Date(post.publishedAt)
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty array as fallback
    return [];
  }
}); 