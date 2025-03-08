import { notFound } from 'next/navigation';
import { getBlogPosts } from '../../lib/blogData';
import { formatDate } from '../../lib/blogUtils';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

// Function to convert markdown-style formatting to HTML classes
function formatMarkdownText(text: string): string {
  // Convert headers (##)
  text = text.replace(/##\s+\*?\*?([^#\n]+)\*?\*?/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>');
  
  // Convert bold text (**)
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
  
  // Convert bullet points (*)
  text = text.replace(/^\s*\*\s+([^\n]+)/gm, '<li class="ml-6 text-gray-700 mb-2">$1</li>');
  
  // Wrap consecutive list items in ul
  text = text.replace(/((?:<li[^>]*>[^<]+<\/li>\s*)+)/g, '<ul class="list-disc my-4">$1</ul>');
  
  // Convert paragraphs (empty lines between text)
  text = text.replace(/(?:^|\n\n)([^#\n][^\n]+)(?:\n\n|$)/g, '<p class="text-gray-700 mb-6">$1</p>');

  return text;
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

// Generate metadata for each blog post
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      authors: ['Arabic Learning Academy'],
    },
  };
}

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Format the content with markdown styling
  const formattedContent = formatMarkdownText(post.content);

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.content.split(/\s+/).length} words</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gold mx-auto">
              {/* Category Badge */}
              <div className="flex justify-center mb-8">
                <span className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Description */}
              <div className="text-xl text-gray-700 mb-12 text-center">
                {post.description}
              </div>

              {/* Main Content */}
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: formattedContent }}
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
} 