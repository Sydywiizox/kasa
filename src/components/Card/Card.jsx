import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * @function Card
 * @description A clickable card that displays an image and a title.
 * @prop {string} image - The image source.
 * @prop {string} title - The title of the card.
 * @prop {string} id - The id of the card that will be used to navigate to the Estate page.
 * @returns {JSX.Element} A clickable card.
 */
function Card({ image, title, id }) {
  return (
    <Link to={`/estate/${id}`}>
      <div className="card">
        {image && <img src={image} alt={title} className="card__image" />}
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
