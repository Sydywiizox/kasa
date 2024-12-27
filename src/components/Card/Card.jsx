import { NavLink } from "react-router-dom";
import "./Card.scss";

function Card({ image, alt, title, id }) {
    return (
        <NavLink to={`/SingleProperty/${id}`}>
            <div className="card">
                {image && <img src={image} alt={alt} className="card__image" />}
                <h2 className="card__title">{title}</h2>
            </div>
        </NavLink>
    );
}

export default Card;
