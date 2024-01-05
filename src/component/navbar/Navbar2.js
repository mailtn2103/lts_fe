import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
const FeaturesNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>

    <Navbar className="mNav mt-2" expand="md">
      <Nav className="mx-auto">
        <NavItem>
          <NavLink to="/"
                  tag={Link}>HOME</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            FEATURES
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/features"
                  tag={Link}>Layouts</NavLink>
              
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Sidebar</NavLink>
              
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Search Page</NavLink>
              
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#" itemprop="url">
                Author Page
              </NavLink>
              
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            PAGE
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/page"
                  tag={Link}>About Page - 1</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">About Page - 2</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Search Page</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#" itemprop="url">
                Author Page
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            SHOP
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/shop"
                  tag={Link}>Shop Demo</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Cart</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Checkout</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#" itemprop="url">
               My Account
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavbarBrand href="/" className=" m-auto d-flex justify-content-center">
          <img
            src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/logo-magazine.png"
            alt="Logo"
            width={"45%"}
          />
        </NavbarBrand>
        <style>
          {`
                .navbar-with-shadow {
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .social-wrapper {
                    padding-left: 13px;
                    order: 3;
                    flex: 0 auto;
                    margin: auto 0;
                }
                .social-icons {
                    font-size: 1.3rem;
                    margin: 0;
                    text-align: center;
                    
                }
                .social-icons a {
                    color: black;
                    display: inline-block;
                    padding: 0 12px;
                    line-height: 28px;
                }
                .search-wrapper {
                    order: 2;
                    padding-left: 16px;
                }
                .search-min {
                    
                    padding-top: 10px;
                }
                .search-full-search-icon {
                    cursor: pointer;
                    transition: all 250ms ease-in-out;
                }
                .search-block-text {
                    font-size: 1rem;
                    font-weight: 500;
                    padding-left: 0px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .e-book-wrapper {
                    order: 5;
                    padding-left: 20px;
                    flex: 0 auto;
                    margin: auto 0;
                }
                .letter-spacing-w {
                    letter-spacing: 0.08rem;
                }
                .btn-border {
                    box-shadow: inset 0 0 0 1px;
                    color: #827055;
                }
                .nav-link{
                    color: #000;
                    font-weight: 400;
                    letter-spacing: 1px;

                }
                }
                .btn-e-book {
                    cursor: pointer;
                    border-radius: black;
                    font-weight: 500;
                    padding: 14px 20px;
                    line-height: 1;

                }
                .cart-wrapper {
                    padding-top: 4px;
                    padding-right: 8px;
                    position: relative;
                    order: 4;
                    padding-left: 18px;
                    flex: 0 auto;
                    margin: auto 0;
                }


                `}
        </style>
        <div className="right-wrapper d-flex justify-content-end ">
          <div className="cart-wrapper hide-xs">
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </div>
          <div className="search-wrapper hide-xs">
            <div className="search-block hide-xs search-min">
              <span className="search-full-search-icon">
                <span className="search-block-text">
                    <i className="fa fa-search" aria-hidden="true"/>&nbsp;
                    Search</span>
              </span>
            </div>
          </div>
          <div className="e-book-wrapper hide-xs">
            <Button
              outline
              className=" cta-popup btn-e-book btn-border text-uppercase letter-spacing-w"
            >
              e-book
            </Button>
          </div>
        </div>
      </Nav>
    </Navbar>
    <hr/>
    
    </>
  );
};

export default FeaturesNavbar;
