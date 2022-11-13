import styled from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    background-color: red;
    width: 550px;
    height: 55px;
    border-radius: 2px;

    & p {
      position: absolute;
      width: 109px;
      height: 16px;
      left: 235px;
      top: 5px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14.4608px;

      letter-spacing: -0.075em;

      color: #ffffff;
    }
    & i {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 213px;
      top: 20px;
      color: #ffffff;
    }
  `;

  return (
    <Nav>
      <i class="fa-solid fa-globe"></i>
      <p>my travel journal</p>
    </Nav>
  );
};

export default Navbar;
