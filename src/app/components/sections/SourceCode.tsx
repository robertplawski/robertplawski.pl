"use client";
import LetterGlitch from "@/app/bits/LetterGlitch/LetterGlitch";
import { HeroButton } from "@/app/components/interactable/HeroButton";

function SourceCode() {
  return (
    <section
      id="source"
      className="font-sans relative py-40 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y-1 border-neutral-700"
    >
      <div className="opacity-30 absolute top-0 left-0 w-full h-full">
        <LetterGlitch
          glitchColors={["#e5e5e5", "#a3a3a3", "cacaca", "#737373"]}
          glitchSpeed={10}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl ">
        <div className="text-center mb-16 flex flex-col gap-4 items-center">
          <h2 className="text-4xl font-bold max-w-lg tracking-tight text-white sm:text-5xl mb-4">
            Do you want to see behind the simulation?
          </h2>
          <q className="text-xl text-neutral-300 max-w-2xl mx-auto">
            I don&apos;t even see the code. All I see is blonde, brunette,
            redhead.
          </q>
          <div className="mt-8">
            <HeroButton
              href="https://github.com/robertplawski/robertplawski.pl"
              variant="secondary"
            >
              View source on GitHub
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SourceCode;
