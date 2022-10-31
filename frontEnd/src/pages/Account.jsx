import React, { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import InfoModal from "../components/InfoModal"
import UserInfo from "../components/UserInfo"

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
      <UserInfo
        data={data}
        loading={loading}
        error={error}
        setInfoModal={setInfoModal}
        infoModal={infoModal}
      />

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
