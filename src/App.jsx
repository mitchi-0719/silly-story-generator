import { useRef, useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");
  const [story, setStory] = useState("");
  const name = useRef("");

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

  function handleClick(e) {
    e.preventDefault();
    setData();
    generateStory();
  }

  function handleRadioChange(e) {
    setUkus(e.target.value);
  }

  function setData() {
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
    setShowStory(true);
  }

  function generateStory() {
    const newStory = `It was ${ukus === "us" ? "94 fahrenheit" : "34 centigrade"} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name.current.value === "" ? "Bob" : name.current.value} saw the whole thing, but was not surprised — ${xItem} weighs ${ukus === "us" ? "300 pounds" : "21 stone"}, and it was a hot day.`
    setStory(newStory);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" ref={name} />
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
          {story}
        </p>
      )}
    </>
  );
}