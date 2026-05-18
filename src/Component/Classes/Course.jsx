import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Classes/course.css";
import coursecard1 from "../../Assets/event3.jpg";
import coursecard2 from "../../Assets/musicbook.jpg";
import coursecard3 from "../../Assets/course2.jpg";

const courses = [
  {
    level: "Intermediate Level",
    title: "Intermediate Course",
    color: "orange",
    image: coursecard1,
    desc: "Build your skills and explore melodies, ragas, and rhythm with more confidence.",
    points: [
      "Advanced fingering & gamakas",
      "Learn popular ragas in depth",
      "Tala rhythm practice",
      "Compositions & simple kritis",
    ],
  },
  {
    level: "Advanced Level",
    title: "Advanced Course",
    color: "purple",
    image: coursecard2,
    desc: "Master complex techniques, improvisation, and performance with expression.",
    points: [
      "Raga alapana & niraval",
      "Advanced gamakas & techniques",
      "Manodharma & improvisation",
      "Stage performance guidance",
    ],
  },
  {
    level: "Practice & Performance",
    title: "Practice & Performance",
    color: "green",
    image: coursecard3,
    desc: "Strengthen your practice, refine your skills, and prepare for beautiful performances.",
    points: [
      "Daily practice routines",
      "Recitals & stage confidence",
      "Feedback & personalized guidance",
      "Certification on completion",
    ],
  },
];

const CourseCards = () => {
  return (
    <section className="course-section">
      <div className="container">
        {courses.map((course, index) => (
          <div
            className={`course-card ${course.color} ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={course.number}
          >
            <div className="course-image-box">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-content">
              <div className="course-header">
                <span className="course-level">{course.level}</span>
              </div>

              <h2>{course.title}</h2>
              <p>{course.desc}</p>

              <button className="course-btn">
                Learn More <span>→</span>
              </button>
            </div>

            <div className="course-points">
              {course.points.map((point, i) => (
                <div className="point" key={i}>
                  <span>✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCards;
