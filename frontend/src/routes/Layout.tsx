import { Link, Outlet } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Navbar } from "src/components/Navigation";

import { useSession } from "src/hooks/useSession";

export const Layout = () => {
  const { isAuthenticated } = useSession();

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-1 justify-center bg-base-200">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
