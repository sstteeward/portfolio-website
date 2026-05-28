import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, MessageSquare, User, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FeedbackEntry = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select('id, name, message, created_at')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      if (data) setFeedbacks(data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([{ name, message }])
        .select();

      if (error) throw error;

      setStatus('success');
      setName('');
      setMessage('');
      
      if (data && data.length > 0) {
        setFeedbacks(prev => [data[0], ...prev]);
      }

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err: any) {
      console.error('Error submitting feedback:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while submitting your feedback.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <section className="py-20 w-full relative overflow-hidden" id="guestbook">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 hover:border-[#F27D26] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#F27D26]" />
            <span className="text-sm font-medium text-white/80">Guestbook</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Leave Your Mark
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            I'd love to hear your thoughts! Drop a message below and join the wall of awesome visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form Column */}
          <div className="lg:col-span-5 h-fit sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-[#F27D26] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                Sign the Guestbook
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Name <span className="text-[#F27D26]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/50 focus:border-[#F27D26]/50 transition-all hover:bg-black/60 hover:border-[#F27D26]"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message <span className="text-[#F27D26]">*</span></label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/50 focus:border-[#F27D26]/50 transition-all resize-none hover:bg-black/60 hover:border-[#F27D26]"
                    placeholder="What did you think of the gallery?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full group/btn overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] px-8 py-3.5 transition-all hover:bg-white/5 hover:border-[#F27D26] disabled:opacity-70 disabled:cursor-not-allowed mt-2 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span className="font-semibold text-white">Post Message</span>
                      <Send className="w-4 h-4 text-[#F27D26] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-2xl border border-green-400/20"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">Awesome! Your message has been posted.</p>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-2xl border border-red-400/20"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

          {/* Wall Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="text-xl font-medium text-white/90">Recent Feedback</h3>
              <span className="text-sm text-white/50">{feedbacks.length} messages</span>
            </div>
            
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              {isLoading ? (
                // Skeleton loading
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl animate-pulse">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-5 bg-white/10 rounded w-1/4"></div>
                      <div className="h-4 bg-white/10 rounded w-1/6"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/10 rounded w-full"></div>
                      <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    </div>
                  </div>
                ))
              ) : feedbacks.length > 0 ? (
                <AnimatePresence>
                  {feedbacks.map((fb, index) => (
                    <motion.div
                      key={fb.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#F27D26] p-6 rounded-3xl transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-3 gap-4">
                        <h4 className="font-semibold text-lg text-white/90 group-hover:text-[#F27D26] transition-colors">
                          {fb.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-white/40 whitespace-nowrap">
                          <Clock className="w-3.5 h-3.5" />
                          <time dateTime={fb.created_at}>{formatDate(fb.created_at)}</time>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed whitespace-pre-wrap">
                        {fb.message}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed hover:border-[#F27D26] transition-colors"
                >
                  <MessageSquare className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/50 text-lg">No messages yet. Be the first!</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrollbar styles inside jsx */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
