import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "src/hooks/useSession";

interface ProtectedUniversalProps {
  children?: ReactNode;
  redirectPath?: string;
}

export function ProtectedUniversal({ children, redirectPath = "/login/" }: ProtectedUniversalProps) {
  const { isAuthenticated } = useSession();

  if (!isAuthenticated()) return <Navigate to={redirectPath} />;
  return children ? <>{children}</> : <Outlet />;
}
