import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ADMIN_ID = 'hPdo7OkDnQXteFd6YvMp0kQSxlN2';

export async function GET() {
  try {
    // Check if the admin document exists
    const adminDoc = await getDoc(doc(db, 'admins', ADMIN_ID));
    
    // Get the current auth state from the server
    return NextResponse.json({ 
      adminExists: adminDoc.exists(),
      adminData: adminDoc.data(),
      message: adminDoc.exists() 
        ? 'Admin document found' 
        : 'Admin document not found - please run /api/admin/setup first'
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
} 