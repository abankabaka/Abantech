'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "32745b4f-38fe-428f-91ac-82f34dd3be2b",
          subject: "New Newsletter Subscriber",
          email: email,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        className="w-full bg-white/5 border border-white/10 rounded-none pl-4 pr-24 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors font-body text-sm"
        disabled={status === 'loading' || status === 'success'}
      />
      
      <button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="absolute right-0 top-0 h-full px-4 text-primary font-code text-xs uppercase tracking-widest hover:bg-white/5 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : status === 'success' ? 'Joined' : 'Join'}
      </button>

      {status === 'success' && (
        <p className="absolute -bottom-6 left-0 text-xs text-primary font-code">Successfully subscribed.</p>
      )}
    </form>
  );
}
