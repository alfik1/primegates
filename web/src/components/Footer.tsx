import { Mail, Phone, MapPin, MessageCircle, User } from "lucide-react";
import { SITE, ACTIVITIES } from "@/lib/siteData";
import { CLIENT } from "@/lib/config";

const lbl = { display: "block", color: "var(--gold)", fontSize: 12.5 } as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container f-grid">
        <div>
          <a href="/" className="brand">
            <img src="/primelogo.jpeg" alt="Prime Gate logo" />
            <span><b>Prime Gate</b><small>General Trading</small></span>
          </a>
          <p>{SITE.name}. A free zone trading company based in Ajman, UAE, supplying quality goods across the UAE and the GCC.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href={`${CLIENT}/about`}>About us</a></li>
            <li><a href="/#activities">Activities</a></li>
            <li><a href={`${CLIENT}/gallery`}>Gallery</a></li>
            <li><a href={`${CLIENT}/blog`}>Blog</a></li>
            <li><a href={`${CLIENT}/contact`}>Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="info-row"><User size={18} /><span><small style={lbl}>Contact person</small>{SITE.contactPerson}</span></div>
          <div className="info-row"><Phone size={18} /><span><small style={lbl}>Mobile</small><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></span></div>
          <div className="info-row"><MessageCircle size={18} /><span><small style={lbl}>WhatsApp</small><a href={SITE.whatsappLink} target="_blank" rel="noreferrer">Chat with us on WhatsApp</a></span></div>
          <div className="info-row"><Mail size={18} /><span><small style={lbl}>General enquiries</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></span></div>
          <div className="info-row"><Mail size={18} /><span><small style={lbl}>Direct email</small><a href={`mailto:${SITE.emailDirect}`}>{SITE.emailDirect}</a></span></div>
          <div className="info-row"><MapPin size={18} /><span><small style={lbl}>Office</small>{SITE.address}, UAE<br />License {SITE.license}</span></div>
        </div>
      </div>
      <div className="container copy">
        © 2026 {SITE.name}. All rights reserved. {ACTIVITIES.length} licensed trade activities.
      </div>
    </footer>
  );
}