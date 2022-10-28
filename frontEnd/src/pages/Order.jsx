import React, { useState } from "react"
import { Link } from "react-router-dom"
import Boxes from "../components/Boxes"

const Order = () => {
  const [checkBox, setCheckBox] = useState(false)

  const [errorStyle, setErrorStyle] = useState("bg-sandy-brown-400")

  const validateCheckBox = () => {
    if (checkBox == false) {
      alert("Läs igenom instruktionerna och konfirmera")
    }
  }

  return (
    <div>
      <div
        id="order"
        className="py-2 shadow-lg rounded-lg mt-6 bg-gray-300 w-[350px] m-auto"
      >
        <h1 className="w-56 font-poppins font-bold text-[21px] m-auto">
          Så här går du tillväga
        </h1>
        <ul className="m-auto mt-2 w-[300px] text-[14px]">
          <li>1. Lägg kläderna i samma kartong</li>
          <li>2. Ta med kläderna till Nacka kommun</li>
          <li>3. Vid inlämning av ditt paket sker utlämning.</li>
          <li>
            4. Du får en notis i appen när du har hämtat och lämnat ditt paket.
          </li>
        </ul>
        <div className=" text-[14px] gap-2 flex w-[300px] text-[14px] m-auto mt-8 pb-6">
          <input
            className=" w-[25px] h-[25px]"
            defaultChecked={checkBox}
            type="checkbox"
            onClick={() => {
              setCheckBox(!checkBox)
              if (checkBox === true) {
                setErrorStyle("bg-sandy-brown")
              } else {
                setErrorStyle("bg-sandy-brown-600")
              }
            }}
          />

          <p className="font-bold">Jag har läst och förstått instruktionerna</p>
        </div>
      </div>
      <Boxes />
      <div className=" text-center mt-24 ">
        <Link
          onClick={validateCheckBox}
          to={checkBox ? "/Confirmation" : ""}
          className={`text-white sm:mt-10 cursor-pointer mt-14 rounded-md m- text-center  px-[154px] py-4 font-bold m-aut poppins text-[24px] ${errorStyle} `}
        >
          OK
        </Link>
      </div>
    </div>
  )
}

export default Order
