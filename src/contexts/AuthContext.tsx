import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { pb } from '../lib/pb';
import type { AuthModel } from 'pocketbase';

interface AuthContextType {
  user: AuthModel | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  loading: true,
  logout: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthModel | null>(pb.authStore.model);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load
    setUser(pb.authStore.model);
    setLoading(false);

    // Subscribe
    const unsubscribe = pb.authStore.onChange((_token, model) => {
      setUser(model);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logout = () => {
    pb.authStore.clear();
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
