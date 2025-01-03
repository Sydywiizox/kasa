import { useRef } from "react";

/**
 * A hook that returns a reference to the data that is kept in sync
 * with the passed in data.
 *
 * The main use case for this hook is to have a ref that is updated
 * whenever the passed in data changes.
 *
 * @param {any} data - The data to keep in sync
 * @return {React.MutableRefObject<any>} - A reference to the data
 */
export function useRefSync(data) {
  const dataRef = useRef(data);
  dataRef.current = data;
  return dataRef;
}
