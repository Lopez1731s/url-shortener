import React from "react";
import DataTable from "react-data-table-component";

const TableURL = ({ info }) => {
  const columns = [
    {
      name: "Fecha",
      selector: (row) => new Date(row.created).toLocaleDateString(),
    },
    {
      name: "Destino URL",
      selector: (row) => row.destinationURL,
    },
    {
      name: "URL Acortada",
      selector: (row) => row.shortURL,
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={info}
      title={"Historial de URL"}
      pagination
      responsive
      highlightOnHover
      striped
      fixedHeader
      fixedHeaderScrollHeight="600px"
    />
  );
};

export default TableURL;
