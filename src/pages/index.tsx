import React from 'react';
import Header from '../components/Header/Header';
import EmailSection from '../components/EmailSection/EmailSection';
import StoreLinks from '../components/StoreLinks/StoreLinks';
import Footer from '../components/Footer/Footer';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <EmailSection />
        <StoreLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;