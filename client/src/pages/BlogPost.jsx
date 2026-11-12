import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Photo from "../components/Photo.jsx";
import { POSTS } from "../data";
import { fmt } from "./Blog.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const p = POSTS.find((x) => x.slug === slug);

  if (!p) {
    return (
      <>
        <PageHeader title="Post not found" crumb="Blog" />
        <section className="section container" style={{ textAlign: "center" }}>
          <Link to="/blog" className="btn btn-gold">Back to blog</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={p.title} crumb="Blog" />
      <section className="section">
        <div className="container prose" style={{ maxWidth: 820 }}>
          <Photo hideIfMissing className="detail-photo" src={`/blog/${p.slug}.svg`} alt={p.title} />
          <span className="tag">{p.tag}</span>
          <div className="meta" style={{ marginBottom: 26 }}>{fmt(p.date)}</div>
          {p.body.map((t, i) => <p key={i}>{t}</p>)}
          <div className="btns" style={{ marginTop: 30 }}>
            <Link to="/blog" className="btn btn-outline"><ArrowLeft size={16} /> All posts</Link>
            <Link to="/contact" className="btn btn-gold">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}