import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  name: string;
  className?: string;
};

export function NavItem({ to, name, className }: NavItemProps) {
  return (
    <li>
      <NavLink className={className} to={to}>
        {name}
      </NavLink>
    </li>
  );
}
