import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero from "../../assets/service-hero.png.asset.json";
import heavy from "../../assets/service-heavy.jpg.asset.json"; import temp from "../../assets/service-temp.jpg.asset.json"; import regional from "../../assets/service-regional.jpg.asset.json"; import express from "../../assets/service-express.jpg.asset.json"; import five from "../../assets/service-five.jpg.asset.json"; import six from "../../assets/service-six.png.asset.json"; import seven from "../../assets/service-seven.jpg.asset.json"; import eight from "../../assets/service-eight.jpg.asset.json";

const items: [string, string, string][] = [
  [heavy.url, "heavy-equipment-logistics", "Freight Forwarding"],
  [temp.url, "temperature-controlled-shipping", "Customs Clearance"],
  [regional.url, "regional-cargo-transport", "Bonded Terminal Operations"],
  [express.url, "express-freight-delivery", "Cargo Handling & Logistics"],
  [five.url, "regional-freight-delivery", "Import & Export Support"],
];

export const Route = createFileRoute("/service/")({
  head: () => ({ meta: [
    { title: "Freight & Logistics Services | MACOTINO" },
    { name: "description", content: "Explore MACOTINO freight forwarding, customs clearance, bonded terminal, cargo handling, and trade support services." },
    { property: "og:title", content: "Freight & Logistics Services | MACOTINO" },
    { property: "og:description", content: "Professional freight, customs, terminal, cargo, and import-export support services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});

function ServicesPage() {
  return <main><SiteHeader/><section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Core Services</Eyebrow><h1>Freight &amp; Logistics<br/>Solutions You Can Trust</h1></div></section>
    <section className="section service-page"><h2>Comprehensive Cargo and Supply Chain Support</h2><p className="lead">From customs clearance to cargo handling and bonded terminal operations, MACOTINO helps businesses move goods efficiently through Nigeria's ports and supply chain network.</p><div className="service-grid">{items.map(([img, slug, title], i) => <Link to="/service/$slug" params={{ slug }} key={title}><article className="service"><img src={img} alt={title}/><div><span>0{i+1}</span><h3>{title}</h3><ArrowUpRight/></div></article></Link>)}</div></section><SiteCta/><SiteFooter/></main>;
}
