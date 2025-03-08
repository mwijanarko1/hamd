import Link from 'next/link';

const contentSections = [
  {
    title: 'Lessons',
    description: 'Manage curriculum and lesson content',
    href: '/admin/lessons',
    icon: '📚'
  },
  {
    title: 'Blog',
    description: 'Manage blog posts and articles',
    href: '/admin/blog',
    icon: '✍️'
  },
  {
    title: 'Extracurricular',
    description: 'Manage extracurricular activities',
    href: '/admin/extracurricular',
    icon: '🎨'
  },
  {
    title: 'About',
    description: 'Edit about page content',
    href: '/admin/about',
    icon: 'ℹ️'
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Content Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{section.icon}</span>
              <h3 className="text-xl font-semibold">{section.title}</h3>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 