import { useEffect, useRef, useState } from "react";

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

  const indexPrev = (index - 1 + images.length) % images.length;
  const indexNext = (index + 1) % images.length;

  const refImages = useRef(null);

  function changeSlide(newIndex) {
    refImages.current.style.transition = "transform 0.5s ease-in-out";
    if (newIndex < index) {
      refImages.current.style.transform = "translateX(100%)";
    } else {
      refImages.current.style.transform = "translateX(-100%)";
    }
    setTimeout(() => {
      refImages.current.style.transition = "none";
      if (newIndex < 0) {
        setIndex(images.length - 1);
      } else if (newIndex >= images.length) {
        setIndex(0);
      } else {
        setIndex(newIndex);
      }
      refImages.current.style.transform = "translateX(0)";
    }, 500);
  }

  return (
    <div className="slideshow" data-orientation={orientation}>
      {images.length > 1 && (
        <button className="slide-prev" onClick={() => changeSlide(index - 1)}>
          <i className="material-icons icon">arrow_back_ios</i>
        </button>
      )}
      {images.length > 1 && (
        <button className="slide-next" onClick={() => changeSlide(index + 1)}>
          <i className="material-icons icon">arrow_forward_ios</i>
        </button>
      )}
      <div className="images" ref={refImages}>
        <img
          key={indexPrev}
          src={images[indexPrev]}
          alt={title + "_" + (indexPrev + 1)}
        />
        <img key={index} src={images[index]} alt={title + "_" + (index + 1)} />
        <img
          key={indexNext}
          src={images[indexNext]}
          alt={title + "_" + (indexNext + 1)}
        />
      </div>
      {images.length > 1 && (
        <p className="slide-index">
          {index + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
