import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const token = "MGViNDE2NWQtODBjNS00ODVlLWJmYTktM2M5MGJiNDhiOGU2";

    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get(url, header)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {data, loading, error}
};

export default useFetch;
