export default function App() {
  const showStory = false;
  const xItem = "";
  const yItem = "";
  const zItem = "";
  const ukus = "us";
  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          Bob saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}
