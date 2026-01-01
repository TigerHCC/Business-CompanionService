import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--color-primary)', fontSize: '3rem' }}>
          <Sparkles style={{ display: 'inline', marginRight: '10px' }} />
          Teyvat Services
        </h1>
        <p>Your journey, our assistance.</p>
      </header>
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Components will go here */}
        <div style={{ textAlign: 'center', padding: '4rem', border: '1px solid var(--color-primary)', borderRadius: '1rem', background: 'var(--color-card-bg)' }}>
          <h2>Website Under Construction</h2>
          <p>Coming soon to help you conquer the Abyss!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
