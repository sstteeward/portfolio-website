import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function ViewerCounter() {
  const [activeViewers, setActiveViewers] = useState<number>(1);
  const [totalViews, setTotalViews] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function handleDatabaseViewCount() {
      if (!supabase) {
        // Fallback: Start real count from 1 (or stored session count)
        const stored = localStorage.getItem('real_portfolio_views');
        const sessionVisited = sessionStorage.getItem('portfolio_visited');
        let count = stored ? parseInt(stored, 10) : 1;

        if (!sessionVisited) {
          count += 1;
          localStorage.setItem('real_portfolio_views', count.toString());
          sessionStorage.setItem('portfolio_visited', 'true');
        }

        if (isMounted) {
          setTotalViews(count);
          setLoading(false);
        }
        return;
      }

      try {
        const sessionVisited = sessionStorage.getItem('portfolio_visited');

        // Fetch current views row from 'page_views' table
        const { data, error } = await supabase
          .from('page_views')
          .select('views')
          .eq('id', 1)
          .single();

        if (error && error.code === 'PGRST116') {
          // Table or row doesn't exist yet: insert first row
          const { data: newRow } = await supabase
            .from('page_views')
            .insert([{ id: 1, views: 1 }])
            .select()
            .single();

          if (isMounted && newRow) {
            setTotalViews(newRow.views);
          }
        } else if (data) {
          let currentViews = data.views || 0;

          if (!sessionVisited) {
            currentViews += 1;
            // Update database count
            await supabase
              .from('page_views')
              .update({ views: currentViews })
              .eq('id', 1);

            sessionStorage.setItem('portfolio_visited', 'true');
          }

          if (isMounted) {
            setTotalViews(currentViews);
          }
        }
      } catch (err) {
        console.error('Error updating DB page views:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    handleDatabaseViewCount();

    // Realtime Supabase Presence tracking for "Watching Now"
    if (supabase) {
      const channel = supabase.channel('portfolio_presence', {
        config: {
          presence: { key: Math.random().toString(36).substring(2) },
        },
      });

      channel
        .on('presence', { event: 'sync' }, () => {
          const state = channel.presenceState();
          const count = Object.keys(state).length;
          if (isMounted) {
            setActiveViewers(Math.max(1, count));
          }
        })
        .subscribe(async (status) => {
          if (status === 'SUBSCRIBED') {
            await channel.track({ online_at: new Date().toISOString() });
          }
        });

      return () => {
        isMounted = false;
        supabase.removeChannel(channel);
      };
    } else {
      if (isMounted) setActiveViewers(1);
      return () => {
        isMounted = false;
      };
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-[#F27D26]/50 hover:shadow-[0_0_12px_rgba(242,125,38,0.15)] transition-all duration-300 text-[11px] font-mono select-none">
      {/* Watching Now / Live */}
      <div className="flex items-center gap-1.5" title="Real active viewers right now">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
        </span>
        <span className="font-semibold text-emerald-400">{activeViewers}</span>
        <span className="hidden sm:inline text-white/50 text-[9px] tracking-wider uppercase">watching now</span>
      </div>

      <span className="text-white/15">|</span>

      {/* Total Views */}
      <div className="flex items-center gap-1.5" title="Real total views saved in database">
        <Eye className="h-3 w-3 text-[#F27D26]" />
        <span className="font-semibold text-white/90">
          {loading ? '...' : totalViews.toLocaleString()}
        </span>
        <span className="hidden sm:inline text-white/50 text-[9px] tracking-wider uppercase">views</span>
      </div>
    </div>
  );
}


