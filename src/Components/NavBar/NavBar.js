import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaBars } from "react-icons/fa";
import {
  NavContainer,
  NavLogoContainer,
  NavLogo,
  NavLogoHeader,
  NavBarMenuButton,
} from "../Styles/NavBar.styled";
import NavBarMenu from "./NavbarMenu";
const NavBar = () => {
  const { navToggle, setNavToggle } = useContext(GlobalContext);
  const showNavBar = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <NavContainer>
        <NavLogoContainer>
          <NavLogo />
          <NavLogoHeader>Lior Levi Guiter Mentor</NavLogoHeader>
        </NavLogoContainer>
        <NavBarMenu
          setNavToggle={setNavToggle}
          navToggle={navToggle}
          showNavBar={showNavBar}
        />
        <NavBarMenuButton onClick={showNavBar}>
          <FaBars style={{ color: "black" }} />
        </NavBarMenuButton>
      </NavContainer>
    </>
  );
};

export default NavBar;
