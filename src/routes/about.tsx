import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/about-hero.png.asset.json";
import legacy from "../assets/about-legacy.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About MACOTINO | Freight & Logistics" },
    { name: "description", content: "Learn about MACOTINO Global Limited and our professional freight forwarding and cargo management services." },
    { property: "og:title", content: "About MACOTINO | Freight & Logistics" },
    { property: "og:description", content: "Learn about MACOTINO Global Limited and our professional freight forwarding and cargo management services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() {
  return <main><SiteHeader/><section className="sub-hero" style={{backgroundImage:`linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})`}}><div className="sub-hero-inner reveal"><Eyebrow>About MACOTINO</Eyebrow><h1>Professional Logistics,<br/>Reliable Cargo Management.</h1></div></section>
    <section className="section legacy"><div><Eyebrow>About MACOTINO</Eyebrow><h2>A Trusted Logistics and Freight Forwarding Company</h2><p>MACOTINO Global Limited is a trusted logistics and freight forwarding company providing comprehensive cargo movement, customs clearance, and supply chain support services.</p><p>Over the years, we have built a reputation for professionalism, reliability, and efficient cargo management, serving businesses across multiple industries.</p><p>Our commitment is simple: ensuring every shipment is handled with precision, compliance, and attention to detail.</p></div><img src={legacy.url} alt="MACOTINO cargo and logistics operations"/></section>
    <section className="section"><Eyebrow>Business</Eyebrow><h2>Why Businesses Choose MACOTINO</h2><div className="feature-grid">{[["Industry Expertise","Deep understanding of freight forwarding, customs procedures, and cargo operations."],["Reliable Operations","A proven commitment to timely and professional service delivery."],["Strategic Partnerships","Strong working relationships across the logistics and maritime ecosystem."],["Customer Focus","Solutions tailored to the unique needs of every client."]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="section values"><Eyebrow>Values</Eyebrow><h2>Our Core Values</h2><div className="why-grid">{["Reliability","Transparency","Innovation","Customer Success"].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>We hold ourselves to a clear standard that creates dependable service and lasting customer value.</p></article>)}</div></section><SiteCta/><SiteFooter/></main>;
}