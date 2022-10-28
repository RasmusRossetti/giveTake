import React from "react"
import SvgBox from "../assets/SvgBox.svg"
import CurvedArrow from "../assets/CurvedArrow.svg"
import Recycle from "../assets/Recycle.svg"

const Boxes = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
        className="rounded-lg h-72 w-[350px]  max-w-80 m-auto"
      >
        <img
          className="relative top-6 left-60 h-24 w-24"
          src={SvgBox}
          alt="Box"
        />

        <img
          className="relative h-24 w-24 top-16 left-2"
          src={SvgBox}
          alt="Box"
        />
        <img
          className="relative bottom-36 left-12"
          src={CurvedArrow}
          alt="Curved Arrow"
        />
        <img
          className="relative bottom-20 left-[15rem] rotate-180"
          src={CurvedArrow}
          alt="Curved Arrow"
        />
        <img
          className="relative h-16 w-16 bottom-[190px] left-36"
          src={Recycle}
          alt=""
        />
      </div>
    </>
  )
}

export default Boxes
