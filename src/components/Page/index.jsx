//The "Page" file provides the “window” through which everything besides our header and footer will show.
// import { useState, useEffect } from 'react';

import About from '../About/';
import Projects from '../Projects/';
import Resume from '../Resume';
import Contact from '../Contact/';


export default function Page() {
  return (
    <div className="page">
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );
}
