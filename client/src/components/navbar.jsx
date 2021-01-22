import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


render() {

  return (
   <div>
      <MDBNavbar color="default-color-dark
#00695c" dark expand="md" className="shadow-2-strong">
        <MDBNavbarBrand>
          <strong className="white-text">MERN</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/register" className="font-weight-bold 	ml-5">Register</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login" className="font-weight-bold 	ml-5"  >Login</MDBNavLink>
            </MDBNavItem>
           
         
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a rel="noreferrer" className="waves-effect waves-light" href="https://twitter.com/AllenY33892307?s=08" style={{color: "rgb(255,255,255,0.8)"}}  target="_blank">
                <MDBIcon  fab icon="twitter" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a  rel="noreferrer" className="waves-effect waves-light ml-5" href="https://github.com/Alleny244" style={{color: "rgb(255,255,255,0.8)"}} target="_blank">
                <MDBIcon fab icon="github" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
            <a  rel="noreferrer" className="waves-effect waves-light ml-5" href="https://www.linkedin.com/in/allen-y-3804091ab/" style={{color: "rgb(255,255,255,0.8)"}} target="_blank">
                <MDBIcon fab icon="linkedin" />
                </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
      </div>
    );
  }
}

export default NavbarPage;