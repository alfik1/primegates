import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { SITE, ACTIVITIES } from "../data";

export default function Contact() {
  const [params] = useSearchParams();
  const pre = ACTIVITIES.find((a) => a.slug === params.get("item"));
  const [f, setF] = useState({ name: "", contact: "", item: pre ? pre.title : "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const text = () =>
    `Hello Prime Gate,\nName: ${f.name}\nContact: ${f.contact}\nInterested in: ${f.item || "General enquiry"}\n\n${f.message}`;

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text())}`, "_blank");
  };
  const sendEmail = () => {
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry: " + (f.item || "General"))}&body=${encodeURIComponent(text())}`;
  };

  return (
    <>
      <PageHeader title="Contact us" ar="اتصل بنا" />

      <section className="section">
        <div className="container contact-grid">
          <div className="grid">
            <div className="card">
              <h3 style={{ fontSize: 30, marginBottom: 18 }}>Get in touch</h3>
              <div className="info-row"><Phone size={18} /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></div>
              <div className="info-row"><Mail size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              <div className="info-row">
                <MapPin size={18} />
                <span>{SITE.address}<br />License {SITE.license}<br /><span className="ar" style={{ color: "var(--gold2)" }}>{SITE.arAddress}</span></span>
              </div>
            </div>
            <iframe
              className="map"
              title="Prime Gate office location"
              loading="lazy"
              src="https://maps.google.com/maps?q=Amber%20Gem%20Tower%20Ajman&output=embed"
            />
          </div>

          <form className="card form" onSubmit={sendWhatsApp}>
            <h3 style={{ fontSize: 30 }}>Send an enquiry</h3>
            <div className="row2">
              <label>Your name<input required value={f.name} onChange={set("name")} placeholder="Full name" /></label>
              <label>Phone or email<input required value={f.contact} onChange={set("contact")} placeholder="How can we reach you?" /></label>
            </div>
            <label>
              Activity
              <select value={f.item} onChange={set("item")}>
                <option value="">General enquiry</option>
                {ACTIVITIES.map((a) => <option key={a.slug} value={a.title}>{a.title}</option>)}
              </select>
            </label>
            <label>Message<textarea required value={f.message} onChange={set("message")} placeholder="Tell us what you need, quantities and delivery location" /></label>
            <div className="btns">
              <button type="submit" className="btn btn-gold">Send on WhatsApp</button>
              <button type="button" className="btn btn-outline" onClick={sendEmail}>Send by email</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}