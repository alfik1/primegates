import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, User } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { SITE, ACTIVITIES } from "../data";

const lbl = { display: "block", color: "var(--gold)", fontSize: 13 };

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
      <PageHeader title="Contact us" />

      <section className="section">
        <div className="container contact-grid">
          <div className="grid">
            <div className="card">
              <h3 style={{ fontSize: 30, marginBottom: 6 }}>Get in touch</h3>
              <p className="muted" style={{ marginBottom: 20, fontSize: 15 }}>For all your enquiries, quotations and orders.</p>
              <div className="info-row"><User size={18} /><span><small style={lbl}>Contact person</small>{SITE.contactPerson}</span></div>
              <div className="info-row"><Phone size={18} /><span><small style={lbl}>Mobile</small><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></span></div>
              <div className="info-row"><MessageCircle size={18} /><span><small style={lbl}>WhatsApp</small><a href={SITE.whatsappLink} target="_blank" rel="noreferrer">Chat with us on WhatsApp</a></span></div>
              <div className="info-row"><Mail size={18} /><span><small style={lbl}>General enquiries</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></span></div>
              <div className="info-row"><Mail size={18} /><span><small style={lbl}>Direct email</small><a href={`mailto:${SITE.emailDirect}`}>{SITE.emailDirect}</a></span></div>
              <div className="info-row"><MapPin size={18} /><span><small style={lbl}>Office</small>{SITE.address}, UAE<br />License {SITE.license}</span></div>
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