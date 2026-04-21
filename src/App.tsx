import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import "@zumer/orbit";

import * as Tone from "tone";
import { notesFromChord } from "./chords";
import MainChords from "./MainChords";
import SecondaryChords from "./SecondaryChords";
import NoteStrip from "./NoteStrip";

function App() {
  const polySynth = useRef<Tone.PolySynth | null>(null);

  const [chordHistory, setChordHistory] = useState<string[]>([]);
  const [chord, setChord] = useState<string | null>(null);
  useEffect(() => {
    polySynth.current = new Tone.PolySynth({
      voice: Tone.Synth,
      maxPolyphony: 14,
    }).toDestination();
  }, []);

  const playChord = useCallback(
    (chord: string) => {
      const t = Tone.getTransport();
      if (t.state !== "started") {
        t.start();
      }
      polySynth?.current?.releaseAll("+0.05");
      const notes = notesFromChord(chord);
      polySynth?.current?.triggerAttack(notes, "+0.1");
      setChord(chord);
      setChordHistory([...chordHistory, chord]);
    },
    [chordHistory],
  );

  const stopAll = useCallback(() => {
    setChord(null);
    polySynth.current?.releaseAll();
    Tone.getTransport().stop();
    setChordHistory([]);
  }, []);

  return (
    <div className="center">
      <div>
        <h1>UbiChord</h1>
        <p>
          Tap the buttons on the wheel to chain notes. To pause the sound, click
          stop.
        </p>
        <button className="stop-sound" onClick={stopAll}>
          Stop
        </button>
      </div>

      <div className="container">
        {/* <div className="chords"> */}
        <div className="bigbang">
          <div className="gravity-spot">
            <MainChords currentChord={chord} playChord={playChord} />
            <SecondaryChords playChord={playChord} />
          </div>
        </div>

        <NoteStrip chord={chord} numNotes={14} />
      </div>
      <div className="ticks"></div>
    </div>
  );
}

export default App;
