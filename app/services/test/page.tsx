export default function TestPage() {
  const services = {
    'oil-change': { title: 'Oil Change & Filter' },
    'engine-diagnostics': { title: 'Engine Diagnostics' }
  };
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Test Service Page</h1>
        <p>This is a test page to verify routing works.</p>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Available Services:</h2>
          <ul>
            {Object.entries(services).map(([key, service]) => (
              <li key={key} className="mb-2">
                <a href={`/services/${key}`} className="text-blue-600 hover:underline">
                  {key} → {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}