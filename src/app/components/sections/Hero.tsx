import { ContactInfo } from "@/app/components/interactable/ContactInfo";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import {
  BiLogoPhp,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoWordpress,
} from "react-icons/bi";
import { DiLinux } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaChevronDown, FaDocker } from "react-icons/fa";
import { HeroButton } from "@/app/components/interactable/HeroButton";
import { JobStatus } from "@/app/components/informational/JobStatus";
import { TechIconLink } from "@/app/components/interactable/TechIconLink";
import EyeCandy from "../../EyeCandy";

function Hero() {
  return (
    <div className="relative font-sans  max-w-screen flex justify-center items-center flex-col gap-8 min-h-screen p-8 gap-0 lg:p-20">
      <EyeCandy />
      <div className={"sm:scale-100 xl:scale-130"}>
        <main className="translate-y-6 grid grid-cols-1 border-neutral-700  lg:grid-cols-[1fr_auto] items-center gap-[32px] lg:gap-[48px] row-start-1 justify-center ">
          <h1 className="tracking-wide text-4xl sm:text-5xl lg:text-6xl font-bold">
            Robert Pławski
            <br /> software developer
            <br />
          </h1>
          <div
            className={
              "flex flex-col h-full justify-evenly row-span-2 gap-2 text-xl"
            }
          >
            <ContactInfo
              icon={<FaLocationPin />}
              label={"Robert's location"}
              value={"Opole, Poland"}
            />
            <ContactInfo
              icon={<MdEmail />}
              label={"Robert's email address"}
              href={"mailto:dev@robertplawski.pl"}
              value={"dev@robertplawski.pl"}
            />
            <ContactInfo
              icon={<MdPhone />}
              label={"Robert's phone number"}
              href={"tel:+48660206188"}
              value={"+48 660 206 188"}
              fallback={"+48 ___ ___ ___"}
            />
            <ContactInfo
              icon={<BsGithub />}
              label={"Robert's Github account"}
              href={"https://github.com/robertplawski"}
              value={"robertplawski"}
            />
          </div>

          <div className={"flex flex-col gap-4"}>
            <div
              className={
                "grid grid-cols-5 md:grid-cols-9 text-4xl items-center  gap-2 justify-between "
              }
            >
              <TechIconLink
                icon={<BiLogoTypescript />}
                href="https://www.typescriptlang.org/"
                label="TypeScript"
              />
              <TechIconLink
                icon={<BiLogoReact />}
                href="https://react.dev/"
                label="React"
              />
              <TechIconLink
                icon={<BiLogoWordpress />}
                href="https://wordpress.org/"
                label="WordPress"
              />
              <TechIconLink
                icon={<BiLogoPhp />}
                href="https://www.php.net/"
                label="PHP"
              />
              <TechIconLink
                icon={<SiMysql />}
                href="https://www.mysql.com/"
                label="MySQL"
              />
              <TechIconLink
                icon={<BiLogoPython />}
                href="https://www.python.org/"
                label="Python"
              />
              <TechIconLink
                icon={<FaDocker />}
                href="https://www.docker.com/"
                label="Docker"
              />
              <TechIconLink
                icon={<DiLinux />}
                href="https://www.linux.org/"
                label="Linux"
              />
              <p className={"text-sm tracking-tight"}>+ more...</p>
            </div>
          </div>
          <div
            className={
              "  sm:text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full flex-wrap gap-2"
            }
          >
            <HeroButton variant="hero" href={"mailto:dev@robertplawski.pl"}>
              Email me!
            </HeroButton>
            {false && (
              <HeroButton variant="secondary" href={"#portfolio"}>
                Scroll down
              </HeroButton>
            )}
          </div>
          <JobStatus />
        </main>
      </div>
      <div className={"flex flex-col gap-2 items-center absolute  bottom-10"}>
        <FaChevronDown />
      </div>
    </div>
  );
}

export default Hero;
