//Our "App" file gathers all of the components and renders them on-command.

import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

import About from './components/About/';
import Projects from './components/Projects/';
import Resume from './components/Resume';
import Contact from './components/Contact/';

export default function App() {
  const currentPage = useLocation().pathname;

  let currentContent;
  if (currentPage === '/About') {
    currentContent = <About />;
  } else if (currentPage === '/Projects') {
    currentContent = <Projects />;
  } else if (currentPage === '/Resume') {
    currentContent = <Resume />;
  } else if (currentPage === '/Contact') {
    currentContent = <Contact />;
  } else {
    currentContent = <About />;
  }

  return (
    <>
      <div className="portfolio">
        <Header id="header-comp"/>
        {currentContent}
        <Footer id="footer-comp"/>
      </div>
    </>
  );
}