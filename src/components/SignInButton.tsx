'use client';
import React from 'react';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

interface SignInButtonProps {
  text: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text }) => {
  return (
    <Button
      onClick={() => {
        signIn('google').catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
