import React, { useState } from "react";
import {
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBTypography,
  MDBCol,
  MDBBtn,
  MDBRow,
  MDBSpinner,
} from "mdb-react-ui-kit";
import usePostQR from "../hooks/usePostQR";

const SearchQR = () => {
  const [url, seturl] = useState({ text: "", size: "600" });
  const { pending, data, error, execute } = usePostQR();

  const handleChange = ({ target }) => {
    seturl({
      ...url,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    execute({ data: url });
  };

  return (
    <>
      <MDBTypography tag="h3" className="mt-5 mb-3">
        URL a Código QR
      </MDBTypography>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol size="10">
            <MDBInputGroup>
              <MDBInputGroupText>example.com/users/</MDBInputGroupText>
              <MDBInputGroupElement
                id="basic-url"
                type="text"
                name="text"
                onChange={handleChange}
              />
            </MDBInputGroup>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="success" type="submit">
              Enviar
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
      {pending ? (
        <div className="d-flex justify-content-center mt-3">
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        ""
      )}
      {error && (
        <MDBTypography note noteColor="danger" className="mt-3">
          <strong>Error: </strong>Su url no ha podido ser encontrada.
        </MDBTypography>
      )}
      {data ? (
        <MDBRow>
          <MDBCol size="4" className="mt-5">
            <MDBTypography tag="h3">Código QR</MDBTypography>
            <img
              src={data?.qr}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "24rem" }}
            />
          </MDBCol>
          <MDBCol size="6" className="mt-5">
            <MDBTypography tag="h3">URL Original</MDBTypography>
            <a href={url.text}>{url.text}</a>
          </MDBCol>
        </MDBRow>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchQR;
