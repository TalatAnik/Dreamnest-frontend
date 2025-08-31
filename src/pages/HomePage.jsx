import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';

export default function HomePage() {
  const features = [
  { title: 'Verified Listings', tone:'primary', accent:'from-primary-500/15 to-primary-500/0', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-600 dark:text-primary-400"><path fill="currentColor" d="M9.55 17.54 4.4 12.4l1.42-1.42 3.73 3.73 8.63-8.63 1.42 1.42Z"/></svg>
      ), desc: 'Trustworthy property information with transparency-first presentation.' },
  { title: 'Real Reviews', tone:'accent', accent:'from-accent-500/20 to-accent-500/0', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-500"><path fill="currentColor" d="M12 21q-.425 0-.713-.288Q11 20.425 11 20v-2h7q.825 0 1.413-.587Q20 16.825 20 16V6q0-.825-.587-1.412Q18.825 4 18 4H6q-.825 0-1.412.588Q4 5.175 4 6v10q0 .825.588 1.413Q5.175 18 6 18h3.5l2.15 2.15q.275.275.438.412.162.138.412.138Zm-6-7V6v10Zm2-1h10V6H8Zm-2 1V6v10Z"/></svg>
      ), desc: 'Read feedback from previous tenants & buyers (mock data stage).' },
  { title: 'Secure Payments (Soon)', tone:'primary', accent:'from-primary-600/15 to-primary-600/0', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-600 dark:text-primary-400"><path fill="currentColor" d="M3 19V8h18v11Zm2-2h14v-7H5Zm0-9V5h14v3Zm7 6q.825 0 1.413-.587Q14 12.825 14 12t-.587-1.412Q12.825 10 12 10t-1.412.588Q10 11.175 10 12q0 .825.588 1.413Q11.175 14 12 14Z"/></svg>
      ), desc: 'Future integration with Bkash & banking APIs.' },
  { title: 'Relocation Services', tone:'primary', accent:'from-primary-400/15 to-primary-400/0', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-500 dark:text-primary-300"><path fill="currentColor" d="m20 8-8-5-8 5v2h16ZM4 18h16v-8H4Zm8-2q-1.25 0-2.125-.875T9 13t.875-2.125T12 10t2.125.875T15 13t-.875 2.125T12 16Z"/></svg>
      ), desc: 'Plan movers, packers & renovators in one place (mock placeholder).' },
  { title: 'AI Valuation (Future)', tone:'accent', accent:'from-accent-400/20 to-accent-400/0', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-500"><path fill="currentColor" d="M12 21q-.825 0-1.412-.587Q10 19.825 10 19v-1H5q-.825 0-1.412-.587Q3 16.825 3 16v-3q0-.425.288-.712Q3.575 12 4 12t.712.288Q5 12.575 5 13v3h5v-2.1q-1.5-.35-2.475-1.6Q6.55 11.05 6.55 9.4q0-1.8 1.225-3.075Q9 5.05 10.8 5.025h2.4q1.8.025 3.025 1.3Q17.45 7.6 17.45 9.4q0 1.65-.975 2.9T14 13.9V16h5v-3q0-.425.288-.712Q19.575 12 20 12t.712.288Q21 12.575 21 13v3q0 .825-.587 1.413Q19.825 19 19 19h-5v1q0 .825-.587 1.413Q12.825 21 12 21Zm0-8q1.275 0 2.212-.862.938-.863.938-2.138t-.938-2.138Q13.275 7 12 7t-2.138.862Q9 8.725 9 10t.862 2.138Q10.725 13 12 13Z"/></svg>
      ), desc: 'Upcoming intelligent pricing and negotiation assist.' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
  <div className="relative border-b border-border/60 dark:border-[#334155] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7031403/pexels-photo-7031403.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="City skyline"
    className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/40 to-black/20 dark:from-black/65 dark:via-black/50 dark:to-black/30" />
        </div>
        <Container className="py-24 md:py-32 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
            Find Your Next Home with Confidence
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base text-white/85">
            Search properties, explore reviews, plan services & prepare for future AI insights — all in one modern interface.
          </p>
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-6 bg-white/55 dark:bg-[#1e293b]/60 p-3 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search by city, area, or keyword (mock)"
              className="flex-1 h-12 px-4 rounded-md border border-border dark:border-[#334155] bg-white/90 dark:bg-[#1e293b]/90 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <Button className="h-12" variant="primary">Search</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/properties" variant="primary" size="md">Explore Properties</Button>
            <Button as={Link} to="/services" variant="secondary" size="md">View Services</Button>
            <Button as={Link} to="/register" variant="outline" size="md">Create Account (Mock)</Button>
          </div>
        </Container>
      </div>

      {/* Feature Highlights */}
      <Container className="py-24">
        <SectionHeading
          title="Why DreamNest?"
          subtitle="A unified experience that blends discovery, trust, and future-ready tools. Everything you see here runs on mock content today—designed to set a high visual and UX bar before real data arrives."
          align="center"
          titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-300 dark:via-primary-400 dark:to-accent-300 drop-shadow-sm"
          subtitleClassName="font-medium"
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-28">
          {features.map(f => (
            <div
              key={f.title}
              className={`group relative flex flex-col rounded-3xl overflow-hidden border shadow-[0_6px_18px_-8px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.35)] transition-all duration-400 backdrop-blur-sm
               ${f.tone === 'primary' ? 'border-primary-200/70 dark:border-primary-300/20' : 'border-accent-200/70 dark:border-accent-300/20'}
              `}
            >
              {/* Persistent background image */}
              <div
                className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  backgroundImage: f.tone === 'primary'
                    ? 'url(https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=800)'
                    : 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                aria-hidden="true"
              />
              {/* Gradient overlays for readability */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.tone === 'primary' ? 'from-primary-50/90 via-white/80 to-white/60 dark:from-[#0f172a]/95 dark:via-[#0f172a]/85 dark:to-[#0f172a]/70' : 'from-accent-50/90 via-white/75 to-white/55 dark:from-[#0f172a]/95 dark:via-[#0f172a]/85 dark:to-[#0f172a]/70'}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.9),rgba(255,255,255,0)_65%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.05),rgba(255,255,255,0)_65%)]" />
              {/* Glow ring accent on hover */}
              <div className={`pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${f.tone === 'primary' ? 'from-primary-400/40 via-primary-300/30 to-primary-400/40' : 'from-accent-400/40 via-accent-300/30 to-accent-400/40'} blur-[2px]`} />
              <div className="relative p-7 flex flex-col flex-1">
                <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-6 shadow-md ring-4 ring-white/60 dark:ring-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:scale-105 group-hover:shadow-lg
                  ${f.tone === 'primary' ? 'bg-gradient-to-br from-white to-primary-50/60 text-primary-600 dark:from-[#1e293b] dark:to-[#334155] dark:text-primary-300' : 'bg-gradient-to-br from-white to-accent-50/60 text-accent-600 dark:from-[#1e293b] dark:to-[#334155] dark:text-accent-300'}`}
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-xl md:text-[1.35rem] leading-snug tracking-tight mb-3 text-slate-900 dark:text-slate-100">
                  <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:transition-all after:duration-500">{f.title}</span>
                </h3>
                <p className="text-sm md:text-[0.93rem] leading-relaxed text-slate-600 dark:text-slate-300 flex-1 font-medium/5">
                  {f.desc}
                </p>
                <div className="mt-7 pt-5 flex items-center justify-between text-[11px] uppercase tracking-wide font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700/60">
                  <span className="flex items-center gap-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">Coming Soon
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all"><path fill="currentColor" d="m13.6 17-1.4-1.4 3.6-3.6-3.6-3.6L13.6 7 19 12.4Z"/></svg>
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-normal normal-case">Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionHeading
          title="Featured Properties"
          subtitle="A quick look at polished card layouts we’ll reuse across listings and detail pages once mock data wiring (Phase 5) lands."
          align="center"
          variant="gradient"
          subtitleClassName="font-medium"
        />
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-50/40 to-transparent dark:from-primary-500/5" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {[1,2,3,4].map(i => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1e293b] border-2 border-border dark:border-[#3a4a63] shadow-[0_5px_18px_-4px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_34px_-6px_rgba(0,0,0,0.32)] transition-all duration-300 before:absolute before:inset-0 before:rounded-[1rem] before:p-[1.5px] before:bg-gradient-to-r before:from-primary-400/50 before:via-accent-400/40 before:to-primary-400/50 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity after:pointer-events-none"
              >
                {/* Inner clipping layer to preserve background inside gradient frame */}
                <div className="relative h-full w-full rounded-[0.95rem] overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${i === 1 ? '259602' : i === 2 ? '1396132' : i === 3 ? '106399' : '1571460'}/pexels-photo-${i === 1 ? '259602' : i === 2 ? '1396132' : i === 3 ? '106399' : '1571460'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`Sample Property ${i}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-white/90 backdrop-blur-sm text-slate-800 dark:bg-white/10 dark:text-white border border-white/60 dark:border-white/15">For Rent</span>
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-primary-600 text-white shadow-sm">Featured</span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-semibold tracking-tight mb-1 text-sm md:text-base">Sample Property {i}</h3>
                    <p className="text-[11px] md:text-xs opacity-90">2 Bed • 1 Bath • 1200 sqft</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <p className="text-sm text-text-secondary dark:text-[#cbd5e1] leading-relaxed">Short description placeholder for property highlights and location context.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">$1,250/mo</span>
                    <Button size="sm" variant="outline" className="group/btn relative overflow-hidden">
                      <span className="relative z-10">View</span>
                      <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity bg-gradient-to-r from-primary-600 to-accent-500" />
                    </Button>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* CTA Banners */}
  <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white mt-20 relative overflow-hidden">
        <Container className="py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">List Your Property Today</h2>
            <p className="text-primary-50 text-sm max-w-md">Prepare your listing now. Real publishing will activate once backend APIs are integrated.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-white/10 border-white/40 hover:bg-white/20">Start Mock Listing</Button>
            <Button variant="secondary" className="bg-white text-primary-700 hover:bg-primary-50">Learn More</Button>
          </div>
        </Container>
      </div>
  <div className="bg-accent-500 text-white relative overflow-hidden">
        <Container className="py-10 text-center">
          <p className="font-medium mb-4">Coming Soon: AI-Powered Property Valuation & Smart Negotiation Advice.</p>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">Stay Updated</Button>
        </Container>
      </div>
    </div>
  );
}
