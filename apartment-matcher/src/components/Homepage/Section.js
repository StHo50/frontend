import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';


const Section = () => {
    return (
        <section className="section">
            <h1>התאמת דירה ללקוח</h1>
            <p>ברוכים הבאים לאתר האידיאלי שלכם למציאת דירה! <br />
                הפלטפורמה החדשנית שלנו נועדה לחבר אתכם עם הדירה המושלמת המותאמת לצרכים ולהעדפות הייחודיות שלכם. <br />כל מה שעליכם לעשות הוא לספק לנו פרטים על הדירה הרצויה, לענות על מספר שאלות, ותנו לנו לעשות את השאר.
                <br />בין אם אתם מחפש את בית החלומות שלכם או סקרנים לגבי שווי השוק של דירה, כלי החיזוי החכם שלנו מציע הערכות עלויות מדויקות על סמך מיקום, גודל וגורמי מפתח נוספים.
                <br />התחילו את המסע שלך איתנו כבר היום!
            </p>
            <div className="section-buttons">
                <Link to="/matching"><button>התאמת דירה</button></Link>
            </div>
        </section>
    );
};

export default Section;
