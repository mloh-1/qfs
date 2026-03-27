"use client";

import Link from "next/link";
import { useState } from "react";

const serviceCategories = [
  {
    name: "Financial Advisory",
    href: "/services/financial-advisory",
    services: [
      { name: "Finance Function Outsourcing", href: "/services/financial-advisory/finance-function-outsourcing" },
      { name: "Controlling & Reporting", href: "/services/financial-advisory/controlling-reporting" },
      { name: "Budgeting, Forecasting & Scenario Analysis", href: "/services/financial-advisory/budgeting-forecasting" },
      { name: "Strategic Planning & FP&A", href: "/services/financial-advisory/strategic-planning-fpa" },
      { name: "KPIs, Dashboards & Visualizations", href: "/services/financial-advisory/kpis-dashboards" },
      { name: "Business Plans", href: "/services/financial-advisory/business-plans" },
      { name: "Zero-Based Budgeting", href: "/services/financial-advisory/zero-based-budgeting" },
      { name: "Financial Restructuring", href: "/services/financial-advisory/financial-restructuring" },
      { name: "Prepackaged Bankruptcy Filing", href: "/services/financial-advisory/prepackaged-bankruptcy" },
      { name: "Finance Automation", href: "/services/financial-advisory/finance-automation" },
    ],
  },
  {
    name: "Business Advisory",
    href: "/services/business-advisory",
    services: [
      { name: "Supply Chain Management", href: "/services/business-advisory/supply-chain-management" },
      { name: "Valuations & Assessments", href: "/services/business-advisory/valuations-assessments" },
      { name: "Corporate Finance & Strategy", href: "/services/business-advisory/corporate-finance-strategy" },
      { name: "Transformations, Innovations & Leadership", href: "/services/business-advisory/transformations-leadership" },
      { name: "Mergers & Acquisitions", href: "/services/business-advisory/mergers-acquisitions" },
      { name: "Startup Advisory", href: "/services/business-advisory/startup-advisory" },
    ],
  },
  {
    name: "Staying Relevant",
    href: "/services/sustainability-digital",
    services: [
      { name: "Organizational Health", href: "/services/sustainability-digital/organizational-health" },
      { name: "Digital Advisory", href: "/services/sustainability-digital/digital-advisory" },
      { name: "ESG & Sustainability", href: "/services/sustainability-digital/esg-sustainability" },
    ],
  },
];

const navigation = [
  { name: "The Firm", href: "/the-firm" },
  { name: "Services", href: "/services", hasMegaMenu: true },
  { name: "Staying Relevant", href: "/services/sustainability-digital" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mid-gray">
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="QFS - Dedicated To Your Success"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
                onMouseLeave={() => item.hasMegaMenu && setMegaMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-dark-gray hover:text-near-black transition-colors py-2"
                >
                  {item.name}
                  {item.hasMegaMenu && (
                    <svg
                      className="inline-block ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && megaMenuOpen && (
                  <div className="absolute top-full -left-4 pt-2">
                    <div className="bg-white rounded-xl shadow-2xl border border-mid-gray p-6 min-w-[720px]">
                      <div className="grid grid-cols-3 gap-8">
                        {serviceCategories.map((category) => (
                          <div key={category.name}>
                            <Link
                              href={category.href}
                              className="text-[13px] font-bold uppercase tracking-wider text-accent hover:text-near-black transition-colors"
                            >
                              {category.name}
                            </Link>
                            <div className="mt-3 space-y-1.5">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block text-[13px] text-text-gray hover:text-near-black hover:translate-x-0.5 transition-all"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border-gray">
                        <Link
                          href="/services"
                          className="text-[13px] font-medium text-accent hover:text-near-black transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.625rem 1.25rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#A5040C',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-dark-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-mid-gray">
            {/* Services with subcategories */}
            <div className="mb-2">
              <Link
                href="/services"
                className="block py-3 text-[15px] font-medium text-dark-gray"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <div className="pl-4 pb-2">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="mb-2">
                    <Link
                      href={category.href}
                      className="block py-1.5 text-[13px] font-semibold uppercase tracking-wider text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="pl-3">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-1.5 text-[13px] text-text-gray"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other nav items */}
            {navigation.filter(item => !item.hasMegaMenu).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-[15px] font-medium text-dark-gray"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="btn-primary"
              style={{
                display: 'block',
                marginTop: '1rem',
                padding: '0.75rem',
                textAlign: 'center',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#A5040C',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
