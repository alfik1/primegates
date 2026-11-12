import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, ACTIVITIES } from "../data";
import { WEB } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container f-grid">
        <div>
          <a href={WEB} className="brand">
            <img src="/primelogo.jpeg" alt="Prime Gate logo" />
            <span>
              <b>Prime Gate</b>
              <small>General Trading</small>
            </span>
          </a>
          <p>{SITE.name}. A free zone trading company based in Ajman, UAE, supplying quality goods across the UAE and the GCC.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href={WEB}>Home</a></li>
            <li><Link to="/about">About us</Link></li>
            <li><a href={`${WEB}/#activities`}>Activities</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="info-row"><MapPin size={18} /><span>{SITE.address}, UAE<br />License {SITE.license}</span></div>
          <div className="info-row"><Phone size={18} /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></div>
          <div className="info-row"><Mail size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        </div>
      </div>
      <div className="container copy">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. {ACTIVITIES.length} licensed trade activities.
      </div>
    </footer>
  );
}