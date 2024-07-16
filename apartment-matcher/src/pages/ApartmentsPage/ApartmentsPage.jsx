import ApartmentMinimalCard from "../../components/ApartmentMinimalCard/ApartmentMinimalCard";
import "./ApartmentsPage.css";

const ApartmentsPage = ({ apartments, title }) => {
  return (
    <div className="apartments-page-container">
      <h1>{title}</h1>
      <div className="apartments-page-cards-wrapper">
        {apartments.map((apartment, index) => {
          return <ApartmentMinimalCard key={index} apartment={apartment} />;
        })}
      </div>
    </div>
  );
};

export default ApartmentsPage;
