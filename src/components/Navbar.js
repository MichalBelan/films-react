
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={({isActive})=> isActive ? "activeLink link": "nonactiveLink link"}>Domov</NavLink>
        <br />
        <NavLink to="/movies" className={({isActive})=> isActive ? "activeLink link": "nonactiveLink link"}>Filmy</NavLink>
        <br />
        <NavLink to="/serials"  className={({isActive})=> isActive ? "activeLink link": "nonactiveLink link"}>Serialy</NavLink>
        <br />
      </nav>

    </header>
  );
};

export default Navbar;
