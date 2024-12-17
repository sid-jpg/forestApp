import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage';
import { ExecutiveCommittee } from './pages/ExecutiveCommittee';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showLanding ? (
        <LandingPage key="landing" onComplete={() => setShowLanding(false)} />
      ) : (
        <ExecutiveCommittee key="committee" />
      )}
    </AnimatePresence>
  );
}

export default App;