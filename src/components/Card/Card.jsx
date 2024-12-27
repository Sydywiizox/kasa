import './Card.scss';

function Card ({ image, alt, title }) {
    return (
        <div className="card">
            {image && <img src={image} alt={alt} className="card__image" />}
            <h2 className="card__title">{title}</h2>
        </div>
    );
}

export default Card;