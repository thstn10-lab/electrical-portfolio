import { About } from "./components/About";
import { Career } from "./components/Career";
import { Companies } from "./components/Companies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";
import { Strengths } from "./components/Strengths";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Companies />
        <Stats />
        <About />
        <Strengths />
        <Projects />
        <Skills />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
