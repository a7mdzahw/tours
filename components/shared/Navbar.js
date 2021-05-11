import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md shadow-md">
      <div className="container  flex justify-between items-center">
        <div className="navbar-brand">
          <Link href="/">
            <a>
              <span>
                <img src="/assets/img/logo.jpg" alt="logo" className="inline w-9 h-9" />
              </span>
              <p className="text-indigo-700 inline">Tours</p>
            </a>
          </Link>
        </div>
        <button
          className="md:hidden"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-3xl text-indigo-700"></i>
        </button>
        <div className="collapse navbar-collapse pl-3 md:p-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/tours">
                <a className="nav-link">Tours</a>
              </Link>
            </li>
            <div className="dropdown nav-item">
              <button
                className="py-2 dropdown-toggle nav-link"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person"></i> Account
              </button>
              <ul className="dropdown-menu  md:text-center " aria-labelledby="dropdownMenuButton1">
                <li className="nav-item">
                  <Link href="/login">
                    <a className="dropdown-item">Log in</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signup">
                    <a className="dropdown-item">Sign up</a>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
