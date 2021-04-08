import React, { useState } from "react";
import "./MathPos.css";
import { Circle } from "./circle";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { getRandomIntInclusive } from "./utils";

let dist: number = 0;
let overlaps: boolean = false;

type MathPosProps = {
  clicks: boolean | undefined;
  setState: Function;
}
