import clsx from "clsx";

export default function MainChords({
  currentChord,
  playChord,
}: {
  currentChord: string | null;
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
        <o-arc
          className={clsx(
            "red grow-2x gap-8",
            currentChord === "C" && "active",
          )}
          onClick={() => playChord("C")}
        />
        <o-arc
          className={clsx(
            "orange grow-2x gap-8",
            currentChord === "Dm" && "active",
          )}
          onClick={() => playChord("Dm")}
        />
        <o-arc
          className={clsx(
            "yellow grow-2x gap-8",
            currentChord === "Em" && "active",
          )}
          onClick={() => playChord("Em")}
        />
        <o-arc
          className={clsx(
            "green grow-2x gap-8",
            currentChord === "F" && "active",
          )}
          onClick={() => playChord("F")}
        />
        <o-arc
          className={clsx(
            "blue grow-2x gap-8",
            currentChord === "G" && "active",
          )}
          onClick={() => playChord("G")}
        />
        <o-arc
          className={clsx(
            "indigo grow-2x gap-8",
            currentChord === "Am" && "active",
          )}
          onClick={() => playChord("Am")}
        />
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
