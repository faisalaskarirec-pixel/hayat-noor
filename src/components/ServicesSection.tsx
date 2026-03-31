import { Film, Package, PenTool, FileText } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Film,
      title: 'Script Supervision',
      description: 'On-set narrative control and continuity integrity throughout production.',
      highlights: ['Continuity tracking', 'Script updates', 'Scene consistency'],
    },
    {
      icon: Package,
      title: 'Producing & Packaging',
      description: 'Structuring projects for development, financing, and production execution.',
      highlights: ['Project packaging', 'Investor-ready materials', 'Production alignment'],
    },
    {
      icon: PenTool,
      title: 'Screenwriting & Development',
      description: 'Script refinement for clarity, structure, and production execution.',
      highlights: ['Rewrites', 'Story development', 'Episodic and feature work'],
    },
    {
      icon: FileText,
      title: 'Script Coverage & Analysis',
      description: 'Industry-standard evaluation for development and decision-making.',
      highlights: ['Coverage reports', 'Story notes', 'Commercial viability insights'],
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 bg-cinematic-black border-b border-cinematic-steel">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">Services</h2>
          <div className="h-px w-12 bg-white mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border border-cinematic-steel p-8 hover:bg-cinematic-charcoal/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon size={32} className="text-white flex-shrink-0" />
                  <h3 className="text-xl font-light">{service.title}</h3>
                </div>
                <p className="text-cinematic-muted mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-cinematic-muted">
                      <span className="w-1.5 h-1.5 bg-cinematic-steel rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
