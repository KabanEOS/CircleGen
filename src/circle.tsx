import React from "react";
import "./Circle.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

let i:number = 0;

function iterate() {
    if(i != 4){
        i = i + 1;
    }else{
        i = 0;
    }
}

function getNextColor() {
    const colors = ['#af2bbf', '#a14ebf', '#6c91bf', '#5bc8af'];    

    return(colors[i])
  };

export const Circle = (props) => {
  {iterate()}
  return (
    <div
      className="Circle"
      style={{
        backgroundColor: `${getNextColor()}`,
        left: `${props.position.getW()}px`,
        top: `${props.position.getH()}px`,

      }}
    >
      lorem ipsum
    </div>
  );
};
