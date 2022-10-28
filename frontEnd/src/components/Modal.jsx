import React from "react"
import { UserAuth } from "../context/AuthContext"
import Shirt from "../assets/Shirt.svg"
import NackaKommun from "../assets/NackaKommun.svg"

export default function Modal() {
  const [showModal, setShowModal] = React.useState(true)
  const { logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="bg w-5/6 m-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="text-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className=" text-3xl font-bold">
                    Dina paket har registrerats
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Tack för att du är med och <br />
                    bidrar till en bättre miljö.
                  </p>
                  <img className="w-32 m-auto" src={Shirt} alt="" />
                </div>
                <img className="w-42 m-auto" src={NackaKommun} alt="" />
                {/*footer*/}
                <div className="p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" text-white rounded-lg w-72 h-12 bg-sandy-brown-500 hover:bg-sandy-brown-600 font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 "
                    type="button"
                    onClick={handleSignOut}
                  >
                    Logga ut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
