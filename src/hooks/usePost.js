import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = ({ data }) => {
    const token = "token aqui";

    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    updateData({
      pending: true,
      data: undefined,
      error: undefined,
    });

    if (data.order === "Acortar") {
      axios
        .post("https://api.m3o.com/v1/url/Shorten", data, header)
        .then((response) => {
          updateData({
            pending: false,
            data: response.data,
            error: undefined,
          });
        })
        .catch((err) => {
          updateData({
            pending: false,
            data: undefined,
            error: "error del api",
          });
        });
    } else if (data.order === "Resolver") {
      axios
        .post("https://api.m3o.com/v1/url/Proxy", data, header)
        .then((response) => {
          updateData({
            pending: false,
            data: response.data,
            error: undefined,
          });
        })
        .catch((err) => {
          updateData({
            pending: false,
            data: undefined,
            error: "error del api",
          });
        });
    }
  };

  return { ...postData, execute };
};

export default usePost;
