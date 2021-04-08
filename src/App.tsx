import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import { Position } from "./Position";
import { Circle } from "./circle";
import { getRandomIntInclusive, getRandomPosition, overlapsExisting } from "./MathPos";

export const App = () => {
  var [position, setPosition] = useState<Position[]>([]);

  function addCircle() {
    // decrement counter and make youShallNotTouchEachOther magic

    const newPosition = getRandomPosition();

    if (position.length == 0) {
      position.push(newPosition);
      setPosition([...position]);
    } else {
      let overlaps = overlapsExisting(newPosition, position);

      if (!overlaps) {
        position.push(newPosition);
        setPosition([...position]);
      } else {
        overlaps = false;
        addCircle();
      }
    }
  }

  function removeCircle() {
    if (position.length === 0) return;

    position.pop();
    setPosition([...position]);
  }

  return (
    <div className="App">
      <div className="global-container">
        <div className="reduced-container">
          {position.map((val) => (
            <Circle position={val} />
          ))}
        </div>
        <div className="button-container">
          <div className="increment" onClick={addCircle}>
            <IoIosAdd className="buttonInner" />
          </div>

          <div className="decrement" onClick={removeCircle}>
            <IoIosRemove className="buttonInner" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
