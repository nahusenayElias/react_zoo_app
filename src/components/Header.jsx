import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1>Zoo App</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/animals">
                  Animals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/birds">
                  Birds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/insects">
                  Insects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/fishes">
                  Fishes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ></input>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
{/* <Link to="/">
  <h1>Zoo App</h1>
</Link>
<nav>
  <ul>
    <li>
      <NavLink to="/home">Home</NavLink>
    </li>
    <li>
      <NavLink to="/animals">Animals</NavLink>
    </li>
    <li>
      <NavLink to="/birds">Birds</NavLink>
    </li>
    <li>
      <NavLink to="/insects">Insects</NavLink>
    </li>
    <li>
      <NavLink to="/fishes">Fishes</NavLink>
    </li>
    <li>
      <NavLink to="/">About</NavLink>
    </li>
  </ul>
</nav> */}

export default Header;
