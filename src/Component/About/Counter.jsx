import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../About/counter.css";

const stats = [
  { end: 20, suffix: "+", label: "Years Experience" },
  { end: 100, suffix: "", label: "Students Taught" },
  { end: 50, suffix: "", label: "Performances" },
  { end: 3, suffix: "", label: "Years of Nataraji" },
];

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 900; // fast count
    const stepTime = Math.max(15, duration / end);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <h2 className="stat-number">
      {count}
      {suffix}
    </h2>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="row text-center gy-4">
          {stats.map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <Counter end={item.end} suffix={item.suffix} start={startCount} />
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
