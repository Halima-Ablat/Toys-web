import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
function Navbar() {
  return (
    <nav className="bg-transparent navbar navbar-expand-lg navbar-light bg-light">
      <div className=" container-fluid">
        <Link className="text-white toys navbar-brand" to="/">
          Adeena's toys
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <Link
                className="text-white toys nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white toys nav-link" to="toys">
                Toys
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white toys nav-link" to="/not-found">
                Store
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
