import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../core/context/AuthContext';
import Button from '../../components/ui/Button';

export default function AuthPage(){
  const [loading, setLoading]= useState(false);
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(()=>{
      login('mock-jwt-token');
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Access Laboratory</h2>
        <p className="text-zinc-500">Provide credentials to enter the environment.</p>
      </div>

      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring=zinc-700"
        required
        />
        <input
        type="password"
        placeholder="Security Key"
        className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring=zinc-700"
        required
        />
        <Button type="submit" isLoading={loading} className="w-full">
          Initialize Session
        </Button>
      </form>
    </div>
  )
}