import { useEffect, useState } from "react";
import { useRefSync } from "./useRefSync.js";

/**
 * Custom hook to fetch data from a given URL with specified options.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {Object} options - Optional configurations for the fetch request, such as headers and params.
 *
 * @returns {Object} - An object containing:
 *   - {boolean} loading - A boolean indicating if the request is in progress.
 *   - {any} data - The data returned from the request, or null if not yet available.
 *   - {Error|null} error - An error object if the request failed, otherwise null.
 *   - {Function} setData - A setter function to manually update the data state.
 */

export function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const optionsRef = useRefSync(options);

  useEffect(() => {
    setLoading(true);
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
  }, [url]);

  return {
    loading,
    data,
    error,
    setData,
  };
}
