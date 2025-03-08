'use client';

import DashboardNav from '../components/DashboardNav';
import { LevelsProvider } from './journey/page';
import { MasterKeyProvider } from '@/lib/contexts/MasterKeyContext';
import EmailVerification from '../components/EmailVerification';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MasterKeyProvider>
      <LevelsProvider>
        <div className="min-h-screen bg-gray-50">
          <DashboardNav />
          <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EmailVerification />
              {children}
            </div>
          </main>
        </div>
      </LevelsProvider>
    </MasterKeyProvider>
  );
} 