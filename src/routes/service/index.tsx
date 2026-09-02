import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero from "../../assets/service-hero.png.asset.json";
import heavy from "../../assets/service-heavy.jpg.asset.json"; import temp from "../../assets/service-temp.jpg.asset.json"; import regional from "../../assets/service-regional.jpg.asset.json"; import express from "../../assets/service-express.jpg.asset.json"; import five from "../../assets/service-five.jpg.asset.json"; import six from "../../assets/service-six.png.asset.json"; import seven from "../../assets/service-seven.jpg.asset.json"; import eight from "../../assets/service-eight.jpg.asset.json";

const items = [
  [heavy.url, "heavy-equipment-logistics", "Heavy Equipment Logistics"],
  [temp.url, "temperature-controlled-shipping", "Temperature-Controlled Shipping"],
  [regional.url, "regional-cargo-transport", "Regional Cargo Transport"],
  [express.url, "express-freight-delivery", "Express Freight Delivery"],
  [five.url, "regional-freight-delivery", "Regional Freight Delivery"],
  [six.url, "express-cargo-distribution", "Express Cargo Distribution"],
  [seven.url, "supply-chain-logistics", "Supply Chain Logistics"],
  [eight.url, "international-transport-solutions", "International Transport Solutions"],
];

export const Route = createFileRoute("/service/")({
  head: () => ({ meta: [
    { title: "Logistics Services | Transvia" },
    { name: "description", content: "Explore Transvia freight, cargo, cold-chain, and supply-chain logistics services." },
    { property: "og:title", content: "Logistics Services | Transvia" },
    { property: "og:description", content: "Reliable logistics solutions built for speed and operational confidence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});

function ServicesPage() {
  return <main><SiteHeader/><section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Services</Eyebrow><h1>Advanced Logistics<br/>Support Services</h1></div></section>
    <section className="section service-page"><h2>Comprehensive Logistics Solutions Built for Speed and Reliability</h2><p className="lead">From transportation and warehousing to last-mile delivery, we provide seamless logistics solutions designed to keep your business moving efficiently and on time.</p><div className="service-grid">{items.map(([img, slug, title], i) => <Link to="/service/$slug" params={{ slug }} key={title}><article className="service"><img src={img} alt={title}/><div><span>0{i+1}</span><h3>{title}</h3><ArrowUpRight/></div></article></Link>)}</div></section><SiteCta/><SiteFooter/></main>;
}
