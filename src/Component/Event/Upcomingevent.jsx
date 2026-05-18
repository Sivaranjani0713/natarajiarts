import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import "../Event/upcomingevent.css";
import event1 from "../../Assets/event1.jpg";
import event2 from "../../Assets/event2.jpg";
import event3 from "../../Assets/event3.jpg";
import event4 from "../../Assets/event4.jpg";

const events = [
  {
    day: "15",
    month: "DEC",
    image: event1,
    tags: ["Concert", "Cultural"],
    title: "Veena Recital – Classical Evening",
    description:
      "Experience an evening of divine melodies featuring traditional ragas and compositions.",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, San Jose, CA",
  },
  {
    day: "15",
    month: "DEC",
    image: event2,
    tags: ["Dance", "Cultural"],
    title: "Bharatanatyam Dance Evening",
    description:
      "A graceful performance showcasing the beauty of Bharatanatyam.",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, San Jose, CA",
  },
  {
    day: "15",
    month: "DEC",
    image: event3,
    tags: ["Comedy", "Live"],
    title: "Stand-Up Comedy Night",
    description:
      "An evening full of laughter and entertainment with top comedians.",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, San Jose, CA",
  },
  {
    day: "15",
    month: "DEC",
    image: event4,
    tags: ["Music", "Classical"],
    title: "Carnatic Violin Concert",
    description: "A soulful violin concert featuring Carnatic masterpieces.",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, San Jose, CA",
  },
];

function Events() {
  return (
    <section className="events-section">
      <div className="container-fluid">
        <h1 className="events-title text-center">Upcoming Events</h1>
        <p className="event-para text-center">
          Mark your calendar for these exciting experiences
        </p>
        <div className="row g-4 mt-5">
          {events.map((event, index) => (
            <div className="col-lg-6" key={index}>
              <div className="event-card">
                <div className="event-img-box">
                  <img src={event.image} alt={event.title} />

                  <div className="date-box">
                    <h3>{event.day}</h3>
                    <span>{event.month}</span>
                  </div>
                </div>

                <div className="event-content">
                  <div className="tags">
                    {event.tags.map((tag, i) => (
                      <span className={`tag tag-${i}`} key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2>{event.title}</h2>
                  <p className="desc">{event.description}</p>

                  <p className="info">
                    <FaClock /> {event.time}
                  </p>

                  <p className="info">
                    <FaMapMarkerAlt /> {event.location}
                  </p>

                  <button className="register-btn">Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
