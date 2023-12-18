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

const HomeNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>

    <Navbar className="mNav mt-2 small col-lg-12 col-sm-12" expand="md">
      <Nav>
        <NavItem>
          <NavLink href="#">HOME</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            FEATURES
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink href="#">Layouts</NavLink>
              {/* <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="#">Wide (default)</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">Boxed Layout</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">Framed Layout</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">Bordered Layout</NavLink>
                  </DropdownItem>
                </DropdownMenu> */}
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Sidebar</NavLink>
              {/* <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="#">Left Sidebar</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">No Sidebar</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">Right Sidebar</NavLink>
                  </DropdownItem>
                </DropdownMenu> */}
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Search Page</NavLink>
              {/* <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="#">Search – Unique</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">Search – Default</NavLink>
                  </DropdownItem>
                </DropdownMenu> */}
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#" itemprop="url">
                Author Page
              </NavLink>
              {/* <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="#" itemprop="url">
                      Author – Bold
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#" itemprop="url">
                      Author – Aligned
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#" itemprop="url">
                      Author – Floating
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu> */}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            PAGE
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink href="#">Layouts</NavLink>
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
            SHOP
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink href="#">Layouts</NavLink>
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

        <NavbarBrand href="/" className="d-flex justify-content-center">
          <img
            src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/logo.png"
            alt="Logo"
            width={"23%"}
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
                .subscribe-wrapper {
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
                    color: #312e81;
                }
                .nav-link{
                    color: #000;
                    font-weight: 400;
                    letter-spacing: 1px;

                }
                }
                .btn-subscribe {
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
          <div className="social-wrapper hide-xs">
            <div className="social-icons">
              <a
                href="https://pinterest.com/"
                title="Inertia Theme on Pinterest"
                itemprop="url"
                target="_blank"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="https://instagram.com/"
                title="Inertia Theme on Instagram"
                itemprop="url"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/"
                title="Inertia Theme on Twitter"
                itemprop="url"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
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
          <div className="subscribe-wrapper hide-xs">
            <Button
              outline
              className=" cta-popup btn-subscribe btn-border letter-spacing-w"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Nav>
    </Navbar>
    <hr/>
    <Navbar expand="md" className="mNav navbar-with-shadow small">
      <Nav className="mx-auto">
        <NavItem >
          <NavLink href="#" >TRENDING</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">LIFESTYLE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">BEAUTY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">DECOR</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">NUTRITION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">TRAVEL</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">WELLBEING</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">WORKOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">DIY</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    </>
  );
};

export default HomeNavbar;
