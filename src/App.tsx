/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Feedback from './components/sections/Feedback';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="feedback">
          <Feedback />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Layout>
    </Router>
  );
}

