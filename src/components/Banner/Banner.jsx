import './Banner.scss';

function Banner({image, alt, text, shadow=true}) {
    return (
        <div className={`banner ${text ? 'banner--opacity' : ''} ${shadow ? 'banner--shadow' : ''}`}>
            {image && <img src={image} alt={alt} className="banner__image" />}
            {text && <h1 className="banner__text">{text}</h1>}
        </div>
    );
}

export default Banner;