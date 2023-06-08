import p1 from "../../../assets/photosection/1.jpg";
import p2 from "../../../assets/photosection/2.jpg";
import p3 from "../../../assets/photosection/3.jpg";
import p4 from "../../../assets/photosection/4.jpg";
import p5 from "../../../assets/photosection/5.jpg";
import p6 from "../../../assets/photosection/6.jpg";
import p7 from "../../../assets/photosection/7.jpg";

const PhotoSection = () => {
  return (
    <div>
      <h1>lsdlfjaslfj</h1>
      <div className="carousel carousel-end rounded-box mx-5 lg:mx-16">
      <div className="carousel-item">
        <img className="w-80" src={p1} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p2} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p3} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p4} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p5} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p6} alt="Drink" />
      </div>
      <div className="carousel-item">
        <img className="w-80" src={p7} alt="Drink" />
      </div>
    </div>
    </div>
  );
};

export default PhotoSection;
