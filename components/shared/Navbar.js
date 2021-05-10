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
          className="navbar-toggler border-0 focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list text-3xl"></span>
        </button>
        <div className="collapse navbar-collapse pl-3 md:p-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/destinations">
                <a className="nav-link">Destinations</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tours">
                <a className="nav-link">Tours</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
