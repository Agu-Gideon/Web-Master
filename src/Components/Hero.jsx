import "../Styles/HeroSection.css";
import heroImage from "../assets/Hero-Image.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>
            Engaging & <br /> Accessible Online <br /> Courses For All
          </h1>
          <p>
            We offer a range of excellent training and certification courses
            suitable for everyone and anywhere.
          </p>
          <div className="search__bar">
            <input type="text" placeholder="Search for courses" />
            <button>Search</button>
          </div>
        </div>

        <div className="hero__visuals">
          <img src={heroImage} alt="Happy Student" className="main__image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
