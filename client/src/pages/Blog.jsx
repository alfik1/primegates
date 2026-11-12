import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { POSTS } from "../data";

export const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      <section className="section">
        <div className="container grid g2">
          {POSTS.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="card post">
              <div className="post-art"><Newspaper size={44} /></div>
              <div className="post-body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p className="muted">{p.excerpt}</p>
                <div className="meta">{fmt(p.date)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}