import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface FeedbackEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const isConfigured = !!supabase;

  // Fetch existing feedbacks on mount
  useEffect(() => {
    if (!isConfigured) {
      setLoadingFeedbacks(false);
      return;
    }
    const fetchFeedbacks = async () => {
      try {
        const { data, error } = await supabase!
          .from('feedback')
          .select('id, name, message, created_at')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setFeedbacks(data || []);
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
      } finally {
        setLoadingFeedbacks(false);
      }
    };

    fetchFeedbacks();
  }, [isConfigured]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfigured || !message.trim()) return;

    setSubmitStatus('loading');

    try {
      const finalName = name.trim() || 'Anonymous';
      const { data, error } = await supabase!
        .from('feedback')
        .insert([{ name: finalName, message: message.trim() }])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        // Prepend the new feedback item immediately with animation
        setFeedbacks((prev) => [data[0], ...prev]);
      }

      setSubmitStatus('success');
      setName('');
      setMessage('');

      // Reset success status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  // Helper to generate initials from name
  const getInitials = (nameStr: string) => {
    const cleanName = nameStr.trim();
    if (!cleanName) return 'A';
    const parts = cleanName.split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  // Helper to generate deterministic pastel theme color based on name hash
  const getAvatarStyle = (nameStr: string) => {
    let hash = 0;
    const cleanName = nameStr.trim() || 'Anonymous';
    for (let i = 0; i < cleanName.length; i++) {
      hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return {
      background: `linear-gradient(135deg, hsl(${hue}, 70%, 45%) 0%, hsl(${(hue + 40) % 360}, 75%, 35%) 100%)`,
      boxShadow: `0 4px 12px -2px hsla(${hue}, 70%, 40%, 0.3)`
    };
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Just now';
    }
  };

  if (!isConfigured) {
    return (
      <section className="w-full py-16 border-t border-white/10" id="feedback-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 text-center max-w-2xl mx-auto shadow-2xl">
            <MessageSquare className="h-10 w-10 text-amber-500/80 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Guestbook Offline</h3>
            <p className="text-white/60 text-sm mb-4">
              The feedback section is currently disabled because the Supabase environment variables are missing.
            </p>
            <div className="inline-block text-left text-xs font-mono bg-black/40 border border-white/10 rounded-xl p-4 text-white/80">
              <p>Please define these environment variables in your deployment settings:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-amber-400/90">
                <li>VITE_SUPABASE_URL</li>
                <li>VITE_SUPABASE_ANON_KEY</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 border-t border-white/10" id="feedback-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3 hover:border-[#F27D26] transition-colors">
            <MessageSquare className="h-4 w-4 text-[#F27D26]" />
            <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">Visitor Corner</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Guestbook & Feedback</h2>
          <p className="text-white/60 max-w-xl">
            Have a question, feedback, or just want to say hi? Leave a message below!
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-[1.1fr_1.5fr] gap-10 items-start">
          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 md:p-8 shadow-2xl relative overflow-hidden hover:border-[#F27D26] transition-colors group/form"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#F27D26]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-6">Leave a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26] transition-all duration-300"
                  placeholder="Anonymous"
                  disabled={submitStatus === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Message <span className="text-[#F27D26]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#F27D26] focus:outline-none focus:ring-1 focus:ring-[#F27D26] transition-all duration-300 resize-none"
                  placeholder="Share your thoughts..."
                  disabled={submitStatus === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading' || !message.trim()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-[#F27D26] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F27D26]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-[#F27D26]/30 cursor-pointer"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Feedback
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center text-emerald-400 text-xs font-semibold"
                  >
                    Thank you! Your feedback has been shared.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-center text-red-400 text-xs font-semibold"
                  >
                    Failed to submit. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Feedback Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full self-stretch"
          >
            <h3 className="text-xl font-bold text-white mb-6">Recent Messages</h3>

            <div className="flex-1 max-h-[460px] overflow-y-auto pr-2 space-y-4 custom-scrollbar scroll-fade-mask">
              {loadingFeedbacks ? (
                <div className="flex flex-col items-center justify-center py-20 text-white/40 gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-[#F27D26]" />
                  <span className="text-sm">Loading guestbook...</span>
                </div>
              ) : feedbacks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-white/5 bg-white/[0.01] border-dashed p-8">
                  <MessageSquare className="h-10 w-10 text-white/20 mb-3" />
                  <p className="text-white/40 text-sm">No messages yet. Be the first to leave one!</p>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {feedbacks.map((entry) => (
                    <motion.div
                      key={entry.id}
                      layout
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 hover:bg-white/[0.04] hover:border-[#F27D26] transition-all duration-300 shadow-md flex gap-4"
                    >
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 select-none shadow-sm"
                        style={getAvatarStyle(entry.name)}
                      >
                        {getInitials(entry.name)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h4 className="font-semibold text-white/90 text-sm truncate">
                            {entry.name}
                          </h4>
                          <span className="text-[10px] font-medium text-white/35 uppercase tracking-wider flex-shrink-0">
                            {formatDate(entry.created_at)}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed break-words whitespace-pre-wrap">
                          {entry.message}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
