import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero from "../../assets/project-hero.png.asset.json";
import one from "../../assets/project-one.jpg.asset.json"; import two from "../../assets/project-two.jpg.asset.json"; import three from "../../assets/project-three.png.asset.json"; import four from "../../assets/service-regional.jpg.asset.json"; import five from "../../assets/service-heavy.jpg.asset.json"; import six from "../../assets/service-express.jpg.asset.json";

const items: [string, string, string, string, string][] = [
  [one.url, "multimodal-cargo-management", "Global", "Multimodal Cargo Management", "Road, rail, sea, and air logistics delivering flexible global supply chain solutions."],
  [two.url, "e-commerce-fulfillment-network", "Global", "E-Commerce Fulfillment Network", "Integrated order processing, inventory, packing, and last-mile delivery."],
  [three.url, "cold-chain-transportation", "Global", "Cold Chain Transportation", "Temperature-controlled logistics with continuous monitoring."],
  [four.url, "express-freight-distribution", "Global", "Express Freight Distribution", "Fast cargo movement with optimized international delivery schedules."],
  [five.url, "supply-chain-logistics", "Supply", "Supply Chain Logistics", "End-to-end logistics support and dependable transport execution."],
  [six.url, "road-freight-transport", "Express", "Road Freight Transport", "Efficient road transport across regional routes."],
];

export const Route = createFileRoute("/project/")({
  head: () => ({ meta: [
    { title: "Industries Served | MACOTINO" },
    { name: "description", content: "MACOTINO supports oil and gas, manufacturing, construction, agriculture, retail, distribution, and international trade." },
    { property: "og:title", content: "Industries Served | MACOTINO" },
    { property: "og:description", content: "Successful logistics projects built on strategy and operational excellence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProjectsPage,
});

function ProjectsPage() {
  return <main><SiteHeader/><section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Industries Served</Eyebrow><h1>Supporting Businesses<br/>Across Key Industries</h1></div></section>
    <section className="section project-page"><h2>Dependable Logistics for Diverse Operations</h2><p className="lead">MACOTINO provides cargo movement and supply chain support tailored to the requirements of businesses across Nigeria.</p><div className="project-grid">{items.map(([img, slug], index) => { const industries = ["Oil & Gas", "Manufacturing", "Construction", "Agriculture", "Retail & Distribution", "Import & Export Businesses"]; const title = industries[index]; return <Link to="/project/$slug" params={{ slug }} key={title}><article className="project"><div className="project-img"><img src={img} alt={title}/><span>Industry</span></div><h3>{title}</h3><p>Professional logistics and cargo support tailored to the needs of {title?.toLowerCase()}.</p></article></Link>; })}</div></section><SiteCta/><SiteFooter/></main>;
}
