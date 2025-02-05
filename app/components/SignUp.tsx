'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  ConfirmationResult 
} from '@firebase/auth';
import { auth } from '@/lib/firebase/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const SignUpForm = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const confirmationResultRef = useRef<ConfirmationResult | null>(null);

  const generateRecaptcha = () => {
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response: any) => {
          // reCAPTCHA solved
        }
      });
    }
  };

  const requestOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formattedNumber = '+91' + phoneNumber;
      generateRecaptcha();
      const appVerifier = recaptchaVerifierRef.current;
      
      if (appVerifier) {
        confirmationResultRef.current = await signInWithPhoneNumber(auth, formattedNumber, appVerifier);
        setShowOTP(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (confirmationResultRef.current) {
        const result = await confirmationResultRef.current.confirm(otp);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md w-full p-8 bg-black/50 border-purple-500/20 backdrop-blur-sm">
      <div>
        <h2 className="text-center text-3xl font-bold text-white mb-2">
          Sign up with Phone
        </h2>
        <p className="text-center text-sm text-gray-400">
          We'll send you a verification code
        </p>
      </div>
      
      {!showOTP ? (
        <form onSubmit={requestOTP} className="mt-8 space-y-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1 bg-black/30 border-purple-500/20 text-white placeholder-gray-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            {loading ? 'Sending OTP...' : 'Get OTP'}
          </Button>
        </form>
      ) : (
        <form onSubmit={verifyOTP} className="mt-8 space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
              Enter OTP
            </label>
            <Input
              id="otp"
              name="otp"
              type="text"
              required
              className="mt-1 bg-black/30 border-purple-500/20 text-white placeholder-gray-500"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </Button>

          <div className="text-sm text-center">
            <button
              type="button"
              onClick={() => setShowOTP(false)}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Change phone number?
            </button>
          </div>
        </form>
      )}
      
      <div id="recaptcha-container"></div>
    </Card>
  );
};

export default SignUpForm;