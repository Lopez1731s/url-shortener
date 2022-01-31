import React from "react";
import SearchBar from "../components/SearchBar";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";


const Acortar = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6">
            <SearchBar title="Acortar" />
          </MDBCol>
          <MDBCol size="6">
            <SearchBar title="Resolver" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Acortar;
