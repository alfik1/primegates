import { ArrowRight, ShieldCheck, Globe, Tag, Truck } from "lucide-react";
import ActivityIcon from "@/components/ActivityIcon";
import Photo from "@/components/Photo";
import { ART } from "@/lib/artwork";
import { SITE, ACTIVITIES } from "@/lib/siteData";
import { CLIENT } from "@/lib/config";

const why = [
  { icon: ShieldCheck, t: "Quality checked", d: "Products are sourced from vetted suppliers and inspected before they ship." },
  { icon: Globe, t: "Import and export", d: "We handle sourcing, shipping and the paperwork across borders." },
  { icon: Tag, t: "Fair pricing", d: "Competitive prices for bulk buyers, retailers and individual customers." },
  { icon: Truck, t: "On-time delivery", d: "Clear timelines and responsive support from order to arrival." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/home/home.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so the text stays readable */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.35) 100%)",
          }}
        />

        <div className="container hero-grid" style={{ position: "relative", zIndex: 1 }}>
          <div className="fade">
            <p className="hero-sub">{SITE.name}, Ajman, UAE</p>
            <h1>Your gateway to premium trade across the UAE and the GCC.</h1>
            <p className="lead">
              Ten licensed trade activities under one roof: electronics, food and beverages, beauty, cleaning,
              auto parts and office furniture, supplied wholesale and retail.
            </p>
            <div className="btns">
              <a href="#activities" className="btn btn-gold">Explore our activities</a>
              <a href={`${CLIENT}/contact`} className="btn btn-outline">Contact us</a>
            </div>
          </div>

          <div className="hero-visual fade" style={{ animationDelay: ".2s" }}>
            <div className="gate">
              <div className="gate-in">
                <img src="/primelogo.jpeg" alt="Prime Gate General Trading logo" />
              </div>
            </div>
            <Photo className="hero-chip c1" art={ART["general-trading"]} alt="General trading" />
            <Photo className="hero-chip c2" art={ART["e-commerce"]} alt="E-commerce" />
            <Photo className="hero-chip c3" art={ART["mobile-phones"]} alt="Mobile phones" />
            <Photo className="hero-chip c4" art={ART["perfumes-cosmetics"]} alt="Perfumes and cosmetics" />
          </div>
        </div>
      </section>

      {/* BAND */}
      <div className="band">
        <div className="container band-in">
          <span>Wholesale and retail</span>
          <span>Import and export</span>
          <span>{ACTIVITIES.length} trade categories</span>
          <span>UAE licensed free zone entity</span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="head" style={{ marginBottom: 0 }}>
              <h2>A trading house built for the region&apos;s growing market</h2>
              <div className="line" />
            </div>
            <p className="muted" style={{ marginTop: 24 }}>
              Prime Gate General Trading connects UAE and GCC businesses with dependable products and
              suppliers. From a single office chair to a container of spare parts, we manage sourcing,
              quality and delivery so you can focus on selling.
            </p>
            <ul className="checks">
              <li>Licensed free zone entity with ten approved trade activities</li>
              <li>Bulk pricing for retailers, offices and distributors</li>
              <li>Responsive support for every order</li>
            </ul>
            <a href={`${CLIENT}/about`} className="btn btn-outline">Read our story</a>
          </div>

          <div className="panel kv">
            <div><small>Company</small><b>{SITE.name}</b></div>
            <div><small>Legal status</small><b>{SITE.legal}</b></div>
            <div><small>License number</small><b>{SITE.license}</b></div>
            <div style={{ border: 0, paddingBottom: 0 }}><small>Office</small><b>{SITE.address}</b></div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section" id="activities" style={{ background: "var(--bg2)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="head">
            <h2>What we trade</h2>
            <p>Every activity below is covered by our trade license. Select one to see what we supply and request a quote.</p>
            <div className="line" />
          </div>

          <div className="rows">
            {ACTIVITIES.map((a) => (
              <a key={a.slug} href={`${CLIENT}/activities/${a.slug}`} className="row">
                <div className="row-title">
                  <Photo className="row-icon" src={`${CLIENT}/activities/${a.slug}-1.jpg`} art={ART[a.slug]} alt={a.title} fallback={<ActivityIcon name={a.icon} />} />
                  <div>
                    <h3>{a.title}</h3>
                  </div>
                </div>
                <div className="row-body">
                  <p className="short">{a.short}</p>
                  <p className="med">{a.medium}</p>
                </div>
                <ArrowRight className="go" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container">
          <div className="head">
            <h2>Why businesses choose Prime Gate</h2>
            <div className="line" />
          </div>
          <div className="why">
            {why.map((w) => (
              <div key={w.t}>
                <w.icon size={30} />
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingBottom: 60 }}>
        <div className="cta">
          <h2>Tell us what you need to source</h2>
          <p>Send your product list or requirements and we will reply with availability and pricing.</p>
          <div className="btns">
            <a href={`${CLIENT}/contact`} className="btn btn-gold">Request a quote</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}