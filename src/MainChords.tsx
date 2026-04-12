export default function MainChords({
  playChord,
}: {
  playChord: (chord: string) => void;
}) {
  return (
    <>
      <div className="orbit-0">
        <div className="satellite grow-1x">
          <div className="capsule">
            <div className="hand-icon">o</div>
          </div>
        </div>
      </div>
      <div className="orbit-3">
        {/* <button>C</button> */}
        <o-arc className="red grow-2x gap-8" onClick={() => playChord("C")} />
        <o-arc className="orange grow-2x gap-8" onClick={() => playChord("Dm")} />
        <o-arc className="yellow grow-2x gap-8" onClick={() => playChord("Em")} />
        <o-arc className="green grow-2x gap-8" onClick={() => playChord("F")} />
        <o-arc className="blue grow-2x gap-8" onClick={() => playChord("G")} />
        <o-arc className="indigo grow-2x gap-8" onClick={() => playChord("Am")} />
      </div>
      <div className="orbit-3 from-25 labels">
        <div className="satellite">
          <div className="capsule horizontal">C</div>
        </div>
        <div className="satellite">
          <div className="capsule horizontal">Dm</div>
        </div>
        <div className="satellite">
          <div className="capsule horizontal">Em</div>
        </div>
        <div className="satellite">
          <div className="capsule horizontal">F</div>
        </div>
        <div className="satellite">
          <div className="capsule horizontal">G</div>
        </div>
        <div className="satellite">
          <div className="capsule horizontal">Am</div>
        </div>
      </div>
    </>
  );
}
