import React from 'react';
import './About.css';
import Student1Img from '../../assets/student1.JPG';
import Student2Img from '../../assets/student2.JPG';
import Student3Img from '../../assets/student3.JPG';
import Student4Img from '../../assets/student4.JPG';

// TODO

const About = () => {
  return (
    <section className="about">
      <h2>קצת עלינו</h2>
      <p>פרטים על האתר ויוצריו:</p>
      <div className="about-container">
        <div className="about-item">
          <img src={Student1Img} alt="Student 1" />
          <p>יותם זאבי פדרמן</p>
        </div>
        <div className="about-item">
          <img src={Student2Img} alt="Student 2" />
          <p>חנה סופר</p>
        </div>
        <div className="about-item">
          <img src={Student3Img} alt="Student 3" />
          <p>פז גואטה</p>
        </div>
        <div className="about-item">
          <img src={Student4Img} alt="Student 4" />
          <p>סטיבן חולופ</p>
        </div>
      </div>
    </section>
  );
};

export default About;
