import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
// import "@zumer/orbit/style";
import "@zumer/orbit";

import * as Tone from "tone";
import { keysFromChords, notesFromChord } from "./chords";
import MainChords from "./MainChords";
import SecondaryChords from "./SecondaryChords";

function App() {
  const polySynth = useRef<Tone.PolySynth | null>(null);

  const [chordHistory, setChordHistory] = useState<string[]>([]);
  console.log(keysFromChords(chordHistory));

  useEffect(() => {
    polySynth.current = new Tone.PolySynth({
      voice: Tone.Synth,
      maxPolyphony: 14,
    }).toDestination();
  }, []);

  const playChord = useCallback(
    (chord: string) => {
      polySynth?.current?.releaseAll();

      const notes = notesFromChord(chord);
      polySynth?.current?.triggerAttack(notes);
      setChordHistory([...chordHistory, chord]);
    },
    [chordHistory],
  );

  const stopAll = useCallback(() => {
    polySynth.current?.releaseAll();
    setChordHistory([]);
  }, []);

  // const possibleKeys = keysFromChords(_.takeRight(chordHistory, 3));
  return (
    <div className="center">
      <div>
        <h1>UbiChord</h1>
        <p>Tap the buttons on the wheel to chain notes. To pause the sound click stop.</p>
        <button className="stop-sound" onClick={stopAll}>Stop</button>
      </div>
      <div className="bigbang">
        <div className="gravity-spot">
          <MainChords playChord={playChord} />
          <SecondaryChords playChord={playChord} />
        </div>

        {/* </div> */}
        {/* <section className="center">
        <div>
          <MainChords />
          <button
            onClick={() => {
              playChord("C");
            }}
          >
            C Major
          </button>

          <button
            onClick={() => {
              playChord("F");
            }}
          >
            F Major
          </button>
          <button
            onClick={() => {
              playChord("G");
            }}
          >
            G Major
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              playChord("Am");
            }}
          >
            A minor
          </button>
          <button
            onClick={() => {
              playChord("Dm");
            }}
          >
            D minor
          </button>
          <button
            onClick={() => {
              playChord("Em");
            }}
          >
            E minor
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              playChord("G7");
            }}
          >
            G7
          </button>
          <button
            onClick={() => {
              playChord("E7");
            }}
          >
            E7
          </button>
          <button
            onClick={() => {
              playChord("C7");
            }}
          >
            C7
          </button>
          <button
            onClick={() => {
              playChord("A7");
            }}
          >
            A7
          </button>
          <button
            onClick={() => {
              playChord("D7");
            }}
          >
            D7
          </button>
        </div>
        
        <div>
          <h2>Possible Keys of Last 3 Chords</h2>
          <ul>
            {possibleKeys.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>
      </section> */}
      </div>

      <div className="ticks"></div>
    </div>
  );
}

export default App;
