import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Photo from "../components/Photo.jsx";
import { ART } from "../artwork";
import { photoUrl } from "../photos";
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
              <Link to={`/activities/${a.slug}`} className="tile" key={a.slug}>
                <Photo className="tile-art" src={photoUrl(a.slug, 1)} art={ART[a.slug]} alt={a.title} />
                <span className="cap">
                  <b>{a.title}</b>
                  <span>{a.short}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}