"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const tabs = [
  { id: "who-we-are", label: "WHO WE ARE" },
  { id: "responsible-leadership", label: "OUR PLEDGE ON RESPONSIBLE LEADERSHIP" },
  { id: "current-moment", label: "QFS CURRENT MOMENT" },
];

const serviceCategoriesBottom = [
  { title: "Financial Advisory", href: "/services/financial-advisory", image: "/services-financial.jpg" },
  { title: "Business Advisory", href: "/services/business-advisory", image: "/services-business.jpg" },
  { title: "Staying Relevant", href: "/services/sustainability-digital", image: "/services-staying-relevant.jpg" },
];

// Hero background
const HeroBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
    <img
      src="/firm-hero.jpg"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(13,13,13,0.8) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.5) 100%)',
      }}
    />
  </div>
);

function WhoWeAre() {
  return (
    <div>
      {/* Who we are intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-10">
            Who we are
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[15px] text-text-primary leading-relaxed">
                QFS was founded as a business and financial advisory firm in 2016. Since the beginning we have strived to keep up with global trends and provide our clients with a modern and sophisticated portfolio of services that can fully match your needs.
              </p>
              <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
                Leaders of QFS have distinctive experience in executive positions of large global corporations, senior M&A activities and advising top level management.
              </p>
              <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
                Over the past 5 years the company participated in more than 100 projects, covering a wide range of services and industry sectors like construction, manufacturing, processing, financial services, IT, agriculture and real estate.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/firm-values.jpg" alt="QFS advisory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-5">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-2" style={{ fontVariant: 'small-caps', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Core Values
          </h2>
          <p className="text-xl font-semibold text-near-black mb-6">
            We are dedicated to our clients' success.
          </p>
          <p className="text-[15px] text-text-primary leading-relaxed">
            We are dedicated because we do things we care about, understand, and believe in. And as such, we are always curios to explore and learn more. We find solutions by collaborating with our clients and partners as well. Yet, we are aware of what is still missing and necessary to be improved to stay relevant to constantly fulfill clients' needs.
          </p>
          <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
            That is why when we are in the process of hiring new or promote current employees, we prefer humble and committed learners who are always focused on new challenges ahead.
          </p>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-5">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-2" style={{ fontVariant: 'small-caps', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Our Beliefs
          </h2>
          <p className="text-xl font-semibold text-near-black mb-6">
            We are guided by meritocracy while at the same time supporting diversity, equality and inclusion (DEI).
          </p>
          <p className="text-[15px] text-text-primary leading-relaxed">
            We are guided by meritocracy and rely on both our human and social capital to find intelligent and innovative solutions for all business and societal challenges organizations may face in volatile, uncertain, complex and ambiguous (VUCA) world.
          </p>
          <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
            We believe that human talent should be developed and actualized to the greatest extent, and that is why we stand firmly for Diversity, Equity and Inclusion, or DEI principles. Leaders of QFS aim creating context where our employees can thrive thanks to continuous learning and development. Caring about people implies that when providing advisory services to our clients, in parallel with focusing on performance, we also support preserving the planet for future generations.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-5">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-2" style={{ fontVariant: 'small-caps', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Purpose
          </h2>
          <p className="text-xl font-semibold text-near-black mb-6">
            To help clients create, deliver and capture value and to stay relevant in the 21st century, while respecting people and planet.
          </p>
          <p className="text-[15px] text-text-primary leading-relaxed">
            Our purpose is to advise clients on how to best create, deliver and capture value, and help them stay relevant in 21st century, while respecting people and the planet in doing so.
          </p>
          <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
            We offer advisory, coaching, and other services which aid saving existing and creation of new jobs. Our people do want to bring higher quality and innovations to the markets.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-5">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76M11.25 2.25c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-2" style={{ fontVariant: 'small-caps', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Our Mission
          </h2>
          <p className="text-xl font-semibold text-near-black mb-6">
            To provide high quality advisory services worldwide
          </p>
          <p className="text-[15px] text-text-primary leading-relaxed">
            QFS provides business and financial advisory services, across several markets and regions, including South-East Europe (SEE), Scandinavia, D-A-CH, Benelux and USA. We are also open to explore opportunities for our potential expansion to the East too.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-5">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-2" style={{ fontVariant: 'small-caps', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Our Vision
          </h2>
          <p className="text-xl font-semibold text-near-black mb-6">
            To become an invincible company in the market.
          </p>
          <p className="text-[15px] text-text-primary leading-relaxed">
            Together with our clients and partners, we want to become invincible in the market. Therefore, our concept is to best combine people and machines' intelligence and connect with right organizations and individuals.
          </p>
          <p className="mt-4 text-[15px] text-text-primary leading-relaxed">
            To see our vision as real, we define and develop sound strategies and business models, internal (eco)systems, processes, functions, new capabilities, culture and teams to serve our clients today and in the future. We think that to always stay relevant, we should excel in networking, and connect with preferable partners and clients. These networks are called ecosystems, where organizations, machines and people across different industries, join commitments and capabilities to innovate and solve customer problems. To be part of this we must bring in our expertise, data and capabilities in return for partners' contributions. We must earn and nurture partners' and customers' trust to keep the ecosystem together which is why we work hard to excel in collaboration, negotiation, leadership, governance and compliance to create, deliver and capture value via ecosystems. We believe this is how we can make our vision become true.
          </p>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '5rem 0' }}>
        <img src="/firm-section1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            We deploy all our capabilities and assets to ensure business development and success of our Clients. We involve our Clients during each step of the way since joint collaboration equals optimum outcomes. Especially when it comes to creating a business development strategy that will last in today's instinctive and challenging business climate.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl font-semibold text-near-black leading-snug">
            In short, we are <span className="underline decoration-accent decoration-2 underline-offset-4">LOYAL</span> to our clients, <span className="underline decoration-accent decoration-2 underline-offset-4">INVINCIBLE</span> to the market and <span className="underline decoration-accent decoration-2 underline-offset-4">DEDICATED</span> to Your success.
          </p>
        </div>
      </section>
    </div>
  );
}

const trends = [
  "Increasing number of investors who have added ESG factors in their investments analyses to mitigate risk",
  "Inclusion of ESG initiatives and metrics in companies' value propositions and BMs/cost savings, less waste",
  "Rising 'voting with wallets' by consumers",
  "Acceleration of governments (compliance), regulators, and standards setters on new regulation, taxing, and subsidizing",
  "B2B buyers and suppliers within value chains, or partners across ecosystems won't do business with companies that ignore societal goals",
];

function ResponsibleLeadership() {
  const [activeTrend, setActiveTrend] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrend((prev) => (prev + 1) % trends.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-10">
            Our pledge on responsible leadership
          </h2>
          <p className="text-lg text-text-primary leading-relaxed">
            Responsible leadership for us means delivering both for financial performance and broader societal goals. When advising our clients, we aim at PERFORMANCE, while taking care of PLANET and PEOPLE. Therefore, we help companies design viable and sustainable business models (BMs), and to decide where to invest and divest now, implying that necessary transformations come at cost.
          </p>
          <p className="mt-6 text-lg text-text-primary leading-relaxed">
            Yet, we do not necessarily think of them as a trade-off between performance and sustainability, rather we seek optimization for both, when possible. We see actualization of transformation for sustainability and its progressing to companies' "must haves" due to the following trends.
          </p>
        </div>
      </section>

      {/* Trends carousel */}
      <section className="relative py-16 lg:py-20">
        <img src="/firm-trends-bg.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Left arrow */}
            <button
              onClick={() => setActiveTrend((prev) => (prev - 1 + trends.length) % trends.length)}
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#A5040C'; e.currentTarget.style.borderColor = '#A5040C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Card */}
            <div
              className="flex-1 rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', height: '200px' }}
            >
              <div className="flex-1 flex items-center justify-center">
                <p
                  key={activeTrend}
                  className="text-lg lg:text-xl leading-relaxed font-medium text-center"
                  style={{ color: '#FFFFFF', animation: 'fadeSlideIn 0.4s ease-out' }}
                >
                  {trends[activeTrend]}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 pt-5">
                {trends.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTrend(i)}
                    className="transition-all duration-300"
                    style={{
                      width: activeTrend === i ? '2rem' : '0.5rem',
                      height: '0.5rem',
                      borderRadius: '9999px',
                      backgroundColor: activeTrend === i ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setActiveTrend((prev) => (prev + 1) % trends.length)}
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#A5040C'; e.currentTarget.style.borderColor = '#A5040C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <p className="text-lg text-text-primary leading-relaxed">
            We believe that business should lead the way, thanks to its impact and footprint, as well as innovation capability. Otherwise, companies would not sustain performance due to exposure to risks of natural disasters, biodiversity losses, air, water, and land pollution, and so on. To come to solutions, we must innovate. Therefore, we advise leaders on how to develop new capabilities and the right context and culture for their people and innovations to thrive.
          </p>
          <p className="mt-6 text-lg text-text-primary leading-relaxed">
            Yet, it works the opposite way too, companies cannot survive if failing to sustain earnings for their owners. Consequently, responsible leadership must commit to all stakeholders and balance existing businesses with new ones. This is how we help clients to create and sustain the future they want for themselves.
          </p>
        </div>
      </section>
    </div>
  );
}

function CurrentMoment() {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-near-black mb-10">
            QFS Current moment
          </h2>
          <p className="text-lg text-text-primary leading-relaxed">
            QFS was founded as business and financial advisory company. We think that in process we have gained some maturity to expand former to include <strong>Organizational Health</strong> assessments, advisory around preparation for and adoption of <strong>Digital</strong> technologies, majorly as Automation of Finance function, BI, visualization, as well as <strong>ESG and Sustainability Transformations and Reporting.</strong>
          </p>
          <p className="mt-6 text-lg font-semibold text-near-black leading-relaxed">
            These are hot themes and required changes businesses must pursue to stay relevant in 21st century. These changes are coupled with increasing complexity where we can make all much easier for you by joining our strengths.
          </p>
          <p className="mt-6 text-lg text-text-primary leading-relaxed">
            In addition to the mentioned new services, our views around the partnerships have been evolved to embrace innovations and <strong>competing in ecosystems</strong>, think of them as network of several partnerships to incorporate partners from different industries, necessary to prosper nowadays. Companies used to compete in more or less well-defined industries called industries where CEOs excelled on execution side.
          </p>
        </div>
      </section>

      {/* Innovation banner */}
      <section className="relative py-16 lg:py-24">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src="/about-hero.jpg"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.6) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Today to stay competitive implies innovation which requires joint commitments of partners across different industries, think of autonomous and electric vehicles for example, where you need to bring in capabilities originated in separate industries to come to joint desirable value proposition, profitable and sustainable business models. We see competing in ecosystems with new business models as rising trend, hence <strong>leadership and alignment (of internal ecosystems for external ecosystems), governance, negotiations</strong>, valuations have all of sudden become essential skills we can help you on, to survive and thrive.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <p className="text-lg text-text-primary leading-relaxed">
            For instance, negotiation skills have come to the forefront since in the partnerships (or ecosystems) there is no one single CEO or organizational designer who overpower others, consequently you need to be good in negotiating and we can advise you on these matters.
          </p>
          <p className="mt-6 text-lg text-text-primary leading-relaxed">
            Since ecosystems consist of several partnerships, we have strengthened our capability to navigate through each of life cycle phases such as <strong>launching and structuring JVs and alliances, their governance, making them sustainable and ESG, valuations of partners' stakes, minority rights, sourcing from parents, intellectual property (IP), restructuring and exit, and other issues you can face.</strong>
          </p>
        </div>
      </section>

      {/* Finance function transformation & Post deal integration cards */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="bg-white rounded-2xl overflow-hidden border border-border-gray transition-all duration-300 group-hover:shadow-xl">
                <div className="h-48 relative">
                  <img src="/services-hero.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-near-black mb-4">
                    Finance function transformation
                  </h3>
                  <p className="text-[15px] text-text-gray leading-relaxed mb-6">
                    Beyond traditional tasks of finance function (which you can outsource to us) such as reporting, controlling and budgeting, we have extended our expertise to include automation (of finance function), to provide more strategic insights and to add dynamism and optionality with scenario planning and zero-based budgeting.
                  </p>
                  <Link
                    href="/services/financial-advisory"
                    className="text-accent font-medium text-[15px] hover:underline"
                  >
                    READ MORE &gt;
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#A5040C' }} />
            </div>

            <div className="relative group">
              <div className="bg-white rounded-2xl overflow-hidden border border-border-gray transition-all duration-300 group-hover:shadow-xl">
                <div className="h-48 relative">
                  <img src="/hero.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-near-black mb-4">
                    Post deal integration
                  </h3>
                  <p className="text-[15px] text-text-gray leading-relaxed mb-6">
                    In collaboration with our partners, we offer full end-to-end support and guidance to our clients throughout the transaction process. We supply advisory for post deal integration, which we see as the critical part of the process, for planned synergies to make happen.
                  </p>
                  <Link
                    href="/services/business-advisory/mergers-acquisitions"
                    className="text-accent font-medium text-[15px] hover:underline"
                  >
                    READ MORE &gt;
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#A5040C' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function TheFirmPage() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '5rem', minHeight: '420px' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            The Firm
          </h1>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-mid-gray sticky top-16 lg:top-20 z-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[12px] font-semibold tracking-wide uppercase transition-all ${
                  activeTab === tab.id
                    ? "bg-accent text-white"
                    : "bg-light-gray text-dark-gray hover:bg-mid-gray"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === "who-we-are" && <WhoWeAre />}
      {activeTab === "responsible-leadership" && <ResponsibleLeadership />}
      {activeTab === "current-moment" && <CurrentMoment />}

      {/* Service categories bottom links */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {serviceCategoriesBottom.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative h-48 rounded-xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: '#FFFFFF' }}>
                    {cat.title}
                  </h3>
                  <span className="text-[13px] font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    READ MORE &gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
