export default function SecondaryChords({
  playChord,
}: {
  playChord: (chord: string) => void;
}) {
  return (
    <>
      <div className="orbit-6 arrows from-355">
        <o-arc>⬇</o-arc>
        <o-arc>⬇</o-arc>
        <o-arc>⬇</o-arc>
        <o-arc>⬇</o-arc>
        <o-arc>⬇</o-arc>
        <o-arc>⬇</o-arc>
      </div>
      <div className="orbit-7 from-25">
        <div
          className="satellite rounded-box grow-0.5x blue"
          onClick={() => playChord("G7")}
        >
          <div className="capsule horizontal">G7</div>
        </div>
        <div
          className="satellite rounded-box grow-0.5x indigo"
          onClick={() => playChord("A7")}
        >
          <div className="capsule horizontal">A7</div>
        </div>
        <div
          className="satellite rounded-box grow-0.5x violet"
          onClick={() => playChord("B7")}
        >
          <div className="capsule horizontal">B7</div>
        </div>
        <div
          className="satellite rounded-box grow-0.5x red"
          onClick={() => playChord("C7")}
        >
          <div className="capsule horizontal">C7</div>
        </div>
        <div
          className="satellite rounded-box grow-0.5x orange"
          onClick={() => playChord("D7")}
        >
          <div className="capsule horizontal">D7</div>
        </div>
        <div
          className="satellite rounded-box grow-0.5x yellow"
          onClick={() => playChord("E7")}
        >
          <div className="capsule horizontal">E7</div>
        </div>
      </div>
    </>
  );
}
