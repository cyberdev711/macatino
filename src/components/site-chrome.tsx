import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import cta from "../assets/cta.png.asset.json";

export function Brand() {
  return <Link to="/" className="brand"><span className="truck">▰</span><span>MACOTINO</span></Link>;
}

export function Action({ children = "Request Consultation", to = "/contact" }: { children?: string; to?: string }) {
  return <Link to={to} className="action"><span>{children}</span><b><ArrowUpRight size={17}/></b></Link>;
}

export function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow"><span>//</span>{children}<span>//</span></p>;
}

export function SiteHeader() {
  return <header><div className="nav-wrap"><Brand/><nav><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/service">Service</Link><Link to="/blog">Blog</Link><Link to="/project">Projects</Link></nav><Action/><button className="menu" aria-label="Open menu"><Menu/></button></div></header>;
}

export function SiteCta() {
  return <section id="contact" className="cta" style={{ backgroundImage:`linear-gradient(var(--overlay-strong),var(--overlay-strong)),url(${cta.url})` }}><Eyebrow>CONTACT US</Eyebrow><h2>Let's Discuss Your Logistics Requirements</h2><p>Whether you require freight forwarding, customs clearance, bonded terminal support, or logistics services, our team is ready to help.</p><Action>Contact Us</Action></section>;
}

export function SiteFooter() {
  return <footer><Brand/><p>Trusted freight forwarding, customs clearance, cargo handling, and supply chain support across Nigeria.</p><div><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/service">Services</Link><Link to="/blog">Blog</Link><Link to="/project">Projects</Link><Link to="/pricing">Pricing</Link><Link to="/team">Team</Link><Link to="/contact">Contact</Link></div><small>© 2026 MACOTINO Global Limited. All rights reserved.</small></footer>;
}
