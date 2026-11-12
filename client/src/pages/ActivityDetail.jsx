import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Photo from "../components/Photo.jsx";
import { ART } from "../artwork";
import { photoUrl } from "../photos";
import { ACTIVITIES, SITE } from "../data";

function Thumb({ src, alt, on, onPick }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <button type="button" className={`thumb ${on ? "on" : ""}`} onClick={onPick} aria-label={alt}>
      <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
    </button>
  );
}

export default function ActivityDetail() {
  const { slug } = useParams();
  const [cur, setCur] = useState(1);

  useEffect(() => {
    setCur(1);
  }, [slug]);

  const i = ACTIVITIES.findIndex((a) => a.slug === slug);

  if (i < 0) {
    return (
      <>
        <PageHeader title="Activity not found" />
        <section className="section container" style={{ textAlign: "center" }}>
          <p className="muted">We could not find that activity.</p>
        </section>
      </>
    );
  }

  const a = ACTIVITIES[i];
  const prev = ACTIVITIES[(i - 1 + ACTIVITIES.length) % ACTIVITIES.length];
  const next = ACTIVITIES[(i + 1) % ACTIVITIES.length];
  const caption = a.points[cur - 1] || a.short;

  return (
    <>
      <PageHeader title={a.title} crumb="Activities" />

      <section className="section">
        <div className="container detail">
          <article className="prose">
            <Photo key={`${a.slug}-${cur}`} className="detail-photo gal" src={photoUrl(a.slug, cur)} art={ART[a.slug]} alt={`${a.title} - ${caption}`} />
            <p className="photo-cap"><b>{caption}.</b> {a.short}</p>

            <div className="thumbs">
              {[1, 2, 3].map((n) => (
                <Thumb key={`${a.slug}-${n}`} src={photoUrl(a.slug, n)} alt={`${a.title} photo ${n}`} on={cur === n} onPick={() => setCur(n)} />
              ))}
            </div>

            <p>{a.medium}</p>
            <p>{a.long}</p>

            <h2>What we supply</h2>
            <ul className="checks">
              {a.points.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <div className="btns">
              <Link to={`/contact?item=${a.slug}`} className="btn btn-gold">Request a quote</Link>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Prime Gate, I would like details about: ${a.title}`)}`} target="_blank" rel="noreferrer" className="btn btn-outline">
                Ask on WhatsApp
              </a>
            </div>

            <div className="pager">
              <Link to={`/activities/${prev.slug}`} className="btn btn-outline"><ArrowLeft size={16} /> {prev.title.split(" ").slice(0, 3).join(" ")}</Link>
              <Link to={`/activities/${next.slug}`} className="btn btn-outline">{next.title.split(" ").slice(0, 3).join(" ")} <ArrowRight size={16} /></Link>
            </div>
          </article>

          <aside className="side">
            <div className="card side-list">
              <h3 style={{ fontSize: 26, marginBottom: 10 }}>All activities</h3>
              {ACTIVITIES.map((x) => (
                <Link key={x.slug} to={`/activities/${x.slug}`} className={x.slug === a.slug ? "active" : ""}>{x.title}</Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}