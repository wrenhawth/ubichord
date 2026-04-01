import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import * as Tone from "tone";
import * as _ from "lodash";
import { keysFromChords, notesFromChord } from "./chords";

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
      const lastChord = _.last(chordHistory);
      if (lastChord) {
        const lastNotes = notesFromChord(lastChord);
        polySynth?.current?.triggerRelease(lastNotes);
      }

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
  return (
    <>
      <section className="center">
        <div>
          <h1>UbiChord</h1>
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
          <button onClick={stopAll}>Stop</button>
        </div>
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
