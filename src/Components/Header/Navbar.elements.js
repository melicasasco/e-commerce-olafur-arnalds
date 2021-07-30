import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  background-color: #001326;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const IconContainer = styled.div`
  font-family: "Montserrat";
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  height: 50%;
  display: flex;
  @media screen and (max-width: 960px) {
    position: absolute;
    top: 70px;
    right: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "100%")};
    width: 50%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    background-color: #001326;
    transition: all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
`;

export const MenuItemLink = styled.a`
  padding: 0.5rem 1.7rem;
  font-family: "Montserrat";
  font-size: 1rem;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-right: 0.5rem;
    svg {
      animation: ${({ showMobileMenu }) =>
        showMobileMenu ? "rotationMoveInitial" : "rotationMoveReverse"};
      animation-duration: 0.3s;
    }
    @keyframes rotationMoveInitial {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    @keyframes rotationMoveReverse {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
