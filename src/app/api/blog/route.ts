import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BookText, Lightbulb } from 'lucide-react';

// Function to get icon based on category
function getIconForCategory(category: string): string {
  const iconMap: { [key: string]: string } = {
    'Learning Tips': 'Lightbulb',
    'Study Methods': 'BookText',
    // Add more category-icon mappings as needed
  };
  return iconMap[category] || 'BookText';
}

// Function to parse markdown content
function parseMarkdownContent(content: string): {
  title: string;
  description: string;
  content: string;
  category: string;
} {
  const lines = content.split('\n');
  
  // Get title (first line, remove markdown formatting)
  const title = lines[0].replace(/^#*\s*\*?\*?|[\*\n]/g, '').trim();
  
  // Get description (second paragraph)
  const description = lines[1].trim();
  
  // Get category from the first h2 or h3 section
  let category = 'Learning Tips'; // default category
  const categoryMatch = content.match(/##?\s+\*?\*?([^#\n]+)/);
  if (categoryMatch) {
    category = categoryMatch[1].replace(/\*/g, '').trim();
  }
  
  // Remove title and description from content
  const mainContent = lines.slice(2).join('\n').trim();
  
  return {
    title,
    description,
    content: mainContent,
    category
  };
}

export async function GET() {
  try {
    const blogsDirectory = path.join(process.cwd(), 'paths', 'blogs');
    const fileNames = fs.readdirSync(blogsDirectory);
    
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(blogsDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        const slug = fileName.replace(/\.md$/, '');
        const { title, description, content, category } = parseMarkdownContent(fileContent);
        
        return {
          title,
          description,
          content,
          category,
          publishedAt: new Date(), // You might want to extract this from the file metadata
          slug,
          icon: getIconForCategory(category)
        };
      });
    
    const sortedPosts = posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return NextResponse.json({ error: 'Failed to load blog posts' }, { status: 500 });
  }
} 