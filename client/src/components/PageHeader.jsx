import { WEB } from "../config";

export default function PageHeader({ title, crumb }) {
  return (
    <section className="page-hero">
      <div className="container fade">
        <h1>{title}</h1>
        <div className="crumbs">
          <a href={WEB}>Home</a> / {crumb || title}
        </div>
      </div>
    </section>
  );
}