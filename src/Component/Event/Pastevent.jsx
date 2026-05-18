import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Event/pastevent.css";

const events = [
  {
    title: "Annual Veena Festival",
    date: "September 2024",
    text: "A grand celebration featuring renowned Veena artists from across the country",
    color: "orange",
    side: "right",
  },
  {
    title: "Summer Yoga Camp",
    date: "July 2024",
    text: "Week-long intensive yoga program for all levels with daily sessions",
    color: "green",
    side: "left",
  },
  {
    title: "Music Theory Workshop",
    date: "May 2024",
    text: "Understanding Raga, Tala, and the fundamentals of Carnatic music",
    color: "blue",
    side: "right",
  },
  {
    title: "Spring Concert Series",
    date: "March 2024",
    text: "Monthly concerts showcasing student and teacher performances",
    color: "rose",
    side: "left",
  },
];

function EventTimeline() {
  return (
    <section className="timeline-section">
      <div>
        <h1 className="events-title text-center">Past Events</h1>
        <p className="event-para text-center">
          A journey through our memorable events and celebrations
        </p>
      </div>
      <div className="container">
        <div className="timeline">
          {events.map((event, index) => (
            <div className={`timeline-item ${event.side}`} key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <h3>{event.title}</h3>
                <h5 className={event.color}>{event.date}</h5>
                <p>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
