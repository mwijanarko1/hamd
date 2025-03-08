import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const ADMIN_ID = 'hPdo7OkDnQXteFd6YvMp0kQSxlN2';

export async function GET() {
  try {
    // Create admin document with the user's ID as the document ID
    await setDoc(doc(db, 'admins', ADMIN_ID), {
      userId: ADMIN_ID,
      createdAt: new Date(),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user successfully created' 
    });
  } catch (error) {
    console.error('Error setting up admin:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create admin user' 
    }, { status: 500 });
  }
} 