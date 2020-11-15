import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "./images/logo.jpeg";
import "./All.css";

function Footer() {
  return (
    <div>
      <MDBFooter id="footer" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <div style={{ justifyContent: "middle", textAlign: "center" }}>
            <img src={logo} style={{ height: "80px" }} />
          </div>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Group 46
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
