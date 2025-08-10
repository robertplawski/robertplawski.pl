//import Portfolio from "./Portfolio";
import ProfessionalExperience from "./components/sections/ProfessionalExperience";
import Hero from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";
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
      <Footer />
    </>
  );
}
