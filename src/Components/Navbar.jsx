import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="Web Masters Logo" />
        <div className="logo-text">
          <h1>WEB MASTERS</h1>
          <p>Proper Education With Success</p>
        </div>
      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <nav className="nav-links">
        <a href="#courses">Courses</a>
        <a href="#idcard">Student ID Card</a>
        <a href="#contact">Contact</a>
        <a href="/login" className="login-btn">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
