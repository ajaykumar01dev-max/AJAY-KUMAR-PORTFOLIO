import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./project/page";
import Contact from "./contact/page";


export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}
