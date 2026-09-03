import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/contact-hero.png.asset.json";

const faqs = [
  ["Do you provide freight forwarding?", "Yes. We efficiently coordinate cargo movement through sea, air, and land transportation channels."],
  ["Can you manage customs clearance?", "Yes. We support fast and compliant customs documentation and cargo release procedures."],
  ["Do you provide bonded terminal services?", "Yes. We provide professional cargo handling and storage within customs-approved bonded facilities."],
  ["Which industries do you serve?", "We support oil and gas, manufacturing, construction, agriculture, retail and distribution, and import-export businesses."],
];

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact MACOTINO | Logistics Consultation" },
    { name: "description", content: "Contact MACOTINO Global Limited to discuss freight forwarding, customs clearance, bonded terminal, and logistics requirements." },
    { property: "og:title", content: "Contact MACOTINO | Logistics Consultation" },
    { property: "og:description", content: "Contact our team to discuss your freight forwarding and logistics requirements." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() {
  return <main><SiteHeader/>
    <section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Contact Us</Eyebrow><h1>Let's Discuss Your<br/>Logistics Requirements</h1></div></section>
    <section className="section"><Eyebrow>Get In Touch</Eyebrow><h2>Our Team Is Ready to Help</h2><p className="lead">Whether you require freight forwarding, customs clearance, bonded terminal support, or logistics services, our team is ready to help.</p>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row"><div className="form-field"><label>Full Name</label><input type="text" placeholder="John Doe"/></div><div className="form-field"><label>Phone Number</label><input type="tel" placeholder="+1 234 567 890"/></div></div>
          <div className="form-field"><label>Email Address</label><input type="email" placeholder="john@example.com"/></div>
          <div className="form-row"><div className="form-field"><label>Pickup Location</label><input type="text" placeholder="New York, USA"/></div><div className="form-field"><label>Delivery Location</label><input type="text" placeholder="Los Angeles, USA"/></div></div>
           <div className="form-field"><label>Service Type</label><select><option>Freight Forwarding</option><option>Customs Clearance</option><option>Bonded Terminal Operations</option><option>Cargo Handling &amp; Logistics</option><option>Import &amp; Export Support</option></select></div>
          <div className="form-field"><label>Shipment Details</label><textarea placeholder="Describe your shipment..."/></div>
          <button className="form-submit" type="submit">Send your message</button>
        </form>
        <div className="contact-info-grid">
          <div className="contact-card"><h3>Call Us</h3><p>Our logistics support team is available to assist</p><a href="tel:+8801234567890">+880 1234 567 890</a></div>
          <div className="contact-card"><h3>Email Support</h3><p>Feel free to contact us through email for inquiries anytime.</p><a href="mailto:info@macotino.com">info@macotino.com</a></div>
          <div className="contact-card"><h3>Operations</h3><p>Supporting cargo movement through Nigeria's ports and supply chain network.</p></div>
          <div className="contact-card"><h3>Business Contact</h3><p>Looking for long-term logistics support or custom solutions?</p><a href="mailto:business@macotino.com">business@macotino.com</a></div>
        </div>
      </div>
    </section>
    <section className="section faq"><Eyebrow>FAQ</Eyebrow><h2>Answers to Common Questions About Our Logistics</h2><div>{faqs.map((f, i) => <details key={f[0]}><summary><span>0{i+1}</span>{f[0]}<ChevronDown/></summary><p>{f[1]}</p></details>)}</div></section>
    <SiteCta/><SiteFooter/>
  </main>;
}
