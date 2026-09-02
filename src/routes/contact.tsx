import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Quote } from "lucide-react";
import { Eyebrow, SiteCta, SiteFooter, SiteHeader } from "../components/site-chrome";
import hero from "../assets/contact-hero.png.asset.json";

const faqs = [
  ["What types of goods do you transport?", "We handle a wide range of cargo, including commercial goods, industrial materials, and packaged products, ensuring safe and efficient delivery across all routes."],
  ["How can I track my shipment?", "You can track your shipment in real time through our tracking system, providing updates on location, status, and estimated delivery time."],
  ["Do you offer express delivery services?", "Yes, we provide express delivery options for time-sensitive shipments, ensuring faster transit without compromising safety and reliability."],
  ["How do you ensure the safety of goods?", "We follow strict handling procedures, secure packaging standards, and continuous monitoring to ensure your cargo remains protected throughout the journey."],
];

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Transvia | Global Support Team" },
    { name: "description", content: "Get in touch with Transvia's logistics support team for shipments, inquiries, and business partnerships." },
    { property: "og:title", content: "Contact Transvia | Global Support Team" },
    { property: "og:description", content: "Get in touch with Transvia's logistics support team for shipments, inquiries, and business partnerships." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() {
  return <main><SiteHeader/>
    <section className="sub-hero" style={{ backgroundImage: `linear-gradient(90deg,var(--overlay-strong),var(--overlay-soft)),url(${hero.url})` }}><div className="sub-hero-inner reveal"><Eyebrow>Contact Us</Eyebrow><h1>Contact Global<br/>Support Team</h1></div></section>
    <section className="section"><Eyebrow>Get In Touch</Eyebrow><h2>Let's Move Your Shipment Forward with Confidence</h2><p className="lead">We deliver seamless transportation solutions tailored to your business needs, ensuring efficiency and peace of mind.</p>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row"><div className="form-field"><label>Full Name</label><input type="text" placeholder="John Doe"/></div><div className="form-field"><label>Phone Number</label><input type="tel" placeholder="+1 234 567 890"/></div></div>
          <div className="form-field"><label>Email Address</label><input type="email" placeholder="john@example.com"/></div>
          <div className="form-row"><div className="form-field"><label>Pickup Location</label><input type="text" placeholder="New York, USA"/></div><div className="form-field"><label>Delivery Location</label><input type="text" placeholder="Los Angeles, USA"/></div></div>
          <div className="form-field"><label>Service Type</label><select><option>Road Freight</option><option>Express Delivery</option><option>Logistics Management</option><option>Other</option></select></div>
          <div className="form-field"><label>Shipment Details</label><textarea placeholder="Describe your shipment..."/></div>
          <button className="form-submit" type="submit">Send your message</button>
        </form>
        <div className="contact-info-grid">
          <div className="contact-card"><h3>Call Us</h3><p>Our logistics support team is available to assist</p><a href="tel:+8801234567890">+880 1234 567 890</a></div>
          <div className="contact-card"><h3>Email Support</h3><p>Feel free to contact us through email for inquiries anytime.</p><a href="mailto:support@transvia.com">support@transvia.com</a></div>
          <div className="contact-card"><h3>Head Office</h3><p>Transvia Cargo Logistics<br/>House 12, Road 5, Sector 10<br/>Uttara, Dhaka 1230</p></div>
          <div className="contact-card"><h3>Business Contact</h3><p>Looking for long-term logistics support or custom solutions?</p><a href="mailto:business@transvia.com">business@transvia.com</a></div>
        </div>
      </div>
    </section>
    <section className="section faq"><Eyebrow>FAQ</Eyebrow><h2>Answers to Common Questions About Our Logistics</h2><div>{faqs.map((f, i) => <details key={f[0]}><summary><span>0{i+1}</span>{f[0]}<ChevronDown/></summary><p>{f[1]}</p></details>)}</div></section>
    <SiteCta/><SiteFooter/>
  </main>;
}
