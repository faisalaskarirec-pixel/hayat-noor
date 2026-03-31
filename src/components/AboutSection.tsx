import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const expertise = [
    {
      title: 'Script Supervision',
      description: 'On-set continuity management, script updates, scene consistency tracking. Ensures narrative integrity from shoot to post-production.',
    },
    {
      title: 'Producing & Packaging',
      description: 'Project development, investor-ready materials, production alignment. Structures creative vision for financing and execution.',
    },
    {
      title: 'Screenwriting',
      description: 'Story development, structural rewrites, episodic and feature work. Refines scripts for clarity, impact, and production readiness.',
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 bg-cinematic-charcoal border-b border-cinematic-steel">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">About</h2>
          <div className="h-px w-12 bg-white mb-8" />
        </div>

        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-lg text-cinematic-muted leading-relaxed mb-6 font-light">
            Hayat Noor is a production professional with expertise across screenplay development, on-set continuity management, and producer relations. Over 15 years, she has supported 50+ productions—from feature films to episodic television and development-stage projects—bringing cross-functional mastery to every role.
          </p>
          <p className="text-lg text-cinematic-muted leading-relaxed mb-6 font-light">
            Her approach prioritizes outcomes: minimizing production errors through meticulous continuity, improving shoot efficiency via strategic packaging, and strengthening script-to-screen execution through structural clarity. She works with precision, calm under deadline pressure, and deep respect for the collaborative filmmaking process.
          </p>
          <p className="text-lg text-cinematic-muted leading-relaxed font-light">
            Whether managing complex on-set logistics, developing investor-ready materials, or refining scripts for production readiness, Hayat brings the operational excellence and industry insight that separates working professionals from part-time practitioners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="border-l border-cinematic-steel pl-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 size={20} className="text-white flex-shrink-0 mt-1" />
                <h3 className="text-xl font-light">{item.title}</h3>
              </div>
              <p className="text-cinematic-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
