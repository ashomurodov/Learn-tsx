import { IEntity } from "types";

interface NavbarProps {
  onNavigate: (pathname: string) => void;
  currentPathname: string;
  user: IEntity.User | null;
  logout: () => void;
}

const paths = [
  { pathname: "/login", title: "Login" },
  { pathname: "/register", title: "Register" },
];

const Navbar = ({ onNavigate, currentPathname, user, logout }: NavbarProps) => {
  const handleNavigate = (pathname: string, pathtitle?: string) => {
    window.history.pushState({}, "", pathname);
    onNavigate(pathname);

    if (pathtitle === "LogOut") {
      logout();
    }
  };

  const loginedPath = [
    { pathname: "/", title: user?.name },
    { pathname: "/login", title: "LogOut" },
  ];

  const currentPath = user?.name ? loginedPath : paths;

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary mb-3">
      <div className="container justify-content-start">
        <span className="navbar-brand" onClick={() => handleNavigate("/")}>
          Movies App
        </span>
        <ul className="navbar-nav d-flex">
          {currentPath.map((path) => (
            <li key={path.pathname} className="nav-item">
              <span
                className={`nav-link ${path.pathname === currentPathname ? "active" : ""}`}
                onClick={() => handleNavigate(path.pathname, path.title)}
              >
                {path.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
