'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Redirect or perform any other necessary actions
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };

  return (
    <div className="text-center felx flex-col gap-4 items-center">
      <div>Please sign in to continue.</div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>
        <div className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</div>
      </button>
    </div>
  );
}
