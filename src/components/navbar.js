let Navbar = () => {
  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">Home</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">/contact</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="/about">Test 1</a>
            </li>
            <li className="tab">
              <a href="/about" className="active">
                Test 2
              </a>
            </li>
            <li className="tab disabled">
              <a href="/about">Disabled Tab</a>
            </li>
            <li className="tab">
              <a href="/about">Test 4</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/about">Sass</a>
        </li>
        <li>
          <a href="/about">Components</a>
        </li>
        <li>
          <a href="/about">JavaScript</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
