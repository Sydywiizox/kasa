import { useEffect, useState } from "react";
import "./Slideshow.scss";

/**
 * @function Slideshow
 * @description Displays an image slideshow with navigation controls.
 * @param {Object} props - The properties object.
 * @param {string[]} props.images - An array of image URLs to display in the slideshow.
 * @param {string} props.title - The title used as alt text for images.
 * @returns {JSX.Element} The rendered slideshow component.
 */

function Slideshow({ images, title }) {
  const [index, setIndex] = useState(0);
  const [orientation, setOrientation] = useState("landscape");
  useEffect(() => {
    const img = new Image();
    img.src = images[index];
    img.onload = () => {
      if (img.width > img.height) {
        setOrientation("landscape");
      } else {
        setOrientation("portrait");
      }
    };
  }, [index, images]);
  return (
    <div className="slideshow" data-orientation={orientation}>
      {images.length > 1 && (
        <button
          className="slide-prev"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        >
          <i className="material-icons icon">arrow_back_ios</i>
        </button>
      )}
      {images.length > 1 && (
        <button
          className="slide-next"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <i className="material-icons icon">arrow_forward_ios</i>
        </button>
      )}
      <img key={index} src={images[index]} alt={title + "_" + (index + 1)} />
      {images.length > 1 && (
        <p className="slide-index">
          {index + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
