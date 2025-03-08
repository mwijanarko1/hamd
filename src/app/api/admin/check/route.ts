import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

const ADMIN_ID = 'hPdo7OkDnQXteFd6YvMp0kQSxlN2';

export async function GET() {
  // During build time, return a mock response
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    return NextResponse.json({ 
      adminExists: false,
      adminData: null,
      message: 'Build time - admin check skipped'
    });
  }

  try {
    // Check if the admin document exists
    const adminDoc = await getDoc(doc(db, 'admins', ADMIN_ID));
    
    return NextResponse.json({ 
      adminExists: adminDoc.exists(),
      adminData: adminDoc.data(),
      message: adminDoc.exists() 
        ? 'Admin document found' 
        : 'Admin document not found - please run /api/admin/setup first'
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    
    // If Firebase is not initialized (missing credentials)
    if (error instanceof FirebaseError && error.code === 'auth/invalid-api-key') {
      return NextResponse.json({ 
        adminExists: false,
        adminData: null,
        message: 'Firebase credentials not configured'
      }, { status: 503 });
    }

    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
} 