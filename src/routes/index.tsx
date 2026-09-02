import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Quote } from "lucide-react";
import { Action, Eyebrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/hero.jpg.asset.json";
import heavy from "../assets/service-heavy.jpg.asset.json";
import temp from "../assets/service-temp.jpg.asset.json";
import regional from "../assets/service-regional.jpg.asset.json";
import express from "../assets/service-express.jpg.asset.json";
import process from "../assets/process.jpg.asset.json";
import projectOne from "../assets/project-one.jpg.asset.json";
import projectTwo from "../assets/project-two.jpg.asset.json";
import projectThree from "../assets/project-three.png.asset.json";
import cta from "../assets/cta.png.asset.json";
import blogOne from "../assets/blog-one.png.asset.json";
import blogTwo from "../assets/blog-two.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Transvia | Road Freight Solutions" },
    { name: "description", content: "Fast, safe, and sustainable road freight and logistics solutions." },
    { property: "og:title", content: "Transvia | Road Freight Solutions" },
    { property: "og:description", content: "Fast, safe, and sustainable road freight and logistics solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const services = [
  [heavy.url, "Heavy Equipment Logistics"], [temp.url, "Temperature-Controlled Shipping"],
  [regional.url, "Regional Cargo Transport"], [express.url, "Express Freight Delivery"],
];
const projects = [
  [projectOne.url, "Multimodal Cargo Management", "Comprehensive cargo transportation combining road, rail, sea, and air logistics."],
  [projectTwo.url, "E-Commerce Fulfillment Network", "Integrated fulfillment solutions supporting inventory, packing, and last-mile delivery."],
  [projectThree.url, "Cold Chain Transportation", "Temperature-controlled logistics preserving product quality through every mile."],
];
const faqs = [
  ["What types of goods do you transport?", "We handle commercial goods, industrial materials, and packaged products across all routes."],
  ["How can I track my shipment?", "Track your shipment in real time with location, status, and estimated delivery updates."],
  ["Do you offer express delivery services?", "Yes, our express delivery options keep time-sensitive shipments moving safely."],
  ["How do you ensure the safety of goods?", "Strict handling, secure packaging, and continuous monitoring protect every shipment."],
];

function Index() {
  return <main id="top">
    <SiteHeader/>
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, var(--overlay-strong), var(--overlay-soft)), url(${hero.url})` }}>
      <div className="hero-inner reveal"><h1>Fast &amp; Sustainable<br/>Road Freight Solutions</h1><p>Reliable logistics solutions designed for speed, safety, and sustainability—moving your cargo efficiently across every mile.</p><Action/></div>
    </section>

    <section id="about" className="section intro"><Eyebrow>ABOUT US</Eyebrow><h2>Delivering more than just cargo—we drive efficiency, reliability, and sustainable logistics solutions that power businesses forward and keep supply chains moving without interruption.</h2><div className="stats"><div><strong>12K+</strong><span>Shipments Delivered</span></div><div><strong>98%</strong><span>Delivery Rate</span></div><div><strong>120+</strong><span>Logistics Partners</span></div></div></section>

    <section id="services" className="section dark-band"><Eyebrow>Our Services</Eyebrow><h2>Comprehensive Logistics Solutions Built for Speed and Reliability</h2><div className="service-grid">{services.map(([img,title],i)=><article className="service" key={title}><img src={img} alt={title}/><div><span>0{i+1}</span><h3>{title}</h3><ArrowUpRight/></div></article>)}</div></section>

    <section className="section works"><Eyebrow>How It Works</Eyebrow><h2>How We Move Your Shipments with Precision and Care</h2><div className="work-grid"><img src={process.url} alt="Cargo logistics facility"/><div className="steps">{[["01","Smart Order Initiation","We capture your shipment details accurately, defining every requirement from the start."],["02","Efficient Handling & Transit","From pickup to routing, your cargo is managed with optimized and secure systems."],["03","Real-Time Tracking & Delivery","Stay informed at every step with live updates and complete delivery confirmation."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}</div></div></section>

    <section id="projects" className="section projects"><Eyebrow>Our Projects</Eyebrow><h2>Powering Smarter Transport Through Proven Logistics Projects</h2><div className="project-grid">{projects.map(([img,title,copy])=><article className="project" key={title}><div className="project-img"><img src={img} alt={title}/><span>Global</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="section why"><Eyebrow>Why Choose Us</Eyebrow><h2>Why Businesses Choose Us For Their Logistics &amp; Shipping</h2><div className="why-grid">{[["01","Fast & Secure Delivery"],["02","Secure Cargo Handling"],["03","Real-Time Tracking System"]].map(([n,t])=><article key={n}><span>{n}</span><h3>{t}</h3><p>Reliable, carefully managed logistics with complete visibility throughout every stage of transportation.</p></article>)}</div></section>

    <section className="section testimonial"><Eyebrow>Testimonials</Eyebrow><div className="quote-grid"><div><h2>What Our Clients Say About Our Logistics Services</h2><strong>500+</strong><p>Businesses Served Globally</p></div><div className="quote"><Quote/><h3>“Transvia delivers on time with reliable tracking and smooth logistics every step of the way.”</h3><div><b>Michael Carter</b><span>Supply Chain Manager</span></div></div></div></section>

    <section className="section faq"><Eyebrow>FAQ</Eyebrow><h2>Answers to Common Questions About Our Logistics</h2><div>{faqs.map((f,i)=><details key={f[0]}><summary><span>0{i+1}</span>{f[0]}<ChevronDown/></summary><p>{f[1]}</p></details>)}</div></section>

    <section id="blog" className="section blog"><Eyebrow>Our Blog</Eyebrow><h2>Stay Informed with Logistics Trends and Insights</h2><div className="blog-grid">{[[blogOne.url,"May 26, 2026","Common Logistics Challenges and Solutions for Growing Companies"],[blogTwo.url,"May 24, 2026","Best Logistics Management Techniques for Small Business Operations"]].map(x=><article key={x[2]}><img src={x[0]} alt={x[2]}/><span>{x[1]}</span><h3>{x[2]}</h3></article>)}</div></section>

    <section id="contact" className="cta" style={{ backgroundImage:`linear-gradient(var(--overlay-strong),var(--overlay-strong)),url(${cta.url})` }}><Eyebrow>LET'S MOVE</Eyebrow><h2>Start Your Next Delivery Today</h2><p>Let our expert logistics team handle your shipment with precision, speed, and complete transparency.</p><Action>Request a Quote</Action></section>
    <SiteFooter/>
  </main>;
}