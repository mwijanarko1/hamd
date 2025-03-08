import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'About Us', href: '/about' },
      { name: 'Courses', href: '/courses' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
      {
        name: 'YouTube',
        href: '#',
        icon: Youtube,
      },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-600 hover:text-gold-600 transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gold-600 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" />
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          <span className="font-bold text-gold-600">Hamd</span> - Your Journey to Arabic Mastery. © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
} 