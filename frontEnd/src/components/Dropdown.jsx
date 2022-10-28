import React, { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import Arrow from "../assets/Arrow.svg"
import Shirt from "../assets/Shirt.svg"

const Dropdown = ({ element }) => {
  const [open, setOpen] = useState(true)
  const { item, setItem } = UserAuth()
  const [check, setCheck] = useState(false)
  const [rotate, setRotate] = useState(false)

  const handleDropdown = () => {
    setOpen(!open)
  }
  const handleSelection = () => {
    if (item) {
      window.confirm("Du har redan valt storlek. vill du ändra storlek?")
      setItem(null)
      setCheck(false)
      setRotate(!rotate)
    } else {
      window.confirm(
        `Du har valt storlek ${element.size} bekräfta din beställning`
      )
      setItem(element)
      setCheck(true)
      setRotate(!rotate)
    }

    setOpen(!open)
  }

  return (
    <div>
      <div className={`pt-12 w-[355px] relative inline-block text-left `}>
        <div onClick={() => setRotate(!rotate)} className="shadow-lg">
          <button
            id={element?.bg}
            onClick={handleDropdown}
            type="button"
            className={` hover:bg-indigo-500   h-14 pt-4 inline-flex  w-full justify-between text-[15px] justify-center rounded-lg border-gray-300 bg-white px-4 py-2 text-sm font-[600] text-gray-700 shadow-sm hover:bg-gray-50`}
          >
            Storlek {element?.size}
            {check ? (
              <div>
                <img
                  className="ml-36 h-6 w-6"
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/31-512.png"
                  alt=""
                />
              </div>
            ) : null}
            <img
              className={`-mr-1 ml-2 h-6 w-5 transform transition-all duration-200 ${
                rotate ? "-rotate-0" : "rotate-180"
              } 
              `}
              src={Arrow}
              alt="Arrow"
            />
          </button>
        </div>

        <div
          className={
            open
              ? "hidden"
              : "transition-all  duration-500 flex absolute mt-[-6px]  right-0  z-10  w-[355px]  origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
          }
        >
          <div>
            <div
              id={element.bg}
              className=" shadow-lg mb-2 flex w-[355px] m-auto p-2 justify-between"
            >
              <p className="font-bold poppins text-[18px] ml-2">
                Paketet innehåller :<br />
                <img className="ml-10 h-24 " src={Shirt} alt="" />
              </p>

              <div className="pr-2 mb-2">
                <p>bodys: {element?.bodys}</p>
                <p>Tröjor: {element?.shirts}</p>
                <p>Byxor: {element?.pants}</p>
                <p>Sparkdräkter: {element?.kicksuits}</p>
                <p>Strumpor: {element?.socks}</p>
              </div>
            </div>
            <div onClick={handleSelection} className="">
              <button
                to="/confirmation"
                className="rounded-lg h-14 w-full text-white text-[24px] font-bold poppins  bg-sandy-brown hover:bg-sandy-brown-600"
              >
                Välj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
