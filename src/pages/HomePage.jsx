export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Find Your Next Home with Confidence</h1>
        <p className="text-text-secondary max-w-2xl mx-auto">Browse verified property listings, explore reviews, and plan services — all from one modern, intuitive interface. (Mock UI)</p>
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-5 rounded-lg border border-border dark:border-[#334155] bg-white dark:bg-[#1e293b] shadow-sm">
            <div className="h-32 bg-surface-alt dark:bg-[#334155] rounded mb-4" />
            <h3 className="font-semibold mb-2">Sample Property {i}</h3>
            <p className="text-sm text-text-secondary dark:text-[#cbd5e1] mb-3">Short description placeholder for property highlights and location.</p>
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary-600 text-white hover:bg-primary-700">View</button>
          </div>
        ))}
      </section>
    </div>
  );
}
