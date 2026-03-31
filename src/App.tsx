import { useEffect, useRef, useState } from "react";
import "./App.css";

import { MonoSynth, now, PolySynth } from "tone";

function App() {
  const polySynth = useRef<PolySynth | null>(null);

  useEffect(() => {
    polySynth.current = new PolySynth({
      voice: MonoSynth,
      maxPolyphony: 14,
    }).toDestination();
  });

  return (
    <>
      <section id="center">
        <div>
          <h1>UbiChord</h1>
          <button
            onClick={() => {
              polySynth?.current?.releaseAll("8n");
              polySynth?.current?.triggerAttackRelease(
                ["C4", "E4", "G4"],
                "2n",
                now(),
              );
            }}
          >
            C Major
          </button>

          <button
            onClick={() => {
              polySynth?.current?.releaseAll();
              polySynth?.current?.triggerAttackRelease(
                ["A3", "C4", "E4"],
                "2n",
                now(),
              );
            }}
          >
            A minor
          </button>
          <button
            onClick={() => {
              polySynth?.current?.releaseAll();

              polySynth?.current?.triggerAttackRelease(
                ["F4", "A4", "C5"],
                "2n",
                now(),
              );
            }}
          >
            F Major
          </button>
          <button
            onClick={() => {
              polySynth?.current?.releaseAll();

              polySynth?.current?.triggerAttackRelease(
                ["G4", "B4", "D5"],
                "2n",
                now(),
              );
            }}
          >
            G Major
          </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
