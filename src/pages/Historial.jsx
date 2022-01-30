import React from "react";
import TableURL from "../components/TableURL";
import useFetch from "../hooks/useFetch";
import { MDBContainer, MDBSpinner, MDBTypography } from "mdb-react-ui-kit";

export const Historial = () => {
  const { data, loading, error } = useFetch("https://api.m3o.com/v1/url/List");

  return (
    <MDBContainer className="mt-5">
      <TableURL info={data?.urlPairs} />

      {loading ? (
        <div className="d-flex justify-content-center mt-3">
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        ""
      )}
      {error && (
        <MDBTypography note noteColor="danger">
          <strong>Error: </strong>Algo salio mal.
        </MDBTypography>
      )}
    </MDBContainer>
  );
};
