import { useState } from 'react';
import SideArticles from './components/SideArticles';
import SmallArticles from './components/SmallArticles';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MainArticle />
          <SideArticles />
        </div>
        <SmallArticles />
      </main>
    </div>
  );
}

export default App;