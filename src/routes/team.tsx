import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/team-hero.png.asset.json";
import t1 from "../assets/team-1.png.asset.json"; import t2 from "../assets/team-2.png.asset.json"; import t3 from "../assets/team-3.png.asset.json"; import t4 from "../assets/team-4.png.asset.json"; import t5 from "../assets/team-5.png.asset.json"; import t6 from "../assets/team-6.png.asset.json"; import t7 from "../assets/team-7.png.asset.json"; import t8 from "../assets/team-8.png.asset.json";

const members = [
  [t1.url, "Albert Flores", "Operations Assistant"],
  [t2.url, "Wade Warren", "Dispatch Executive"],
  [t3.url, "Guy Hawkins", "Transport Coordinator"],
  [t4.url, "Olivia", "Warehouse Supervisor"],
  [t5.url, "Cody Fisher", "Inventory Controller"],
  [t6.url, "Emma", "Procurement Officer"],
  [t7.url, "Jerome Bell", "Supply Chain Coordinator"],
  [t8.url, "Eleanor Pena", "Logistics Operations Manager"],
];

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Our Team | MACOTINO Global Limited" },
    { name: "description", content: "Meet the experienced logistics professionals behind MACOTINO's reliable delivery operations." },
    { property: "og:title", content: "Our Team | MACOTINO Global Limited" },
    { property: "og:description", content: "Meet the experienced logistics professionals behind MACOTINO's reliable delivery operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: TeamPage,
});

function TeamPage() {
  return <main><SiteHeader/>
    <section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Team</Eyebrow><h1>Global Logistics<br/>Operations Team</h1></div></section>
    <section className="section"><Eyebrow>Our Team</Eyebrow><h2>A Dedicated Team Committed to Every Delivery</h2><p className="lead">Our experienced logistics professionals work tirelessly to ensure every shipment is handled with precision, reliability, and exceptional care.</p>
      <div className="team-grid">{members.map(([img, name, role]) => <article className="team-card" key={name}><img src={img} alt={name}/><h3>{name}</h3><p>{role}</p></article>)}</div>
    </section>
    <SiteCta/><SiteFooter/>
  </main>;
}
