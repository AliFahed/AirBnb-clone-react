import React from 'react';
import '../styles/main.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Card from './Card';
import data from '../data';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="cards-section">{cards}</section>
    </div>
  );
}

export default App;
