import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/about-hero.png.asset.json";
import legacy from "../assets/about-legacy.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Transvia | Global Logistics" },
    { name: "description", content: "Meet the experienced global logistics team behind Transvia's trusted deliveries." },
    { property: "og:title", content: "About Transvia | Global Logistics" },
    { property: "og:description", content: "Meet the experienced global logistics team behind Transvia's trusted deliveries." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() {
  return <main><SiteHeader/><section className="sub-hero" style={{backgroundImage:`linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})`}}><div className="sub-hero-inner reveal"><Eyebrow>About Us</Eyebrow><h1>Global Logistics,<br/>Trusted Delivery.</h1></div></section>
    <section className="section legacy"><div><Eyebrow>Our Legacy</Eyebrow><h2>Your Trusted Partner in Global Delivery.</h2><p>At Transvia, logistics is more than moving goods—it is about building trust, ensuring reliability, and supporting business growth across borders.</p><p>With a strong international network and a commitment to operational excellence, we manage every stage of the supply chain with precision and care.</p></div><img src={legacy.url} alt="Transvia global logistics operations"/></section>
    <section className="about-stats">{[["15+","Years of Experience"],["500k+","Successful Deliveries"],["110+","Countries Served"],["90%","On-Time Delivery Rate"]].map(x=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section"><Eyebrow>Business</Eyebrow><h2>Why Businesses Choose Transvia</h2><div className="feature-grid">{[["Real-Time Tracking","Monitor shipments at every stage with complete transparency."],["Global Coverage","Access reliable transportation networks across international borders worldwide."],["Fast Delivery","Optimized routes and efficient operations ensure timely arrivals."],["Dedicated Support","Expert logistics professionals available whenever you need support."]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="section values"><Eyebrow>Values</Eyebrow><h2>Our Core Values</h2><div className="why-grid">{["Reliability","Transparency","Innovation","Customer Success"].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>We hold ourselves to a clear standard that creates dependable service and lasting customer value.</p></article>)}</div></section><SiteCta/><SiteFooter/></main>;
}