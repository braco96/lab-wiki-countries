import { Link } from "react-router-dom";

// NavBar component renders the top navigation bar with a link to the home page.
function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        {/* Clicking the brand takes the user back to the home page */}
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
