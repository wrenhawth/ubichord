import * as _ from "lodash";

export default function NoteStrip({
  chord,
  numNotes,
}: {
  chord: string | null;
  numNotes: number;
}) {
  return (
    <div className="note-strip">
      {_.range(0, numNotes).map((i) => {
        return <button key={i}>&nbsp;</button>;
      })}
    </div>
  );
}
