import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Geo-Safety", href: "#geo-safety" },
      { name: "Emergency SOS", href: "#emergency" },
      { name: "Dashboard", href: "#dashboard" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Support", href: "#contact" },
      { name: "Safety Guidelines", href: "#guidelines" },
      { name: "FAQs", href: "#faqs" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(185 100% 50% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(185 100% 50% / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Shield className="w-10 h-10 text-secondary glow-cyan" />
                    <div className="absolute -inset-1 bg-secondary/20 rounded-full blur animate-pulse-glow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Guardian<span className="text-secondary">Go</span>
                    </h3>
                    <p className="text-xs text-white/60">Smart Tourist Safety</p>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  Smart, Safe, and Secure Journeys — Powered by AI, Blockchain & GeoTech. 
                  Protecting travelers across India with cutting-edge technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:support@guardiango.in"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    support@guardiango.in
                  </a>
                  <a
                    href="tel:1800-XXX-XXXX"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    1800-XXX-XXXX (Toll Free)
                  </a>
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Ministry of Tourism, Govt. of India<br />New Delhi, India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-secondary transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-secondary transition-colors relative inline-block group"
                      >
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deployment Link Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="glass-dark px-6 py-3 rounded-full">
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">Live Deployment: </span>
                <a
                  href="#"
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  guardiango.lovable.app
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>System Status: All Services Operational</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © 2025 GuardianGo. All rights reserved. A Ministry of Tourism Initiative.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-secondary transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-secondary transition-colors">
                Terms
              </a>
              <a href="#cookies" className="hover:text-secondary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-secondary/5 blur-3xl" />
    </footer>
  );
};

export default Footer;
