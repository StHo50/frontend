import { useParams } from "react-router-dom";
import "./ApartmentPage.css";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";

const ApartmentPage = () => {
  const { id } = useParams();

  const apartment = {
    id: "jLSqcInn08A",
    lat: 32.0691250781,
    lng: 34.7645851824,
    create_date: "2023-12-24 09:46:59",
    address: "הירקון 10, תל אביב יפו",
    city: "תל אביב יפו",
    floor: 8,
    deal_type: "להשכרה",
    beds: 4,
    price: 40000,
    "size_m^2": 200,
    condition: "כמו חדש",
    url: "https://www.madlan.co.il/listings/jLSqcInn08A",
    tags: [
      {
        tag_category: "school",
        tag_value: 1.0,
      },
      {
        tag_category: "secular",
        tag_value: 1.0,
      },
      {
        tag_category: "religious",
        tag_value: 5.0,
      },
      {
        tag_category: "parks",
        tag_value: 1.0,
      },
      {
        tag_category: "quiet_street",
        tag_value: 3.0,
      },
      {
        tag_category: "families",
        tag_value: 2.0,
      },
      {
        tag_category: "light_trail",
        tag_value: 3.0,
      },
    ],
    insights: [
      {
        insight_category: "מחירים",
        insight_value: "דירות רבות באזור מושכרות באתרים כמו Airbnb",
      },
      {
        insight_category: "חיים",
        insight_value: "מגדלים מתוכננים עלולים לחסום זרימת אוויר לשכונה",
      },
      {
        insight_category: "תכנון",
        insight_value: "שוק הכרמל ישופץ",
      },
      {
        insight_category: "חינוך",
        insight_value: "בית הספר הסמוך לדירה מעולה",
      },
      {
        insight_category: "ידידותי למשפחה",
        insight_value: "סביבה מתאימה למשפחות",
      },
      {
        insight_category: "תחבורה",
        insight_value: "רכבת קלה תפעל באזור בסביבות 2026",
      },
      {
        insight_category: "תכנון",
        insight_value: "בניה חדשה ליד הנכס",
      },
      {
        insight_category: "חיים",
        insight_value: "Limited park access",
      },
      {
        insight_category: "תכנון",
        insight_value: "פרויקט פינוי בינוי מתוכנן בסביבה",
      },
    ],
    images: [
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/bLX7zH.jpg",
        image_id: "bLX7zH",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/b3NPOK.jpg",
        image_id: "b3NPOK",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/rUJRU.jpg",
        image_id: "rUJRU",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/ck3QP5.jpg",
        image_id: "ck3QP5",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/bwqwZP.jpg",
        image_id: "bwqwZP",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/09MC1.jpg",
        image_id: "09MC1",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/XMcRv.jpg",
        image_id: "XMcRv",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/ZLbdV.jpg",
        image_id: "ZLbdV",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/eeJIX.jpg",
        image_id: "eeJIX",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/cDCIb.jpg",
        image_id: "cDCIb",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/bgCbMH.jpg",
        image_id: "bgCbMH",
      },
      {
        image_url:
          "https://images2.madlan.co.il/t:nonce:v=2;resize:height=640;convert:type=webp/bulletin/jLSqcInn08A/xyLQZ.jpg",
        image_id: "xyLQZ",
      },
    ],
  };

  const { address, price, deal_type, beds, floor, images } = apartment;
  const size = apartment["size_m^2"];

  return (
    <div className="apartment-page-container">
      <div className="apartment-page-wrapper">
        <div className="apartment-page-imgs-carousel-wrapper">
          <ImagesCarousel images={images} />
        </div>
        <div className="apartment-page-content-wrapper">
          <div className="apartment-page-header">
            <h3>{address}</h3>
            <h3>{price} ש"ח</h3>
          </div>
          <div className="apartment-page-content">
            <p>{deal_type}</p>
            <p>
              {beds} חדרים | קומה {floor} | {size} מ"ר
            </p>
          </div>
          <div className="apartment-page-description-wrapper">
            <h4>תיאור הנכס</h4>
            <div>
              <p>תגיות</p>
            </div>
            <div>
              <p>תובנות</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage;
