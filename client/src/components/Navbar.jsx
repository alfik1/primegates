import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { WEB } from "../config";

const links = [
  { l: "Home", h: WEB, ext: true },
  { l: "About", h: "/about" },
  { l: "Activities", h: `${WEB}/#activities`, ext: true },
  { l: "Gallery", h: "/gallery" },
  { l: "Blog", h: "/blog" },
  { l: "Contact", h: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const item = (x, drawer) => {
    const base = drawer ? "dl" : "";
    if (x.ext) {
      const active = x.l === "Activities" && pathname.startsWith("/activities");
      return (
        <a key={x.l} href={x.h} className={`${base} ${active ? "active" : ""}`}>
          {x.l}
        </a>
      );
    }
    return (
      <NavLink key={x.l} to={x.h} className={({ isActive }) => `${base} ${isActive ? "active" : ""}`}>
        {x.l}
      </NavLink>
    );
  };

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href={WEB} className="brand">
            <img src="/primelogo.jpeg" alt="Prime Gate logo" />
            <span>
              <b>Prime Gate</b>
              <small>General Trading</small>
            </span>
          </a>

          <nav className="nav-links">{links.map((x) => item(x, false))}</nav>

          <Link to="/contact" className="btn btn-gold nav-cta">
            Get a quote <ArrowRight size={16} />
          </Link>

          <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div className={`overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <span className="gold" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, fontWeight: 700 }}>
            Prime Gate
          </span>
          <button className="burger" style={{ display: "inline-flex" }} aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        {links.map((x) => item(x, true))}
        <Link to="/contact" className="btn btn-gold" style={{ marginTop: 16 }}>
          Get a quote
        </Link>
      </aside>
    </>
  );
}