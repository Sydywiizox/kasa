import { useState } from "react";
import "./Collapse.scss";

/**
 * A component that displays a collapsible section with a header and content.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the header.
 * @param {React.ReactNode} props.children - The content to display inside the collapse section.
 *
 * @returns {JSX.Element} A collapsible section component.
 */

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__header">
        {title}
        <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid fa-chevron-down ${isOpen ? "" : "up"}`}></i>
        </button>
      </div>
      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
