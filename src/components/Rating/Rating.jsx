import './Rating.scss';

function Rating({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fa-solid fa-star ${i < rating ? "star-full" : "star-empty"}`}></i>
      );
    }
  
    return <div className="rating">{stars}</div>;
  }
  

export default Rating;