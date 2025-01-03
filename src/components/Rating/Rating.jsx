import "./Rating.scss";

/**
 * Renders a rating component with a maximum of 5 stars. The number of full stars
 * is determined by the rating prop.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.rating - The number of full stars to display.
 * @returns {JSX.Element} - The rendered rating component.
 */
function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${
          i < rating ? "star-full" : "star-empty"
        }`}
      ></i>
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
