import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBIcon,
  MDBBtn,
  MDBSpinner,
  MDBTypography,
} from "mdb-react-ui-kit";

import usePost from "../hooks/usePost";

const SearchBar = ({ title }) => {
  const [url, seturl] = useState({
    destinationURL: "",
    shortURL: "",
    order: title,
  });

  const { data, pending, error, execute } = usePost();

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

  const giveName = (title) => {
    if (title === "Acortar") {
      return "destinationURL";
    } else if (title === "Resolver") {
      return "shortURL";
    }
  };

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBTypography tag="h3">{title} URL</MDBTypography>
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol size="10">
              <MDBInputGroup className="mb-3">
                <MDBInputGroupText noBorder>
                  <MDBIcon fas icon="search" />
                </MDBInputGroupText>
                <MDBInputGroupElement
                  type="text"
                  placeholder="Introdusca su Url"
                  name={giveName(title)}
                  onChange={handleChange}
                  required
                />
              </MDBInputGroup>
            </MDBCol>
            <MDBCol size="2">
              <MDBBtn color="success" type="submit">
                {pending ? "Cargando..." : "Enviar"}
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
          <MDBTypography note noteColor="danger">
            <strong>Error: </strong>Su url no ha podido ser encontrada.
          </MDBTypography>
        )}
      </MDBContainer>
    </>
  );
};

export default SearchBar;
