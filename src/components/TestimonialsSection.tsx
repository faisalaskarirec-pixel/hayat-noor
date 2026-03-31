import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_role: string;
  author_company?: string;
  order: number;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabase = createClient(
          import.meta.env.VITE_SUPABASE_URL,
          import.meta.env.VITE_SUPABASE_ANON_KEY
        );

        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('order', { ascending: true });

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-24 px-6 sm:px-8 bg-cinematic-black border-b border-cinematic-steel">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">Feedback</h2>
          <div className="h-px w-12 bg-white mb-8" />
          <p className="text-cinematic-muted text-lg">
            Operational feedback from directors, producers, and production teams.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-cinematic-muted">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-cinematic-muted">Testimonials loading...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-cinematic-steel p-8 hover:bg-cinematic-charcoal/50 transition-colors duration-300"
              >
                <blockquote className="mb-6">
                  <p className="text-cinematic-muted leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <div className="border-t border-cinematic-steel/50 pt-4">
                  <p className="text-white font-light text-sm">{testimonial.author_name}</p>
                  <p className="text-cinematic-slate text-xs uppercase tracking-tight mt-1">
                    {testimonial.author_role}
                  </p>
                  {testimonial.author_company && (
                    <p className="text-cinematic-muted text-xs mt-2">{testimonial.author_company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
