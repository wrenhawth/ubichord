import * as _ from "lodash";
import { useEffect, useRef } from "react";
import * as Tone from "tone";
import { notesFromChord } from "./chords";
import { Key, Mode } from "tonal";

export default function NoteStrip({
  chord,
  numNotes,
}: {
  chord: string | null;
  numNotes: number;
}) {
  const melodySynth = useRef<
    Tone.MonoSynth | Tone.PluckSynth | Tone.FMSynth | Tone.MetalSynth | null
  >(null);

  useEffect(() => {
    melodySynth.current = new Tone.MonoSynth({
      oscillator: {
        type: "pwm",
      },
    }).toDestination();
  }, []);

  const playNote = (i: number) => {
    if (chord) {
      const chordIndex = Key.majorKey("C").triads.indexOf(chord);
      melodySynth?.current?.triggerRelease();
      const octave = Math.floor(i / 4) + 2;
      const noteInChord = i % 3;
      const range = [`C${octave}`, `C${octave + 2}`];
      const extendedChord = Mode.seventhChords("major", "C")[chordIndex];
      const chordNotes = notesFromChord(extendedChord, range);
      const noteToPlay = chordNotes[noteInChord];
      melodySynth?.current?.triggerAttack(noteToPlay, "+0.05");
    }
  };
  return (
    <div className="note-strip">
      {_.range(0, numNotes).map((i) => {
        return (
          <button
            key={i}
            onMouseDown={() => playNote(i)}
            onTouchStart={() => playNote(i)}
            onMouseLeave={() => melodySynth?.current?.triggerRelease()}
            onMouseUp={() => melodySynth?.current?.triggerRelease()}
            onTouchEnd={() => melodySynth?.current?.triggerRelease()}
          >
            &nbsp;
          </button>
        );
      })}
    </div>
  );
}
