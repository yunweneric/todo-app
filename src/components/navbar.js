import {Link, NavLink} from 'react-router-dom'
let Navbar = () => {
  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <NavLink to ='/' className="brand-logo">
            Logo
          </NavLink>
          <NavLink to ="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">Home</i>
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to ="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to ="/Contact">contact</NavLink>
            </li>
            <li>
              <Link to="collapsible.html">JavaScript</Link>
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
