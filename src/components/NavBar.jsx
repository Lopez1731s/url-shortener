import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

const NavBar = () => {
  return (
    <MDBNavbar expand="lg" dark bgColor="dark" className="mb-3">
      <MDBContainer>
        <NavLink to="/" className="navbar-brand">
          URL Shortener
        </NavLink>

        <MDBCollapse navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                URL's
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to="/historial"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Historial URL
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to="/codigoqr"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Codigo QR
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
// className={({isActive}) => (isActive ? "active" : "")}
