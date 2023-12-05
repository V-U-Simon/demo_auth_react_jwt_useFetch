import React, { createContext, useMemo, useState, ReactNode, useEffect } from "react";
import { storage } from "src/api/storage";
import { Session } from "src/api/types";

// Определение типа для контекста
export interface SessionContextType {
  session: Session;
  setSession: (params: Session) => Promise<void>;
  removeSession: Promise<void>;
  // login: (params: LoginParams) => Promise<void>;
  // logout: () => Promise<void>;
}

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [session, _setSession] = useState<Session>({} as Session);

  async function loadInitialSession() {
    try {
      _setSession(await storage.getSession());
    } catch (errors) {
      console.error("Error loading user data:", errors);
    }
  }

  // set auth state in initial mounting components
  useEffect(() => {
    loadInitialSession();
  }, []);

  async function setSession(newSession: Session) {
    await storage.setSession(newSession);
    _setSession(newSession);
  }

  async function removeSession() {
    await storage.removeSession();
    setSession({} as Session);
  }

  const memoValues = useMemo(() => ({ session, setSession, removeSession }), [session]);

  return <SessionContext.Provider value={memoValues}>{children}</SessionContext.Provider>;
};
