/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { Session } from '@supabase/supabase-js';

import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { PlayerProfile } from './pages/PlayerProfile';
import { PerformanceAnalytics } from './pages/PerformanceAnalytics';
import { Highlights } from './pages/Highlights';
import { DevelopmentPlan } from './pages/DevelopmentPlan';
import { ScoutDiscovery } from './pages/ScoutDiscovery';
import { ProfileSetup } from './pages/ProfileSetup';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark font-display flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 bg-gradient-to-tr from-primary to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
          <span className="text-2xl font-black text-background-dark">BR</span>
        </div>
        <p className="text-primary font-bold tracking-widest uppercase text-xs animate-pulse">Carregando Campo...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setup" element={<ProfileSetup />} />
        <Route path="/profile" element={<PlayerProfile />} />
        <Route path="/analytics" element={<PerformanceAnalytics />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/plan" element={<DevelopmentPlan />} />
        <Route path="/scout" element={<ScoutDiscovery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
