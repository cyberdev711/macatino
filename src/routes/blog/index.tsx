import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../../components/site-chrome";
import hero from "../../assets/blog-hero.png.asset.json";
import blogOne from "../../assets/blog-one.png.asset.json"; import blogTwo from "../../assets/blog-two.png.asset.json";
import blog3 from "../../assets/blog-3.png.asset.json"; import blog4 from "../../assets/blog-4.png.asset.json";
import blog5 from "../../assets/blog-5.png.asset.json"; import blog6 from "../../assets/blog-6.png.asset.json";
import blog7 from "../../assets/blog-7.jpg.asset.json"; import blog8 from "../../assets/blog-8.jpg.asset.json";

const posts: [string, string, string, string][] = [
  [blogOne.url, "common-logistics-challenges-and-solutions-for-growing-companies", "May 26, 2026", "Common Logistics Challenges and Solutions for Growing Companies"],
  [blogTwo.url, "best-logistics-management-techniques-for-small-business-operations", "May 24, 2026", "Best Logistics Management Techniques for Small Business Operations"],
  [blog3.url, "essential-supply-chain-practices-for-business-success-today", "May 22, 2026", "Essential Supply Chain Practices for Business Success Today"],
  [blog4.url, "how-technology-improves-global-logistics-and-freight-operations", "May 20, 2026", "How Technology Improves Global Logistics and Freight Operations"],
  [blog5.url, "efficient-transportation-solutions-for-reducing-delivery-time-delays", "May 18, 2026", "Efficient Transportation Solutions for Reducing Delivery Time Delays"],
  [blog6.url, "modern-warehouse-management-tips-for-better-inventory-control", "May 15, 2026", "Modern Warehouse Management Tips for Better Inventory Control"],
  [blog7.url, "how-smart-logistics-improves-delivery-speed-and-efficiency", "May 8, 2026", "How Smart Logistics Improves Delivery Speed and Efficiency"],
  [blog8.url, "key-factors-that-ensure-safe-and-reliable-freight-transport", "May 7, 2026", "Key Factors That Ensure Safe and Reliable Freight Transport"],
];

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog | MACOTINO Global Limited Insights" },
    { name: "description", content: "Expert articles, industry updates, and practical insights on logistics and transportation." },
    { property: "og:title", content: "Blog | MACOTINO Global Limited Insights" },
    { property: "og:description", content: "Expert articles, industry updates, and practical insights on logistics and transportation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BlogPage,
});

function BlogPage() {
  return <main className="blog-page"><SiteHeader/>
    <section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Blog</Eyebrow><h1>Innovations In<br/>Cargo Management</h1></div></section>
    <section className="section"><Eyebrow>Our Blog</Eyebrow><h2>Stay Informed with Logistics Trends and Insights</h2><p className="lead">Explore expert articles, industry updates, and practical insights to stay ahead in the ever-evolving world of logistics and transportation.</p><div className="blog-grid">{posts.map(([img, slug, date, title]) => <Link to="/blog/$slug" params={{ slug }} key={title}><article><img src={img} alt={title}/><span>{date}</span><h3>{title}</h3></article></Link>)}</div></section>
    <SiteCta/><SiteFooter/>
  </main>;
}
