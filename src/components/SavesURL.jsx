import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBCol,
  MDBPopover,
  MDBPopoverBody,
} from "mdb-react-ui-kit";


const SavesURL = () => {
  return (
    <>
      <MDBRow>
        <MDBCol md="3" className="mt-5 mb-3">
          <MDBCard background="light" className="mb-3">
            <MDBCardHeader>2022-01-28</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Url's</MDBCardTitle>
              <MDBCardText>mdbootstrap.com</MDBCardText>
              <MDBCardText>m3o.one/u/7P5aw75fp</MDBCardText>

              <MDBPopover
                size="sm"
                color="primary"
                btnChildren="copiar"
                dismiss
              >
                <MDBPopoverBody>Copiado!</MDBPopoverBody>
              </MDBPopover>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default SavesURL;
/*
      <MDBPopover
        size="sm"
        color="primary"
        btnChildren="copiar"
        dismiss
      >
        <MDBPopoverBody>
          Copiado!
        </MDBPopoverBody>
      </MDBPopover>

* */
