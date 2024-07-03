import React from 'react';
import './HomePage-Reviews.css';
import NataliImg from '../../assets/Natali.jpg'; 
import GilImg from '../../assets/Gil.JPG'; 
import MaiaImg from '../../assets/Maia.JPG';

const reviews = [
  { name: "דנה ה", text: "ממליצה בחום! בהתחלה הייתי סקפטית אבל הופתעתי לטובה!", img: NataliImg },
  { name: "גיל ב", text: "התהליך למציאת דירה היה מדויק להפליא ועזר לי להתנהל ביעילות.", img: GilImg },
  { name: "מאיה ל", text: "התהליך למציאת הדירה היה חלק ויעיל!", img: MaiaImg }
];

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>לקוחות מרוצים</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <img src={review.img} alt={review.name} />
            <p>{review.text}</p>
            <h3>{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
