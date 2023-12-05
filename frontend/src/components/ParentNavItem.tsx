type NavParentItemProps = {
  name: string;
  children: React.ReactNode;
};

export function ParentNavItem({ name, children }: NavParentItemProps) {
  return (
    <li>
      <details>
        <summary>{name}</summary>
        <ul className="p-2">{children}</ul>
      </details>
    </li>
  );
}
