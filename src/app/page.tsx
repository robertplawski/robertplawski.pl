// import Portfolio from "./components/sections/Portfolio";
import ProfessionalExperience from "./components/sections/ProfessionalExperience";
import Hero from "./components/sections/Hero";
// import { Footer } from "./components/sections/Footer";
import { CurrentYear } from "./components/informational/CurrentYear";
import SourceCode from "./components/sections/SourceCode";
import Agent from "./components/sections/Agent";
import Portfolio from "./components/sections/Portfolio";
import FrequentlyAskedQuestions from "./components/sections/FrequentlyAskedQuestions";
import NavigateUpArrow from "./components/interactable/NavigateUpArrow";
// import Contact from "./components/sections/Contact";
// import Testimonials from "./components/sections/Testimonials";
// import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <NavigateUpArrow />
      <Hero />
      <ProfessionalExperience />
      {/* <Testimonials /> */}
      <Portfolio />
      {/* <Footer /> */}
      <FrequentlyAskedQuestions />
      <Agent />
      {/* <Contact /> */}
      <SourceCode />
      <div className="font-mono text-sm bg-neutral-950 border-neutral-200 dark:border-neutral-900 p-8 text-center">
        <p className="  dark:text-neutral-200">
          robertplawski.pl © <CurrentYear />
        </p>
      </div>
    </>
  );
}
