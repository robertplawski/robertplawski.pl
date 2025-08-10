//import Portfolio from "./Portfolio";
import ProfessionalExperience from "./components/sections/ProfessionalExperience";
import Hero from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfessionalExperience />
      {/*<Portfolio />*/}
      <Footer />
    </>
  );
}
