// components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "facebook", symbol: "f", bgColor: "bg-blue-600" },
    { platform: "twitter", symbol: "t", bgColor: "bg-blue-400" },
    { platform: "linkedin", symbol: "in", bgColor: "bg-blue-700" },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              SkillUp
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering Indian professionals with future-ready skills and
              career opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <div
                  key={social.platform}
                  className={`w-8 h-8 ${social.bgColor} rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
                >
                  <span className="text-white text-sm">{social.symbol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SkillUp Education Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
