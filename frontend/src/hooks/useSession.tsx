import { SessionContext, SessionContextType } from "src/providers/sessionProvider";
import { useContext } from "react";
import { storage } from "src/api/storage";

/**
 * Using for get data of authenticated user / access token / update token
 */
export function useSession() {
  const { session, setSession, removeSession } = useContext(SessionContext) as SessionContextType;
  const isAuthenticated = () => Boolean(session?.access);
  return { session, setSession, removeSession, isAuthenticated };
}
