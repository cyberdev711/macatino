import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Action, Eyebrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/hero.jpg.asset.json";
import heavy from "../assets/service-heavy.jpg.asset.json";
import temp from "../assets/service-temp.jpg.asset.json";
import regional from "../assets/service-regional.jpg.asset.json";
import express from "../assets/service-express.jpg.asset.json";
import projectOne from "../assets/project-one.jpg.asset.json";
import projectTwo from "../assets/project-two.jpg.asset.json";
import projectThree from "../assets/project-three.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "MACOTINO | Freight Forwarding & Logistics" },
    { name: "description", content: "Trusted freight forwarding, customs clearance, cargo handling, and bonded terminal services in Nigeria." },
    { property: "og:title", content: "MACOTINO | Freight Forwarding & Logistics" },
    { property: "og:description", content: "Trusted freight forwarding, customs clearance, cargo handling, and bonded terminal services in Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const services: [string, string, string][] = [
  [heavy.url, "heavy-equipment-logistics", "Freight Forwarding"], [temp.url, "temperature-controlled-shipping", "Customs Clearance"],
  [regional.url, "regional-cargo-transport", "Bonded Terminal Operations"], [express.url, "express-freight-delivery", "Cargo Handling & Logistics"],
];
const projects: [string, string, string, string][] = [
  [projectOne.url, "multimodal-cargo-management", "Multimodal Cargo Management", "Comprehensive cargo transportation combining road, rail, sea, and air logistics."],
  [projectTwo.url, "e-commerce-fulfillment-network", "E-Commerce Fulfillment Network", "Integrated fulfillment solutions supporting inventory, packing, and last-mile delivery."],
  [projectThree.url, "cold-chain-transportation", "Cold Chain Transportation", "Temperature-controlled logistics preserving product quality through every mile."],
];
function Index() {
  return <main id="top">
    <SiteHeader/>
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, var(--overlay-strong), var(--overlay-soft)), url(${hero.url})` }}>
      <div className="hero-inner reveal"><h1>Freight Forwarding &amp;<br/>Logistics Solutions You Can Trust</h1><p>From customs clearance to cargo handling and bonded terminal operations, MACOTINO Global Limited helps businesses move goods efficiently through Nigeria's ports and supply chain network.</p><Action/></div>
    </section>

    <section id="about" className="section intro"><Eyebrow>ABOUT MACOTINO</Eyebrow><h2>MACOTINO Global Limited is a trusted logistics and freight forwarding company providing comprehensive cargo movement, customs clearance, and supply chain support services.</h2><div className="stats"><div><p>Over the years, we have built a reputation for professionalism, reliability, and efficient cargo management, serving businesses across multiple industries.</p></div><div><p>Our commitment is simple: ensuring every shipment is handled with precision, compliance, and attention to detail.</p></div></div></section>

    <section id="services" className="section dark-band"><Eyebrow>Core Services</Eyebrow><h2>Comprehensive Cargo and Supply Chain Support</h2><div className="service-grid">{services.map(([img,slug,title],i)=><Link to="/service/$slug" params={{slug}} key={title}><article className="service"><img src={img} alt={title}/><div><span>0{i+1}</span><h3>{title}</h3><ArrowUpRight/></div></article></Link>)}</div></section>

    <section className="section works"><Eyebrow>Bonded Terminal Services</Eyebrow><h2>Supporting Efficient Cargo Movement</h2><div className="work-grid"><img src={projectOne.url} alt="Bonded terminal cargo operations"/><div className="steps"><div className="step"><span>01</span><div><h3>Professional Terminal Support</h3><p>Bonded terminal operations play a critical role in modern logistics. MACOTINO provides solutions that support efficient cargo storage, handling, and processing under customs supervision, helping clients reduce delays and improve operational efficiency.</p></div></div></div></div></section>

    <section id="projects" className="section projects"><Eyebrow>Industries Served</Eyebrow><h2>Logistics Support Across Essential Industries</h2><div className="project-grid">{projects.map(([img,slug,title], index)=><Link to="/project/$slug" params={{slug}} key={title}><article className="project"><div className="project-img"><img src={img} alt={title}/><span>Industry</span></div><h3>{["Oil & Gas","Manufacturing","Construction"][index]}</h3><p>{["Specialized cargo coordination for oil and gas operations.","Dependable logistics support for manufacturing supply chains.","Efficient movement of equipment and materials for construction projects."][index]}</p></article></Link>)}</div></section>

    <section className="section why"><Eyebrow>Why Businesses Choose MACOTINO</Eyebrow><h2>Professional, Reliable, and Client-Focused Logistics</h2><div className="why-grid">{[["01","Industry Expertise","Deep understanding of freight forwarding, customs procedures, and cargo operations."],["02","Reliable Operations","A proven commitment to timely and professional service delivery."],["03","Strategic Partnerships","Strong working relationships across the logistics and maritime ecosystem."],["04","Customer Focus","Solutions tailored to the unique needs of every client."]].map(([n,t,copy])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{copy}</p></article>)}</div></section>

    <section id="contact" className="cta" style={{ backgroundImage:`linear-gradient(var(--overlay-strong),var(--overlay-strong)),url(${projectThree.url})` }}><Eyebrow>CONTACT US</Eyebrow><h2>Let's Discuss Your Logistics Requirements</h2><p>Whether you require freight forwarding, customs clearance, bonded terminal support, or logistics services, our team is ready to help.</p><Action>Contact Us</Action></section>
    <SiteFooter/>
  </main>;
}