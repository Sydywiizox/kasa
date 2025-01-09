import "./Banner.scss";

/**
 * Renders a banner component with optional image, text, and shadow effects.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The URL of the image to be displayed in the banner.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} [props.text] - The text to be displayed over the image.
 * @param {boolean} [props.shadow=true] - Determines if a shadow effect should be applied to the banner.
 *
 * @returns {JSX.Element} The rendered banner component.
 */

function Banner({ image, alt, text, shadow = true }) {
  return (
    <div
      className={`banner ${text && "banner--opacity"} ${
        shadow ? "banner--shadow" : ""
      }`}
    >
      {image && <img src={image} alt={alt} className="banner__image" />}
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
