"use client";

import { useContext, useState } from 'react';
import { AuthContext } from '@/lib/contexts/AuthContext';

export default function EmailVerification() {
  const { user, isEmailVerified, sendVerificationEmail } = useContext(AuthContext);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!user || isEmailVerified) return null;

  const handleSendVerification = async () => {
    if (sending) return;
    
    try {
      setSending(true);
      setError(null);
      await sendVerificationEmail();
      setSuccess(true);
    } catch (err) {
      setError('Failed to send verification email. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-lg bg-yellow-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Email Verification Required
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Please verify your email address to access all features.
              {!success && !sending && (
                <button
                  onClick={handleSendVerification}
                  className="ml-2 text-yellow-800 underline hover:text-yellow-900"
                >
                  Send verification email
                </button>
              )}
              {sending && (
                <span className="ml-2">Sending verification email...</span>
              )}
              {success && (
                <span className="ml-2 text-green-600">
                  Verification email sent! Please check your inbox.
                </span>
              )}
              {error && (
                <span className="ml-2 text-red-600">{error}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 