import React from 'react'
import Header from './Header';
import Aboutsection from './Aboutsection';
import Expert from './Expert';
import Client from './Client';
import Sectionpink from './Sectionpink';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
        <Header/>
        <Aboutsection/>
        <Expert/>
        <Client/>
        <Sectionpink/>
        <Footer/>
    </div>
  )
}

export default AboutPage;