import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/pricing-hero.png.asset.json";

const plans = [
  { name: "Basic Cargo Plan", desc: "Personal shipments, & standard cargo", price: "$49", features: ["Domestic & Regional Delivery", "Standard Shipping Time", "Basic Shipment Tracking", "Email Support", "Secure Cargo Handling"], premium: false },
  { name: "Premium Supply Plan", desc: "Enterprise-level logistics operations", price: "$200", features: ["Advanced Cargo Monitoring", "Dedicated Account Manager", "Fast Priority Shipping", "Warehousing & Distribution", "Customs Clearance Support", "24/7 Customer Assistance"], premium: true },
];

const compareRows = [
  ["Monthly Shipments", "Up to 100", "Up to 500", "Unlimited"],
  ["Real-Time Tracking", "—", "✓", "✓"],
  ["Analytics", "Basic", "Advanced", "Advanced"],
  ["Prediction AI", "—", "—", "✓"],
  ["Priority Support", "—", "✓", "✓"],
  ["Dedicated Manager", "—", "✓", "✓"],
  ["Global Shipping", "Economy Only", "Regional", "Global"],
  ["Custom Integration", "—", "—", "✓"],
  ["Enterprise Security", "Standard", "Enhanced", "Unlimited"],
];

const testimonials = [
  { text: "MACOTINO delivers on time with reliable tracking and smooth logistics every step of the way.", name: "Michael Carter", role: "Supply Chain Manager" },
  { text: "Reliable service, safe handling, and always on-time delivery. Highly recommended.", name: "Daniel Foster", role: "Supply Chain Manager" },
  { text: "Excellent service with safe handling and fast, consistent delivery. Highly recommended.", name: "Sarah Johnson", role: "Operations Director" },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing | MACOTINO Global Limited Plans" },
    { name: "description", content: "Transparent logistics pricing plans for personal shipments and enterprise-level operations." },
    { property: "og:title", content: "Pricing | MACOTINO Global Limited Plans" },
    { property: "og:description", content: "Transparent logistics pricing plans for personal shipments and enterprise-level operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PricingPage,
});

function PricingPage() {
  return <main><SiteHeader/>
    <section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Pricing</Eyebrow><h1>Transparent Logistics<br/>Pricing Plans</h1></div></section>
    <section className="section"><Eyebrow>Our Pricing</Eyebrow><h2>Stay Informed with Logistics Trends and Insights</h2><p className="lead">Explore the latest logistics trends, industry updates, and expert insights to optimize your supply chain and stay ahead of the competition.</p>
      <div className="pricing-grid">{plans.map(p => <div className={`price-card${p.premium ? " premium" : ""}`} key={p.name}><h3>{p.name}</h3><p className="price-desc">{p.desc}</p><div className="price">{p.price}</div><p className="price-sub">/ Per Month</p><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul><button className="form-submit">Schedule Now</button></div>)}</div>
      <div className="pricing-stats">{[["15+","Years of Experience"],["500k+","Successful Deliveries"],["110+","Countries Served"],["90%","On-Time Delivery Rate"]].map(x => <div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>
    </section>
    <section className="section"><Eyebrow>Compare</Eyebrow><h2>Compare our Solution</h2><p className="lead">Discover how our reliable logistics solutions deliver greater efficiency, transparency, and value compared to traditional transportation services.</p>
      <table className="compare-table"><thead><tr><th>Features</th><th>Basic</th><th>Premium</th><th>Standard</th></tr></thead><tbody>{compareRows.map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>)}</tbody></table>
    </section>
    <section className="section dark-band"><Eyebrow>Business</Eyebrow><h2>Why Businesses Choose MACOTINO</h2><div className="feature-grid">{[["Real-Time Tracking","Monitor shipments at every stage with complete transparency."],["Global Coverage","Access reliable transportation networks across international borders worldwide."],["Fast Delivery","Optimized routes and efficient operations ensure timely arrivals always."],["Dedicated Support","Expert logistics professionals available whenever you need expert support."]].map((x, i) => <article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="section"><Eyebrow>Testimonials</Eyebrow><h2>What Our Clients Say About Our Logistics Services</h2><div className="testimonial-slider">{testimonials.map(t => <div className="testimonial-card" key={t.name}><Quote/><h3>"{t.text}"</h3><div><b>{t.name}</b><span>{t.role}</span></div></div>)}</div></section>
    <SiteCta/><SiteFooter/>
  </main>;
}
