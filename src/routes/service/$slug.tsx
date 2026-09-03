import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero1 from "../../assets/service-detail-1.jpg.asset.json";
import hero2 from "../../assets/service-detail-2.jpg.asset.json";
import hero3 from "../../assets/service-detail-3.jpg.asset.json";
import hero4 from "../../assets/service-detail-4.jpg.asset.json";

const services = {
  "heavy-equipment-logistics": { hero: hero1.url, title: "Freight Forwarding", subtitle: "Efficient coordination of cargo movement through sea, air, and land transportation channels.", route: "Sea • Air • Land", time: "Coordinated", type: "Cargo Movement" },
  "temperature-controlled-shipping": { hero: hero2.url, title: "Customs Clearance", subtitle: "Fast and compliant processing of customs documentation and cargo release procedures.", route: "Nigeria's Ports", time: "Efficient", type: "Customs Processing" },
  "regional-cargo-transport": { hero: hero3.url, title: "Bonded Terminal Operations", subtitle: "Professional cargo handling and storage solutions within customs-approved bonded facilities.", route: "Bonded Facilities", time: "Supervised", type: "Cargo Storage" },
  "express-freight-delivery": { hero: hero4.url, title: "Cargo Handling & Logistics", subtitle: "End-to-end logistics support designed to streamline supply chain operations.", route: "End-to-End", time: "Reliable", type: "Supply Chain" },
};

export const Route = createFileRoute("/service/$slug")({
  head: ({ params }) => ({ meta: [
    { title: `${services[params.slug as keyof typeof services]?.title || "Service"} | MACOTINO` },
    { name: "description", content: services[params.slug as keyof typeof services]?.subtitle || "MACOTINO logistics services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const s = services[slug as keyof typeof services];
  if (!s) return <main><SiteHeader/><section className="section"><p>Service not found.</p><Link to="/service">Back to services</Link></section><SiteFooter/></main>;
  return <main><SiteHeader/>
    <section className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg,transparent,var(--overlay-strong)),url(${s.hero})` }}>
      <div className="detail-hero-inner"><Eyebrow>Service Detail</Eyebrow><h1>{s.title}</h1><p>{s.subtitle}</p>
        <dl className="detail-meta"><div><dt>Route</dt><dd>{s.route}</dd></div><div><dt>Time</dt><dd>{s.time}</dd></div><div><dt>Type</dt><dd>{s.type}</dd></div></dl>
      </div>
    </section>
    <section className="detail-body">
      <h3>Overview</h3>
      <p>MACOTINO Global Limited provides comprehensive cargo movement, customs clearance, and supply chain support services. Every shipment is handled with precision, compliance, and attention to detail.</p>
      <h3>Challenge</h3>
      <p>Moving goods through ports and supply chain networks requires careful documentation, professional handling, regulatory compliance, and dependable coordination among multiple stakeholders.</p>
      <h3>Solution Provided</h3>
      <p>To overcome these challenges, we implemented a structured logistics strategy that combined technology, planning, and operational expertise:</p>
      <ul><li>Freight forwarding through sea, air, and land channels</li><li>Fast and compliant customs clearance support</li><li>Professional handling and storage in bonded facilities</li><li>End-to-end cargo and logistics coordination</li><li>Import and export support for international trade</li></ul>
      <h3>Results / Outcome</h3>
      <p>Our solutions help clients reduce delays, improve operational efficiency, and move cargo with confidence through Nigeria's ports and wider supply chain network.</p>
    </section>
    <SiteCta/><SiteFooter/>
  </main>;
}
