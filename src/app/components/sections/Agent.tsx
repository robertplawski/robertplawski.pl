"use client";
import AnimatedGrid from "@/app/bits/AnimatedGrid/AnimatedGrid";
import AgentConversation from "../interactable/AgentConversation";

function Agent() {
  return (
    <div className="relative font-sans flex flex-col items-center">
      <div className="z-10 max-w-3xl p-24 flex flex-col gap-8">
        <h2 className="text-4xl font-bold sm:text-5xl text-center">
          Ask my agent anything
        </h2>

        <AgentConversation />
        <p className="text-muted-foreground text-lg text-center">
          I’ve built an AI to handle questions when I’m away, but I’d prefer you
          email me at dev@robertplawski.pl. All messages are stored.
        </p>
      </div>

      <AnimatedGrid />
    </div>
  );
}

export default Agent;
