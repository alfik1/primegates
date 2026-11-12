import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ActivityIcon from "../components/ActivityIcon.jsx";
import { ACTIVITIES } from "../data";

const cats = ["All", ...new Set(ACTIVITIES.map((a) => a.cat))];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const items = ACTIVITIES.filter((a) => cat === "All" || a.cat === cat);

  return (
    <>
      <PageHeader title="Gallery" />

      <section className="section">
        <div className="container">
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>

          <div className="gallery">
            {items.map((a) => (
              <figure className="tile" key={a.slug}>
                {/* Uses the same photos as the activities: public/activities/<slug>.svg */}
                <img src={`/activities/${a.slug}.svg`} alt={a.title} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
                <ActivityIcon name={a.icon} size={54} />
                <figcaption>{a.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}