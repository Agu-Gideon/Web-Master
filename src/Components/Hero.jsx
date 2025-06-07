import "../Styles/HeroSection.css";
import heroImage from "../assets/Hero-Image.png";

const HeroSection = () => {
  return (
    // Main section for the hero area
    <section className="hero">
      <div className="hero__content">
        {/* Text content: headline, description, and search bar */}
        <div className="hero__text">
          <h1>Engaging & Accessible Online Courses For All</h1>
          <p>
            We offer a range of excellent training and certification courses
            suitable for everyone and anywhere.
          </p>
          {/* Search bar for users to search courses  the functionality is not implemented though*/}
          <div className="search__bar">
            <input type="text" placeholder="Search for courses" />
            <button>Search</button>
          </div>
        </div>

        {/* Visual content: hero image */}
        <div className="hero__visuals">
          <img src={heroImage} alt="Happy Student" className="main__image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
