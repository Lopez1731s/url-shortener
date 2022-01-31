import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import SearchQR from "../components/SearchQR";

const CodigoQR = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
            <SearchQR />
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CodigoQR;
