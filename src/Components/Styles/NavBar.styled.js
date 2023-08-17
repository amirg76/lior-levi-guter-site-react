import styled from "styled-components";
import { tablet, mobile } from "../../responsive";
export const NavContainer = styled.nav`
  width: 100vw;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1;
  ${tablet({
    // transform: ({ open }) => (open ? "none" : "translateY(100vh)"),
    // height: ({ open }) => (open ? "11vh" : "100vh"),
    // height: ({ open }) => (open ? "11vh" : "100vh"),
    // backgroundColor: "purple",
  })};
  ${mobile({
    // backgroundColor: "blue",
  })};
`;

export const NavLogoContainer = styled.div`
  width: 30vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${tablet({
    width: "50vw",
    // backgroundColor: "lightblue",
  })};
  ${mobile({
    width: "70vw",
  })};
`;
export const NavLogo = styled.img`
  width: 5vw;
  height: 8vh;
  background-image: url("/assets/img/logo1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${tablet({
    width: "15vw",
  })};
  ${mobile({
    width: "20vw",
  })};
`;

export const NavLogoHeader = styled.h3`
  font-family: Courgette;
  width: 20vw;
  font-weight: 500;
  ${tablet({
    width: "35vw",
    textAlign: "center",
  })};
  ${mobile({
    width: "55vw",
    fontSize: "1rem",
  })};
`;
export const NavBarMenuUl = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    padding: 5vw 2vw;
    list-style: none;
    ${tablet({
      padding: "5vw 0vw",
      marginTop: "5vh",
    })};
  }
  li a {
    text-decoration: none;
    color: #1d1d1d;
    position: relative;
    font-size: 1vw;
    ${tablet({
      fontSize: "3vh",
      color: "white",
    })};
  }
  li a::after {
    content: "";
    position: absolute;
    display: block;
    width: 0%;
    height: 5%;
    top: -10px;
    background-color: black;
    transition: ease-in-out 0.25s;
  }
  li a::before {
    content: "";
    position: absolute;
    display: block;
    width: 0%;
    height: 5%;
    right: 0;
    bottom: -10px;
    background-color: black;
    transition: ease-in-out 0.25s;
  }
  li a:hover::after {
    width: 100%;
  }
  li a:hover::before {
    width: 100%;
  }
  ${tablet({
    backgroundColor: "hsl(220 12% 20%)",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "1s",

    // transform: "translateY(-100vh)",
    transform: ({ open }) => (open ? "none" : "translateY(-100vh)"),
  })};
  /* ${mobile({
    width: "25%",
  })}; */
`;
export const NavBarMenuButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  font-size: 4vh;
  padding-top: 1vh;
  ${tablet({
    visibility: "visible",
    opacity: 1,
  })};
`;

export const NavBarMenuCloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  font-size: 4vh;
  ${tablet({
    position: "absolute",
    top: "4vh",
    right: "10vw",
    visibility: "visible",
    opacity: 1,
  })};
`;
