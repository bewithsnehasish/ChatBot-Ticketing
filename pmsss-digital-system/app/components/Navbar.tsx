import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          PMSSS
        </Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.name}</span>
              <Link href={`/${user.role}/dashboard`} className="mr-4">
                Dashboard
              </Link>
              <button onClick={logout} className="bg-red-500 px-2 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-4">
                Login
              </Link>
              <Link href="/register" className="mr-4">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;