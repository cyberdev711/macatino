import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero1 from "../../assets/service-detail-1.jpg.asset.json";
import hero2 from "../../assets/service-detail-2.jpg.asset.json";
import hero3 from "../../assets/service-detail-3.jpg.asset.json";
import hero4 from "../../assets/service-detail-4.jpg.asset.json";

const services = {
  "heavy-equipment-logistics": { hero: hero1.url, title: "Heavy Equipment Logistics", subtitle: "Professional transportation services for oversized and heavy cargo, ensuring safe handling and seamless delivery with specialized logistics planning.", route: "Denver → Phoenix", time: "36 Hours", type: "Pharmaceutical Products" },
  "temperature-controlled-shipping": { hero: hero2.url, title: "Temperature-Controlled Shipping", subtitle: "Reliable cold-chain logistics preserving product integrity through precise temperature management and continuous monitoring throughout transit.", route: "Miami → Atlanta", time: "18 Hours", type: "Pharmaceutical Products" },
  "regional-cargo-transport": { hero: hero3.url, title: "Regional Cargo Transport", subtitle: "Fast, dependable regional transportation services connecting key distribution points with optimized routing and consistent delivery schedules.", route: "Dallas → Houston", time: "12 Hours", type: "Industrial Equipment" },
  "express-freight-delivery": { hero: hero4.url, title: "Express Freight Delivery", subtitle: "Time-critical express freight solutions ensuring rapid transit, secure handling, and on-time delivery for urgent shipments across all routes.", route: "Los Angeles → San Francisco", time: "24 Hours", type: "Retail Products" },
};

export const Route = createFileRoute("/service/$slug")({
  head: ({ params }) => ({ meta: [
    { title: `${services[params.slug as keyof typeof services]?.title || "Service"} | Transvia` },
    { name: "description", content: services[params.slug as keyof typeof services]?.subtitle || "Transvia logistics services." },
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
      <p>Our Regional Freight Delivery project focuses on providing fast, reliable, and cost-effective transportation solutions across key regional routes. This project was designed to support businesses that require consistent movement of goods between cities while maintaining strict timelines and safety standards. By leveraging optimized route planning, modern fleet management systems, and experienced logistics professionals, we ensured that shipments were handled with precision from pickup to final delivery. The goal was not only to move goods efficiently but also to create a dependable logistics framework that businesses could rely on daily.</p>
      <h3>Challenge</h3>
      <p>Managing high-volume shipments across regional routes presented several logistical challenges, including traffic congestion, unpredictable delays, and maintaining consistent delivery schedules. Ensuring cargo safety while handling frequent loading and unloading added another layer of complexity. Additionally, coordinating between multiple distribution points required strong communication and real-time visibility to avoid disruptions. The need to reduce transit time while keeping operational costs low made it essential to develop a well-structured and adaptable logistics approach.</p>
      <h3>Solution Provided</h3>
      <p>To overcome these challenges, we implemented a structured logistics strategy that combined technology, planning, and operational expertise:</p>
      <ul><li>Optimized route planning to reduce transit time and fuel consumption</li><li>Real-time tracking systems for complete shipment visibility</li><li>Dedicated fleet management for consistent delivery performance</li><li>Secure handling procedures to minimize damage and loss</li><li>Efficient coordination between pickup and delivery points</li></ul>
      <h3>Results / Outcome</h3>
      <p>The implementation of our logistics strategy resulted in significant improvements in delivery performance and operational efficiency. Transit times were reduced noticeably, allowing businesses to meet tighter deadlines and improve customer satisfaction. Shipment reliability increased with a high on-time delivery rate, while enhanced tracking provided full transparency throughout the process. The project also achieved better cost efficiency through optimized routing and resource utilization. Overall, this solution strengthened regional supply chains and provided clients with a dependable and scalable transport system.</p>
    </section>
    <SiteCta/><SiteFooter/>
  </main>;
}
