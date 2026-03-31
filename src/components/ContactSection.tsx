import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    productionStage: '',
    timeline: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      );

      const { error: submitError } = await supabase.from('contact_inquiries').insert([
        {
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          production_stage: formData.productionStage,
          timeline: formData.timeline,
          message: formData.message,
        },
      ]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        productionStage: '',
        timeline: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Error submitting inquiry. Please try again.');
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 sm:px-8 bg-cinematic-charcoal border-b border-cinematic-steel">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Inquiry Received</h2>
          <p className="text-cinematic-muted">
            Thank you for your production inquiry. Responses typically within 24-48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 sm:px-8 bg-cinematic-charcoal border-b border-cinematic-steel">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">Production Inquiries</h2>
          <div className="h-px w-12 bg-white mb-8" />
          <p className="text-cinematic-muted">
            Contact for script supervision, producing, or screenwriting opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-cinematic-steel/20 border border-cinematic-steel text-white p-4 text-sm">
              {error}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-light mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors"
                placeholder="email@yourcompany.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors"
              >
                <option value="">Select project type</option>
                <option value="Feature Film">Feature Film</option>
                <option value="Series">Series / Episodic</option>
                <option value="Short">Short Film</option>
                <option value="Development">Development / Pre-Production</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-light mb-2">Production Stage</label>
              <select
                name="productionStage"
                value={formData.productionStage}
                onChange={handleChange}
                required
                className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors"
              >
                <option value="">Select production stage</option>
                <option value="Development">Development</option>
                <option value="Pre-Production">Pre-Production</option>
                <option value="Production">Production</option>
                <option value="Post-Production">Post-Production</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-light mb-2">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors"
            >
              <option value="">Select timeline</option>
              <option value="Immediate">Immediate (0-2 weeks)</option>
              <option value="Short-term">Short-term (1-2 months)</option>
              <option value="Medium-term">Medium-term (3-6 months)</option>
              <option value="Long-term">Long-term (6+ months)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-light mb-2">Details (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-cinematic-black border border-cinematic-steel px-4 py-3 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none"
              placeholder="Project details, specific needs, or additional context..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-8 py-3 bg-white text-cinematic-black font-medium hover:bg-cinematic-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {loading ? 'Sending...' : 'Request Availability'}
            </button>
          </div>
        </form>

        <div className="mt-12 pt-12 border-t border-cinematic-steel">
          <p className="text-cinematic-muted text-sm">
            Or reach out directly: <span className="text-white font-light">hayat.noorproductions@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
