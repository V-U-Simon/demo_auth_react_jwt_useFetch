import { NavItem } from "./NavItem";
import { useSession } from "src/hooks/useSession";

export function Navbar() {
  return (
    <div className="navbar justify-between bg-base-100">
      {/* drop-down */}
      <div className="navbar-start">
        <Dropdown />
        <a href="/" className="btn btn-ghost text-xl">
          JWT-Demo
        </a>
      </div>
      {/* main-menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-md menu-horizontal px-1">
          <NavItem to="/" name="Home" />
          <NavItem to="/private/" name="Private" />
        </ul>
      </div>
      {/* auth-menu */}
      <div className="navbar-end">
        <AuthMenu />
      </div>
    </div>
  );
}

function AuthMenu() {
  const { session, isAuthenticated } = useSession();
  const { user } = session;

  return (
    <>
      <div className="flex-none">
        {!isAuthenticated() && (
          <a className="btn btn-sm" href="/login">
            Login
          </a>
        )}
        {!isAuthenticated() && (
          <a className="btn btn-sm btn-primary mx-4" href="/registration">
            Registration
          </a>
        )}
      </div>

      {isAuthenticated() && (
        <ul className="menu menu-sm menu-horizontal bg-base-200 rounded-bo p-0 rounded-md ">
          <li>
            <details>
              <summary>
                {user.username}
                <div className="avatar ">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </summary>
              <ul className="p-2">
                <NavItem to="/profile" name="Profile" />
                <NavItem to="/logout" name="Logout" className="link-error" />
              </ul>
            </details>
          </li>
        </ul>
      )}
    </>
  );
}

function Dropdown() {
  return (
    <div className="dropdown">
      {/* BurgerButton */}
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* DropDownMenu */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavItem to="/" name="Home" />
      </ul>
    </div>
  );
}

{
  /* <nav>
        <Link to="/">Home</Link>
        {!isAuthenticated() && <Link to="/login">Login</Link>}
        {isAuthenticated() && <Link to="/logout">Logout</Link>}
        <Link to="/user">User</Link>
      </nav> */
}
