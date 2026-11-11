"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { CLIENT } from "@/lib/config";

const links = [
  { l: "Home", h: "/" },
  { l: "About", h: `${CLIENT}/about` },
  { l: "Activities", h: "/#activities" },
  { l: "Gallery", h: `${CLIENT}/gallery` },
  { l: "Blog", h: `${CLIENT}/blog` },
  { l: "Contact", h: `${CLIENT}/contact` },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <img src="/primelogo.jpeg" alt="Prime Gate logo" />
            <span>
              <b>Prime Gate</b>
              <small>General Trading</small>
            </span>
          </a>

          <nav className="nav-links">
            {links.map((x) => (
              <a key={x.l} href={x.h} className={x.l === "Home" ? "active" : ""}>{x.l}</a>
            ))}
          </nav>

          <a href={`${CLIENT}/contact`} className="btn btn-gold nav-cta">
            Get a quote <ArrowRight size={16} />
          </a>

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
        {links.map((x) => (
          <a key={x.l} href={x.h} className={`dl ${x.l === "Home" ? "active" : ""}`} onClick={() => setOpen(false)}>
            {x.l}
          </a>
        ))}
        <a href={`${CLIENT}/contact`} className="btn btn-gold" style={{ marginTop: 16 }}>Get a quote</a>
      </aside>
    </>
  );
}