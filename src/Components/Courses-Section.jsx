import "../Styles/Courses-Section.css";
// Import course images
import XD from "../assets/Adobe_XD.jpeg";
import Photoshop from "../assets/graphics.jpeg";
import StudentTheory from "../assets/Student_fundamental.jpeg";
import UIUX from "../assets/UI.jpeg";
import OnlineLearning from "../assets/Intaractive.jpeg";

// Array of course objects, each containing details for a course card
const courses = [
  {
    id: 1,
    title: "Fundamentals of Adobe XD Theory Learn New",
    tag: "Adobe XD",
    lessons: "10x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Willam Smith",
    reviews: 63,
    image: XD,
  },
  {
    id: 2,
    title: "Certified Graphic Design with Free Project Course",
    tag: "Photoshop",
    lessons: "12x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Lora Smith",
    reviews: 63,
    image: Photoshop,
  },
  {
    id: 3,
    title: "Theory Learn New Student And Fundamentals",
    tag: "Photoshop",
    lessons: "10x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Robot Smith",
    reviews: 63,
    image: StudentTheory,
  },
  {
    id: 4,
    title: "Basic Graphic Design Theory For Beginners",
    tag: "Design",
    lessons: "10x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Jane Doe",
    reviews: 42,
    image: Photoshop,
  },
  {
    id: 5,
    title: "Learn UI/UX With Fun Projects and Challenges",
    tag: "UI/UX",
    lessons: "11x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Emily Clark",
    reviews: 50,
    image: UIUX,
  },
  {
    id: 6,
    title: "Interactive Online Learning from Top Experts",
    tag: "eLearning",
    lessons: "9x Lesson",
    type: "Online Class",
    price: "$30",
    author: "Anna Lee",
    reviews: 58,
    image: OnlineLearning,
  },
];

const Courses = () => {
  return (
    // Section containing all courses
    <section className="courses-section" id="courses">
      <h2 className="section-title">Pick A Course To Get Started</h2>
      <div className="courses-grid">
        {/* Map through courses array and render a card for each course */}
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-tag">{course.tag}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-info">
              <span>{course.lessons}</span> · <span>{course.type}</span>
            </p>
            <div className="course-footer">
              <span className="author">{course.author}</span>
              <span className="price">{course.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
