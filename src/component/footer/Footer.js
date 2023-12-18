import React from "react";
import {
  Container,
  Card,
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

const Footer = () => {
  return (
    <div className="shadow" style={{ backgroundColor: "white" }}>
      <style>
        {`
               .logo-footer {
                padding-top: 12px;
                padding-bottom: 28px;
                }
                
                .logo-footer img {
                    width: auto;
                    max-height: 40px;
                    vertical-align: middle;
                }
                .text-f-wrapper p {
                    color: var(--color-500);
                    max-width: 440px;
                    font-size: 0.9rem;
                }
                .

                .full-f-wrapper {
                    flex: 0 0 100%;
                    border-top: var(--border-thin);
                    padding-top: 28px;
                }
                .credit-f-wrapper {
                    color: var(--color-700);
                    font-weight: 500;
                    font-size: 0.9rem;
                    margin: 0;
                }
               `}
      </style>
      <Container>
        <div className="row">
          <div class="left-f-wrapper col-md-6">
            <div class="logo-footer mt-5">
              {" "}
              <a
                href="https://inertiawp.com/demo/"
                itemprop="url"
                aria-label="Inertia Theme"
              >
                {" "}
                <img
                  src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/09/logo-foot.png"
                  width="500"
                  height="150"
                  title="Inertia Theme"
                  alt="Inertia Theme"
                />{" "}
              </a>
            </div>
            <div class="text-f-wrapper">
              {" "}
              <p>
                Inertia is a premium multiuse wordpress theme made for
                magazines, blogs and creators.&nbsp;
              </p>{" "}
              <p>&nbsp;</p>{" "}
              <p>
                Lightweight wordpress theme, SEO-Optimized,&nbsp; Providing
                blazing fast performance and speed. In addition to being
                accessibility-compliant theme and loaded with features with more
                that 100 options to provide maximum flexibility to users.
              </p>
            </div>
            <Nav className="mt-3 mb-5" style={{ fontWeight: "600" }}>
              <NavItem>
                <NavLink href="#">ABOUT US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SERVICES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SHOP</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CONTACT US</NavLink>
              </NavItem>
            </Nav>
          </div>
          <Navbar className=" col-md-6" style={{paddingTop: "70px", marginBottom: '50px'}}>
            <Nav className="right-f-wrapper ">
              <NavItem className="mr-3">
                <h5 className="wp-block-heading ">Features</h5>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/author/oliver/">
                      Author Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/?s=summer">
                      Search Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/category/lifestyle/">
                      Category Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/services/">
                      Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/about-me/">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/page-markup-and-formatting/">
                      Page Markup
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/fullwidth-page/">
                      Fullwidth Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/aligned-page/">
                      Aligned Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/error-page/">
                      Error Page
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/demo/contact/">
                      Contact Us
                    </NavLink>
                  </NavItem>
              </NavItem>

              <NavItem>
                <h5 className="wp-block-heading">Shop</h5>
               
                  <NavItem>
                    <NavLink href="https://inertiawp.com/shop/">
                      Shop Demo
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/shop/cart/">
                      Cart
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/shop/checkout/">
                      Checkout
                    </NavLink>
                  </NavItem>
                
              </NavItem>

              <NavItem>
                <h5 className="wp-block-heading">Inertia Theme</h5>

                  <NavItem>
                    <NavLink href="https://inertiawp.com/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://inertiawp.com/#buy"
                      data-type="URL"
                      data-id="https://inertiawp.com/#buy"
                    >
                      Buy Theme
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://inertiawp.com/#demos">Demos</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://inertiawp.com/#docs"
                      data-type="URL"
                      data-id="https://inertiawp.com/#docs"
                    >
                      Documentation
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://inertiawp.com/#support"
                      data-type="URL"
                      data-id="https://inertiawp.com/#support"
                    >
                      Support
                    </NavLink>
                  </NavItem>

              </NavItem>
            </Nav>
          </Navbar>
          <hr />
          <div class="full-f-wrapper">
            <div class="credit-f-wrapper">
              {" "}
              <p>
                © 2022 Inertia Wordpress Theme, MNMLD - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
