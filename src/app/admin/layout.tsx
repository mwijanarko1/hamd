'use client';

import { redirect } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setCheckingAdmin(false);
        setError('No user logged in');
        return;
      }

      try {
        console.log('Checking admin status for user:', user.uid);
        const adminDoc = await getDoc(doc(db, 'admins', user.uid));
        console.log('Admin doc exists:', adminDoc.exists());
        setIsAdmin(adminDoc.exists());
        if (!adminDoc.exists()) {
          setError(`User ${user.uid} is not an admin. Please visit /api/admin/setup first.`);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setError('Error checking admin status: ' + (error as Error).message);
      }
      setCheckingAdmin(false);
    };

    checkAdminStatus();
  }, [user]);
  
  if (loading || checkingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    redirect('/auth/signin');
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Access Denied</h2>
          <p className="text-gray-600 mb-4">
            You don't have admin privileges.
          </p>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          <div className="text-sm text-gray-500">
            <p className="mb-2">Debug Information:</p>
            <ul className="list-disc pl-5">
              <li>User ID: {user.uid}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">Logged in as {user.email}</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 