//import Portfolio from "./Portfolio";
import ProfessionalExperience from "./components/sections/ProfessionalExperience";
import Hero from "./components/sections/Hero";
// import { Footer } from "./components/sections/Footer";
import { CurrentYear } from "./components/informational/CurrentYear";
import SourceCode from "./components/sections/SourceCode";
// import Testimonials from "./components/sections/Testimonials";
// import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfessionalExperience />
      {/*<Testimonials />*/}
      {/*<Portfolio />*/}
      {/*<Contact />*/}
      {/* <Footer /> */}
      <SourceCode />
      <div className="bg-neutral-900 border-neutral-200 dark:border-neutral-900 p-8 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          robertplawski.pl © <CurrentYear />
        </p>
      </div>
    </>
  );
}
