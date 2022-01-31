import React, { useState } from "react";
import axios from "axios";

const usePostQR = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = ({ data }) => {
    updateData({
      pending: true,
      data: undefined,
      error: undefined,
    });

    const token = "MGViNDE2NWQtODBjNS00ODVlLWJmYTktM2M5MGJiNDhiOGU2";

    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .post("https://api.m3o.com/v1/qr/Generate", data, header)
      .then((response) => {
        updateData({
          pending: false,
          data: response.data,
          error: undefined,
        });
      })
      .catch((error) => {
        updateData({
          pending: false,
          data: undefined,
          error: "error" + error,
        });
      });
  };

  return { ...postData, execute };
};

export default usePostQR;
