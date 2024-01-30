import React from 'react'
import './Box.css'
import fullbox from "../Images/full box.png";
import boxout from "../Images/box out.png";

const Box = () => {
  return (
    <div className="box">
          <img src={boxout} alt="" className="boxout " />
          <img src={fullbox} alt="" className="fullbox " />
        </div>
  )
}

export default Box
