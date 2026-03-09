/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { PlayerProfile } from './pages/PlayerProfile';
import { PerformanceAnalytics } from './pages/PerformanceAnalytics';
import { Highlights } from './pages/Highlights';
import { DevelopmentPlan } from './pages/DevelopmentPlan';
import { ScoutDiscovery } from './pages/ScoutDiscovery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<PlayerProfile />} />
        <Route path="/analytics" element={<PerformanceAnalytics />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/plan" element={<DevelopmentPlan />} />
        <Route path="/scout" element={<ScoutDiscovery />} />
      </Routes>
    </Router>
  );
}
