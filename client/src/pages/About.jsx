import { Link } from "react-router-dom";
import { Target, Eye, Handshake } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Photo from "../components/Photo.jsx";
import { SITE, ACTIVITIES } from "../data";

const values = [
  { icon: Target, t: "Our mission", d: "To connect UAE and GCC businesses with dependable, quality products through transparent trade and efficient supply." },
  { icon: Eye, t: "Our vision", d: "To be the most trusted trading gateway between global suppliers and the markets of the UAE and the GCC." },
  { icon: Handshake, t: "Our values", d: "Integrity in every deal, quality in every shipment and long-term partnership with every client." },
];

export default function About() {
  return (
    <>
      <PageHeader title="About us" />

      <div className="container" style={{ marginTop: 56 }}>
        <Photo hideIfMissing className="detail-photo wide" src="/about.svg" alt="Prime Gate General Trading" />
      </div>

      <section className="section">
        <div className="container split">
          <div className="prose">
            <div className="head" style={{ marginBottom: 20 }}>
              <h2>The gate between global supply and local demand</h2>
              <div className="line" />
            </div>
            <p>
              {SITE.name} is a licensed free zone company based in Ajman. We bring together manufacturers,
              distributors and buyers so that good products reach the shelves, offices and workshops of the UAE
              and the wider GCC without delay.
            </p>
            <p>
              Our trade license covers ten activities, from computers and mobile phones to food, cosmetics, auto
              spare parts and office furniture. That range lets us serve as one dependable supplier for businesses
              that would otherwise juggle many.
            </p>
            <Link to="/contact" className="btn btn-gold">Work with us</Link>
          </div>

          <div className="panel kv">
            <div><small>Company</small><b>{SITE.name}</b></div>
            <div><small>Legal status</small><b>{SITE.legal}</b></div>
            <div><small>License number</small><b>{SITE.license}</b></div>
            <div style={{ border: 0, paddingBottom: 0 }}><small>License address</small><b>{SITE.address}</b></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg2)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="grid g3">
            {values.map((v) => (
              <div className="card" key={v.t}>
                <v.icon size={30} color="var(--gold2)" style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 28, marginBottom: 8 }}>{v.t}</h3>
                <p className="muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <h2>Our licensed activities</h2>
            <p>Select an activity to see what we supply.</p>
            <div className="line" />
          </div>
          <div className="btns" style={{ justifyContent: "center" }}>
            {ACTIVITIES.map((a) => (
              <Link key={a.slug} to={`/activities/${a.slug}`} className="btn btn-outline" style={{ padding: "10px 20px", fontSize: 14 }}>
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}