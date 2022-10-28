import React, { useEffect, useState } from "react"
import Modal from "../components/Modal"
import WalkingBox from "../assets/WalkingBox.svg"
import { Link } from "react-router-dom"

const Confirmation = () => {
  const [register, setRegister] = useState()

  const modalPopup = () => {
    setRegister("Ditt paket har registrerats!")
  }

  return (
    <>
      <div className="">
        <div className="text-transparent">hello</div>
        <div className=" shadow-lg py-4 mt-8 rounded-xl  w-96 m-auto text-center bg-white">
          <h1
            style={{ backgroundColor: "#E5FFF3B2" }}
            className="text-[24px] w-[319px] m-auto rounded-xl font-bold p-2"
          >
            Beställning Godkänd
          </h1>
          <h2 className="text-[19px] font-bold">
            Du kan nu hämta ut ditt paket!
          </h2>
          <div className="pt-4">
            <p>
              Hämta och lämna på: <br />
              Kommunhuset
              <br />
              NackaKommunv 23
              <br />
              13140 Nacka
            </p>
          </div>
        </div>
        <div className="w-[219px] m-auto mt-14 bg-transparent">
          <img src={WalkingBox} alt="walking box" />
        </div>
        <div onClick={modalPopup} className="text-center mt-32 ">
          <div className="text-white text-[24px] font-bold poppins sm:mt-10 cursor-pointer mt-14 rounded-md m- text-center bg-sandy-brown-500 hover:bg-sandy-brown-600 max-w-[340px] m-auto py-4">
            OK
          </div>
        </div>
        {register ? <Modal /> : null}
      </div>
    </>
  )
}

export default Confirmation
