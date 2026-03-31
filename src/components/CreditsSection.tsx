import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface Credit {
  id: string;
  project_title: string;
  role: string;
  format: string;
  status: string;
  order: number;
}

export default function CreditsSection() {
  const [credits, setCredits] = useState<Credit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const supabase = createClient(
          import.meta.env.VITE_SUPABASE_URL,
          import.meta.env.VITE_SUPABASE_ANON_KEY
        );

        const { data, error } = await supabase
          .from('credits')
          .select('*')
          .order('order', { ascending: true });

        if (error) throw error;
        setCredits(data || []);
      } catch (error) {
        console.error('Error fetching credits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-white';
      case 'In Development':
        return 'text-cinematic-muted';
      case 'Pre-Production':
        return 'text-cinematic-steel';
      default:
        return 'text-cinematic-muted';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Script Supervisor':
        return 'border-white';
      case 'Producer':
        return 'border-cinematic-steel';
      case 'Screenwriter':
        return 'border-cinematic-muted';
      default:
        return 'border-cinematic-slate';
    }
  };

  return (
    <section id="credits-section" className="py-24 px-6 sm:px-8 bg-cinematic-charcoal border-b border-cinematic-steel">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">Credits</h2>
          <div className="h-px w-12 bg-white mb-8" />
          <p className="text-cinematic-muted text-lg">
            A record of productions, roles, and career involvement across feature films, series, and development.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-cinematic-muted">Loading credits...</p>
          </div>
        ) : credits.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-cinematic-muted">Credits loading...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {credits.map((credit) => (
              <div
                key={credit.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-6 border-b border-cinematic-steel/50 hover:border-cinematic-steel/80 transition-colors duration-200 last:border-b-0"
              >
                {/* Project Title */}
                <div className="sm:col-span-5">
                  <h3 className="text-lg font-light text-white">{credit.project_title}</h3>
                </div>

                {/* Role */}
                <div className="sm:col-span-3">
                  <p className={`text-sm border-l-2 pl-4 ${getRoleColor(credit.role)}`}>
                    {credit.role}
                  </p>
                </div>

                {/* Format */}
                <div className="sm:col-span-2">
                  <p className="text-sm text-cinematic-slate uppercase tracking-tight">
                    {credit.format}
                  </p>
                </div>

                {/* Status */}
                <div className="sm:col-span-2">
                  <p className={`text-sm uppercase tracking-tight ${getStatusColor(credit.status)}`}>
                    {credit.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {credits.length > 0 && (
          <div className="mt-12 pt-12 border-t border-cinematic-steel text-center">
            <p className="text-cinematic-muted text-sm">
              {credits.length} productions on record | Development to completion
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
