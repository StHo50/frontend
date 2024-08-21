import React from 'react';
import './About.css';
import Student1Img from '../../assets/student1.JPG';
import Student2Img from '../../assets/student2.JPG';
import Student3Img from '../../assets/student3.JPG';
import Student4Img from '../../assets/student4.JPG';

const About = () => {
  return (
    <section className="about">
      <h2>קצת עלינו</h2>
      <p>
        האתר שלנו מציע פתרונות מתקדמים למציאת דירות המתאימות לצרכים האישיים של הלקוחות שלנו. 
       <br></br>
        אנו משתמשים בטכנולוגיות מתקדמות ואלגוריתם חכם כדי להגיע לתוצאות הטובות ביותר.
      </p>
      <p>להלן הצוות שלנו:</p>
      <div className="about-container">
        <div className="about-item">
          <img src={Student1Img} alt="Student 1" />
          <p><strong>יותם זאבי פדרמן</strong><br/>אחראי על הבאת הנתונים ויצירת האלגוריתם</p>
        </div>
        <div className="about-item">
          <img src={Student2Img} alt="Student 2" />
          <p><strong>חנה סופר</strong><br/>אחראית על פיתוח צד הלקוח</p>
        </div>
        <div className="about-item">
          <img src={Student3Img} alt="Student 3" />
          <p><strong>פז גואטה</strong><br/>אחראית על צד השרת בשימוש NodeJS</p>
        </div>
        <div className="about-item">
          <img src={Student4Img} alt="Student 4" />
          <p><strong>סטיב חולופ</strong><br/>אחראי על פיתוח צד הלקוח באמצעות React</p>
        </div>
      </div>
    </section>
  );
};

export default About;
