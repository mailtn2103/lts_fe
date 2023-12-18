import React from "react";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  DropdownToggle,
  Media,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

// import "/src/css/header.css";

const Header = () => {
  return (
    <div>
      <header>
        <Container fluid style={{ backgroundColor: "#312e81", color: "#fff" }}>
          <style>
            {`
                .content {
                    display: flex;
                    align-items: center;
                    flex: auto;
                    justify-content: center;
                    text-align: center;
                    font-size: 12px;
                }
                a{
                    color: #fff;
                    font-weight: 700;
                    text-decoration: underline;
                }
                

                `}
          </style>
          <div className="flex">
            <div className="content pt-2">
              <p>
                15% OFF - SALE FOR LIMITED TIME. &nbsp;
                <a href="#" rel="noopener">
                  <strong>BUY NOW!</strong>
                </a>
              </p>
            </div>
          </div>
        </Container>
      </header>
      
    </div>
  );
};

export default Header;
