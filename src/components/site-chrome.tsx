import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import cta from "../assets/cta.png.asset.json";

export function Brand() {
  return <Link to="/" className="brand"><span className="truck">▰</span><span>Transvia</span></Link>;
}

export function Action({ children = "Get Started", to = "/contact" }: { children?: string; to?: string }) {
  return <Link to={to} className="action"><span>{children}</span><b><ArrowUpRight size={17}/></b></Link>;
}

export function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow"><span>//</span>{children}<span>//</span></p>;
}

export function SiteHeader() {
  return <header><div className="nav-wrap"><Brand/><nav><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/service">Service</Link><Link to="/blog">Blog</Link><Link to="/project">Projects</Link></nav><Action/><button className="menu" aria-label="Open menu"><Menu/></button></div></header>;
}

export function SiteCta() {
  return <section id="contact" className="cta" style={{ backgroundImage:`linear-gradient(var(--overlay-strong),var(--overlay-strong)),url(${cta.url})` }}><Eyebrow>LET'S MOVE</Eyebrow><h2>Start Your Next Delivery Today</h2><p>Let our expert logistics team handle your shipment with precision, speed, and complete transparency.</p><Action>Request a Quote</Action></section>;
}

export function SiteFooter() {
  return <footer><Brand/><p>Delivering reliable and efficient logistics solutions with a focus on speed, safety, and sustainability across every route.</p><div><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/service">Service</Link><Link to="/blog">Blog</Link><Link to="/project">Project</Link><Link to="/pricing">Pricing</Link><Link to="/team">Team</Link><Link to="/contact">Contact</Link></div><small>© 2026 Transvia. All rights reserved.</small></footer>;
}
