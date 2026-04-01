import { Chord, Scale, Voicing, VoicingDictionary } from "tonal";
import { middle } from "./utils";
import { uniq } from "lodash";

export const notesFromChord = (chord: string, range?: string[]): string[] => {
  const voicings = Voicing.search(chord, range, VoicingDictionary.all);
  return middle(voicings);
};

export const keysFromChords = (chords: string[]): string[] => {
  const noteList = chords.flatMap((c) => Chord.get(c).notes);
  const uniqNotes = uniq(noteList);
  const possibleKeys = uniqNotes.flatMap((n) => {
    const scales = Scale.detect(uniqNotes, { tonic: n });
    return scales.filter((s) => {
      const parts = s.split(" ");
      if (parts.length > 2) {
        return false;
      }
      return s.endsWith("major") || s.endsWith("minor");
    });
  });
  console.log(possibleKeys);
  return possibleKeys;
};
