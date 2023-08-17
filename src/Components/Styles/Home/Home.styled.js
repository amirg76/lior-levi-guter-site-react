import styled from "styled-components";
import { tablet, mobile } from "../../../responsive";

export const HomeMainHeader = styled.div`
  /* font-family: Courgette; */
  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: -9999;
  /* background: url("./assets/img/homeback.png") no-repeat center center/cover; */
  /* background-image: url("./assets/img/homeback.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */

  ${tablet({
    // width: "35vw",
    // textAlign: "center",
  })};
  ${mobile({
    // width: "55vw",
    // fontSize: "1rem",
  })};
`;

export const HomeMainHeaderImg = styled.img`
  width: 100%;
  height: 90%;

  ${tablet({
    // width: "35vw",
    // textAlign: "center",
  })};
  ${mobile({
    // width: "55vw",
    // fontSize: "1rem",
  })};
`;
