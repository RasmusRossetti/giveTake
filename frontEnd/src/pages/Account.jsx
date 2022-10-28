import React, { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import InfoModal from "../components/InfoModal"

const Account = () => {
  const { data, loading, error } = useFetch("./userInfo.json")
  const { user } = UserAuth()
  const [infoModal, setInfoModal] = useState(false)

  return (
    <div className="">
      <div className="text-center   text-4xl font-bold p-4">
        <p className="flex items-center justify-center  max-w-[600px] m-auto text-black backdrop-blur-md h-28  shadow-md rounded-lg ">
          Välkommen, {user?.displayName}!
        </p>
      </div>

      <div className="shadow-lg sm:w-72 text-center mt-12 bg-white w-4/5 m-auto rounded-md h-56">
        <>
          <p className="pt-6">
            Du har{" "}
            <span className="font-bold">
              {loading ? (
                <p>...</p>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                data?.children
              )}
            </span>{" "}
            barn registrerat <br /> som är{" "}
            <span className="font-bold">
              {" "}
              {loading ? (
                <p>...</p>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                data?.age
              )}{" "}
            </span>
            år gammalt
          </p>
        </>
        <p className="pt-8">
          Din registrerade adress är:
          <br />
          Adressvägen 45
          <br />
          13120 nacka
        </p>
        <p
          className="text-sandy-brown underline cursor-pointer "
          onClick={() => setInfoModal(!infoModal)}
        >
          Stämmer inte dina uppgifter?
        </p>
      </div>
      <div className="sm:mt-24 cursor-pointer  mt-64 rounded-md m- text-center bg-sandy-brown-600 max-w-[340px] m-auto py-4">
        <Link to="/Package" className="text-center pt-80 cursor-pointer">
          <p className="text-white text-[24px] font-bold poppins">GÅ VIDARE</p>
        </Link>
      </div>
      {infoModal ? <InfoModal setInfoModal={setInfoModal} /> : null}
    </div>
  )
}

export default Account
