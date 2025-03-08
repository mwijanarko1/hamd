// Check if we're in build mode
const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build';

// Only import Firebase if not in build mode
import { NextResponse } from 'next/server';
import { FirebaseError } from 'firebase/app';

// Conditionally import Firebase modules
let db: any;
let doc: any;
let getDoc: any;

if (!isBuildTime) {
  const firebaseImports = require('@/lib/firebase/firebase');
  const firestoreImports = require('firebase/firestore');
  db = firebaseImports.db;
  doc = firestoreImports.doc;
  getDoc = firestoreImports.getDoc;
}

const ADMIN_ID = 'hPdo7OkDnQXteFd6YvMp0kQSxlN2';

export async function GET() {
  // During build time, return a mock response
  if (isBuildTime) {
    console.log('Build time detected - skipping Firebase initialization');
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