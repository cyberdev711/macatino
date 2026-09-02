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
    { title: `${projects[params.slug as keyof typeof projects]?.title || "Project"} | Transvia` },
    { name: "description", content: projects[params.slug as keyof typeof projects]?.subtitle || "Transvia logistics projects." },
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
      <div className="detail-hero-inner"><Eyebrow>Project Detail</Eyebrow><h1>{p.title}</h1><p>{p.subtitle}</p></div>
    </section>
    <section className="detail-body">
      <h3>Overview</h3>
      <p>The International Transport Solutions project provides global logistics support for businesses requiring secure and efficient cross-border transportation services. Our international shipping operations are designed to simplify complex logistics processes while ensuring reliable cargo movement between countries and global trade regions.</p>
      <h3>Global Shipping Operations</h3>
      <p>We manage international transportation through carefully planned shipping routes, customs coordination, and freight handling systems. By maintaining strong operational partnerships and organized logistics management, we ensure smooth cargo transportation across international markets and transportation networks.</p>
      <h3>Customs & Compliance</h3>
      <p>International logistics requires strict compliance with shipping regulations, customs documentation, and cargo inspection standards. Our experienced logistics team handles all necessary documentation and regulatory processes to reduce shipping delays and maintain efficient cross-border transportation operations.</p>
      <h3>Tracking & Security</h3>
      <p>To maintain shipment visibility and cargo protection, we use advanced tracking technologies and secure freight management systems. Clients receive real-time updates throughout the shipping process, providing complete transparency and confidence in international delivery operations.</p>
      <h3>Project Success</h3>
      <p>The International Transport Solutions project successfully improved global shipping efficiency, reduced transportation delays, and enhanced delivery reliability for international clients. Businesses benefited from streamlined logistics coordination, secure cargo handling, and dependable transportation support across global markets.</p>
    </section>
    <SiteCta/><SiteFooter/>
  </main>;
}
