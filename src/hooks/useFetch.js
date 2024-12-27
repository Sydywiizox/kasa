import { useEffect, useState } from "react";
import { useRefSync } from "./useRefSync.js";
import axios from "axios";

/**
 * @param {string} url
 * @param {FetchEventInit} options
 */
export function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const optionsRef = useRefSync(options);

    useEffect(() => {
      setLoading(true);
    /*
      fetch(url, {
        ...optionsRef.current,
        headers: {
          Accept: "application/json; charset=UTF-8",
          ...optionsRef.current?.headers,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
      */
      axios.get(url, {
        headers: {
          Accept: "application/json; charset=UTF-8",
          ...optionsRef.current?.headers,
        },
        params: optionsRef.current?.params,
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [url]);

    return {
        loading,
        data,
        error,
        setData,
    };
}
