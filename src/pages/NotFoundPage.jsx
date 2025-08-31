import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">404</h1>
      <p className="text-text-secondary mb-8">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
      <Link to="/" className="px-5 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 text-sm font-medium">Back Home</Link>
    </div>
  );
}
