import { Link } from "react-router-dom";
import { NavBarMenuUl, NavBarMenuCloseButton } from "../Styles/NavBar.styled";
import { FaTimes } from "react-icons/fa";
const NavBarMenu = ({ setNavToggle, navToggle, showNavBar }) => {
  const showLinks = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <NavBarMenuUl open={navToggle}>
        <li>
          <Link to="/contact" onClick={showLinks}>
            צרו קשר
          </Link>
        </li>
        <li>
          <Link to="/recommendation" onClick={showLinks}>
            המלצות
          </Link>
        </li>
        <li>
          <Link to="/movipic" onClick={showLinks}>
            סרטים ותמונות
          </Link>
        </li>
        <li>
          <Link to="/courses" onClick={showLinks}>
            שיעורי גיטרה
          </Link>
        </li>
        <li>
          <Link to="/" onClick={showLinks}>
            דף הבית
          </Link>
        </li>
        <NavBarMenuCloseButton onClick={showNavBar}>
          <FaTimes />
        </NavBarMenuCloseButton>
      </NavBarMenuUl>
    </>
  );
};

export default NavBarMenu;
