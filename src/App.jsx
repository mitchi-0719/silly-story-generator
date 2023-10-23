import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("Bob");
  const [ukus, setUkus] = useState("us");
  const [weight, setWeight] = useState("300 ponds");
  const [temperature, setTemperature] = useState("94 fahrenheit");

  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function handleClick() {
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
    setDisplayName(name);
    setShowStory(true);
    console.log(ukus)
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleRadioChange(e) {
    if (e.target.value == "us") {
      setTemperature("94 fahrenheit");
      setWeight("300 pounds");
    } else {
      setTemperature("34 centigrade");
      setWeight("21 stone");
    }
    setUkus(e.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={ukus === "us"}
          onChange={handleRadioChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={ukus === "uk"}
          onChange={handleRadioChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they got to {yItem}, they stared in horror for a few moments, then {zItem}. {displayName} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}
