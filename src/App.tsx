// import React, { Component} from "react";
import * as React from "react";
import "./App.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { render } from "@testing-library/react";
import { useState } from "react";
import { getRandomIntInclusive } from "./utils";
import { Position } from "./Position";
import { Circle } from "./circle";

let dist: number = 0;
let overlaps: boolean = false;

export const App = () => {
  var [position, setPosition] = useState<Position[]>([]);

  function inc() {
    // decrement counter and make youShallNotTouchEachOther magic
    let maxW: number = document.body.clientWidth - 120;
    let maxH: number = document.body.clientHeight - 120;
    let rndW: number = getRandomIntInclusive(0, maxW);
    let rndH: number = getRandomIntInclusive(0, maxH);

    MathCount(rndW, rndH);
  }

  function dec() {
    if (position.length === 0) return;

    position.pop();
    setPosition([...position]);
  }

  function MathCount(w, h): void {
    if (position.length == 0) {
      position.push(new Position(w, h));
      setPosition([...position]);
    } else {
      for (let len = 0; len < position.length; len++) {
        let x1 = position[len].getW();
        let y1 = position[len].getH();
        dist = Math.sqrt(Math.pow(w - x1, 2) + Math.pow(h - y1, 2));
        console.log(dist);
        if (dist < 120) {
          overlaps = true;
        }
      }
      if (!overlaps) {
        position.push(new Position(w, h));
        setPosition([...position]);
      } else {
        overlaps = false;
        inc();
      }
    }
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
          <div className="increment" onClick={inc}>
            <IoIosAdd className="buttonInner" />
          </div>

          <div className="decrement" onClick={dec}>
            <IoIosRemove className="buttonInner" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
