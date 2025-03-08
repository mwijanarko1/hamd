import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import BlogHero from '../components/BlogHero';
import { getBlogPosts } from '../lib/blogData';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <BlogHero />
        <BlogContent initialPosts={posts} />
      </main>

      <Footer />
    </div>
  );
} 