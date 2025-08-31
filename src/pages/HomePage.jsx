import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

export default function HomePage() {
  return (
    <Container className="py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Find Your Next Home with Confidence</h1>
        <p className="text-text-secondary max-w-2xl mx-auto">Browse verified property listings, explore reviews, and plan services — all from one modern, intuitive interface. (Mock UI)</p>
      </section>
      <SectionHeading title="Featured Properties" subtitle="Early mock examples of property cards. Real data will replace these in a later phase." align="center" />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <Card key={i} className="p-5">
            <div className="h-32 bg-surface-alt dark:bg-[#334155] rounded mb-4" />
            <h3 className="font-semibold mb-2">Sample Property {i}</h3>
            <p className="text-sm text-text-secondary dark:text-[#cbd5e1] mb-4">Short description placeholder for property highlights and location.</p>
            <Button size="sm">View</Button>
          </Card>
        ))}
      </section>
    </Container>
  );
}
