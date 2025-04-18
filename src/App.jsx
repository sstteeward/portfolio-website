import styles from "./App.module.css";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Hero } from "./sections/Hero/Hero";
import { Navbar } from "./sections/Navbar/Navbar";
import { Projects } from "./sections/Projects/Projects";


function App() {

  return (
     <div className={styles.App}>
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <Projects />
       <Contact />
     </div>
  )
}

export default App
