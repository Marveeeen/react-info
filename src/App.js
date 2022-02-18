import React from 'react';

import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='container'>
      <header>
        <Info />
      </header>
      <main>
        <About />
        <Interest />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
