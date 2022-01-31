import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBPopover,
  MDBPopoverBody,
} from "mdb-react-ui-kit";

const InfoURL = ({ data }) => {
  console.log(data);
  return (
    <>
      <MDBCard className="mt-5">
        <MDBCardHeader>Información URL</MDBCardHeader>
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            {data ? (
              <a href={data?.destinationURL || data?.shortURL}>
                {data?.destinationURL || data?.shortURL}
              </a>
            ) : (
              <p>URL no encontrada</p>
            )}
            <MDBPopover size="sm" color="primary" btnChildren="copiar" dismiss>
              <MDBPopoverBody>Copiado!</MDBPopoverBody>
            </MDBPopover>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default InfoURL;
