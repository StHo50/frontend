import React from 'react';
import './Matching.css';

const Matching = () => {
  return (
    <section className="matching-section">
      <h2>טופס התאמת דירה</h2>
      <p>שלום, כאן נבקש ממך לענות על מספר שאלות על מנת שנוכל לקבוע בצורה הטובה ביותר איזו דירה היא המושלמת בשבילך!</p><br/>
      <form className="matching-form">
        <label>
          מיקום מועדף:
          <input type="text" name="location" />
        </label>
        <label>
          תקציב:
          <input type="number" name="budget" />
        </label>
        <label>
          מספר חדרים:
          <input type="number" name="rooms"/>
        </label>
        <label>
          מאפיינים נוספים:
          <textarea name="features"></textarea>
        </label>
        <button type="submit">שלח</button><br/>
      </form>
    </section>
  );
};

export default Matching;

