import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Instructor from '../components/Instructor';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Instructor />
      <Footer />
    </>
  );
};

export default Home;
