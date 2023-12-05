import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "src/hooks/useSession";

export function Logout() {
  const { removeSession, isAuthenticated } = useSession();

  useEffect(() => {
    (async () => await removeSession())();
  }, []);

  return <>{!isAuthenticated() && <Navigate to="/" replace={true} />}</>;
}

// const logoutUser = async () => {
//   try {
//     store.setRequestLoading(true);
//     await authApi.get<GenericResponse>("/auth/logout");
//     store.setRequestLoading(false);
//     toast.success("Successfully logged out", {
//       position: "top-right",
//     });
//     document.location.href = "/login";
//   } catch (error: any) {
//     store.setRequestLoading(false);
//     store.setAuthUser(null);
//     document.location.href = "/login";
//   }
// };
