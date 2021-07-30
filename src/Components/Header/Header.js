import "./Header.css";

import { useState } from "react";
import {
  Container,
  Wrapper,
  IconContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileMenuIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "./logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ color: "white", size: "1.8em" }}>
            <IconContainer showMobileMenu={showMobileMenu}>
              <Link to="/">
                <img className="logo" src={logo} alt="logo" height="80px"></img>
              </Link>
            </IconContainer>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu showMobileMenu={showMobileMenu}>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>
                  <Link className="navLink" to="/shop">
                    SHOP
                  </Link>
                </MenuItemLink>
              </MenuItem>

              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>
                  <Link className="navLink" to="/about">
                    ABOUT
                  </Link>
                </MenuItemLink>
              </MenuItem>

              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>
                  <Link className="navLink" to="/contact">
                    CONTACT
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <CartWidget />
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

//function Header() {
//return (
//   <nav className="navbar nav">
//   <Link to="/">
// <img className="logo" src={logo} alt="logo" height="80px"></img>
// </Link>
//<div className="links">
//<ul>
//<Link to="/shop" className="nav__item">
//SHOP
//</Link>
//<Link to="/about" className="nav__item">
// ABOUT
//</Link>
//<Link to="/contact" className="nav__item">
// CONTACT
//</Link>
// </ul>
// </div>
//<CartWidget />
//</nav>
//);//
//}

//export default Header;
