import { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ images, title }) {
    const [index, setIndex] = useState(0);
  return (
    <div className="slideshow">
        {images.length > 1 && <button className='slide-prev' onClick={() => setIndex((index - 1 + images.length) % images.length)}><i className="fa-solid fa-chevron-left"></i></button>}
        {images.length > 1 && <button className='slide-next' onClick={() => setIndex((index + 1) % images.length)}><i className="fa-solid fa-chevron-right"></i></button>}
        <img key={index} src={images[index]} alt={title + "_" + (index+1)} />
        {images.length > 1 && <p className='slide-index'>{index + 1}/{images.length}</p>}
    </div>
  );
}

export default Slideshow;