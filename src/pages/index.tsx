import React from 'react';
import Header from '../components/Header/Header';
import EmailCard from '../components/EmailCard/EmailCard';
import Instructions from '../components/Instructions/Instructions';
import StoreLinks from '../components/StoreLinks/StoreLinks';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <EmailCard />
        <Instructions />
        <StoreLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;