import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero1 from "../../assets/project-detail-1.jpg.asset.json";
import hero2 from "../../assets/project-detail-2.jpg.asset.json";
import hero3 from "../../assets/project-detail-3.png.asset.json";
import hero4 from "../../assets/project-detail-4.jpg.asset.json";

const projects = {
  "multimodal-cargo-management": { hero: hero1.url, title: "Multimodal Cargo Management", subtitle: "Comprehensive cargo transportation combining road, rail, sea, and air logistics to deliver flexible, cost-effective, and reliable supply chain solutions." },
  "e-commerce-fulfillment-network": { hero: hero2.url, title: "E-Commerce Fulfillment Network", subtitle: "Integrated fulfillment solutions supporting order processing, inventory management, packing, and last-mile delivery with speed, accuracy, and efficiency." },
  "cold-chain-transportation": { hero: hero3.url, title: "Cold Chain Transportation", subtitle: "Temperature-controlled logistics solutions preserving product quality through precise handling, continuous monitoring, and dependable refrigerated transportation services." },
  "express-freight-distribution": { hero: hero4.url, title: "Express Freight Distribution", subtitle: "Reliable freight distribution services ensuring fast cargo movement, optimized delivery schedules, and secure transportation across domestic and international networks." },
};

export const Route = createFileRoute("/project/$slug")({
  head: ({ params }) => ({ meta: [
    { title: `${projects[params.slug as keyof typeof projects]?.title || "Industry"} | MACOTINO` },
    { name: "description", content: projects[params.slug as keyof typeof projects]?.subtitle || "MACOTINO logistics and cargo support." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const p = projects[slug as keyof typeof projects];
  if (!p) return <main><SiteHeader/><section className="section"><p>Project not found.</p><Link to="/project">Back to projects</Link></section><SiteFooter/></main>;
  return <main><SiteHeader/>
    <section className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg,transparent,var(--overlay-strong)),url(${p.hero})` }}>
      <div className="detail-hero-inner"><Eyebrow>Industry Support</Eyebrow><h1>{p.title}</h1><p>{p.subtitle}</p></div>
    </section>
    <section className="detail-body">
      <h3>Overview</h3>
      <p>MACOTINO Global Limited provides comprehensive cargo movement, customs clearance, and supply chain support for businesses across multiple industries.</p>
      <h3>Global Shipping Operations</h3>
      <p>We coordinate freight movement through sea, air, and land channels while supporting efficient cargo handling throughout Nigeria's ports and supply chain network.</p>
      <h3>Customs & Compliance</h3>
      <p>Our team supports fast and compliant customs documentation and cargo release procedures, helping clients navigate international trade requirements with confidence.</p>
      <h3>Tracking & Security</h3>
      <p>Every shipment is handled with professionalism, precision, compliance, and attention to detail.</p>
      <h3>Project Success</h3>
      <p>Our bonded terminal and logistics solutions help reduce delays, improve operational efficiency, and provide dependable support for each client's unique requirements.</p>
    </section>
    <SiteCta/><SiteFooter/>
  </main>;
}
