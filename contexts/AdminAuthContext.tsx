import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '@/lib/supabase/client';
import { isCurrentUserAdmin, signInAdmin, signOut } from '@/lib/supabase/auth';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<{ ok: true } | { ok: false; error: string }>;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const isAuthenticated = Boolean(user);

  const refreshAdminFlag = async () => {
    const admin = await isCurrentUserAdmin();
    setIsAdmin(admin);
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!isSupabaseConfigured) {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (!mounted) return;

      const nextUser = data.session?.user ?? null;
      setUser(nextUser);

      if (nextUser) {
        await refreshAdminFlag();
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    };

    void init();

    if (!isSupabaseConfigured) {
      return () => {
        mounted = false;
      };
    }

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const nextUser = session?.user ?? null;
      setUser(nextUser);
      if (nextUser) {
        await refreshAdminFlag();
      } else {
        setIsAdmin(false);
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const login: AdminAuthContextType['login'] = async (email, password) => {
    setLoading(true);
    const result = await signInAdmin(email, password);
    if (!result.ok) {
      setUser(null);
      setIsAdmin(false);
      setLoading(false);
      return { ok: false, error: result.error };
    }

    setUser(result.user);
    setIsAdmin(true);
    setLoading(false);
    return { ok: true };
  };

  const logout: AdminAuthContextType['logout'] = async () => {
    setLoading(true);
    await signOut();
    setUser(null);
    setIsAdmin(false);
    setLoading(false);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      isAdmin,
      loading,
      user,
      login,
      logout,
    }),
    [isAuthenticated, isAdmin, loading, user]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

