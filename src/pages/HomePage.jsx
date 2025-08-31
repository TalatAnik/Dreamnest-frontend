import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

export default function HomePage() {
  const features = [
    { title: 'Verified Listings', desc: 'Trustworthy property information with transparency-first presentation.' },
    { title: 'Real Reviews', desc: 'Read feedback from previous tenants & buyers (mock data stage).'},
    { title: 'Secure Payments (Soon)', desc: 'Future integration with Bkash & banking APIs.'},
    { title: 'Relocation Services', desc: 'Plan movers, packers & renovators in one place (mock placeholder).'},
    { title: 'AI Valuation (Future)', desc: 'Upcoming intelligent pricing and negotiation assist.'}
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative border-b border-border/60 dark:border-[#334155] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7031403/pexels-photo-7031403.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="City skyline"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-white/30 dark:from-[#0f172a]/90 dark:via-[#0f172a]/80 dark:to-[#0f172a]/40 backdrop-blur-sm" />
        </div>
        <Container className="py-24 md:py-32 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 drop-shadow-sm">
            Find Your Next Home with Confidence
          </h1>
          <p className="text-text-secondary dark:text-[#cbd5e1] max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Search properties, explore reviews, plan services & prepare for future AI insights — all in one modern interface.
          </p>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-6 bg-white/70 dark:bg-[#1e293b]/70 p-3 rounded-lg shadow-sm backdrop-blur">
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
      <Container className="py-16">
        <SectionHeading
          title="Why DreamNest?"
          subtitle="A unified experience that brings listings, feedback and service planning together. All data is placeholder during the mock stage."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map(f => (
            <Card key={f.title} className="p-5 flex flex-col">
              <h3 className="font-semibold mb-2 text-lg">{f.title}</h3>
              <p className="text-sm text-text-secondary dark:text-[#cbd5e1] flex-1">{f.desc}</p>
            </Card>
          ))}
        </div>

        <SectionHeading
          title="Featured Properties"
          subtitle="Early mock examples of property cards. Real data will replace these in a later phase."
          align="center"
        />
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-0 overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${i === 1 ? '259602' : i === 2 ? '1396132' : '106399'}/pexels-photo-${i === 1 ? '259602' : i === 2 ? '1396132' : '106399'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Sample Property ${i}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-semibold mb-1">Sample Property {i}</h3>
                  <p className="text-xs opacity-90">2 Bed • 1 Bath • 1200 sqft</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <p className="text-sm text-text-secondary dark:text-[#cbd5e1]">Short description placeholder for property highlights and location.</p>
                <Button size="sm">View</Button>
              </div>
            </Card>
          ))}
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
