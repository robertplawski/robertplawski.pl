"use client";
import Waves from "./bits/Waves/Waves";

export default function EyeCandy() {
  return (
    <div className="absolute pointer-events-none w-full h-full opacity-8">
      <Waves
        lineColor="#fafafa"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={0}
        xGap={12}
        yGap={36}
      />
      {/*<Dither
        waveColor={new Array(3).fill(0.9) as [number, number, number]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={3}
        waveAmplitude={0.25}
        waveFrequency={4}
        waveSpeed={0.015}
      />*/}
    </div>
  );
}
