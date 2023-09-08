function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav d-flex justify-between align-center">
            <div className="nav_logo d-flex justify-between align-center">
              <img src="./assets/icon/Vector.svg" alt="" />
              <span className="logo-text logo-text-color">Pegasus</span>
            </div>
            <ul className="nav_list d-flex align-center">
              <li className="nav_item">
                <a href="/" className="nav_link">
                  Home
                </a>
              </li>
              <li className="nav_item">
                <a href="/" className="nav_link">
                  Services
                </a>
              </li>
              <li className="nav_item">
                <a href="/" className="nav_link">
                  About Us
                </a>
              </li>
              <li className="nav_item">
                <a href="/" className="nav_link">
                  Login
                </a>
              </li>
              <li className="nav_item ">
                <a href="/" className="nav_link btn btn-color">
                  Create An Account
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
