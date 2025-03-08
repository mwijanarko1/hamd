'use client';

import { LevelsProvider } from '@/lib/contexts/LevelsContext';
import { MasterKeyProvider } from '@/lib/contexts/MasterKeyContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MasterKeyProvider>
      <LevelsProvider>
        {children}
      </LevelsProvider>
    </MasterKeyProvider>
  );
} 