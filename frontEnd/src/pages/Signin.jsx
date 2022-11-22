import React, { useEffect } from "react"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "../global.css"

const Signin = () => {
  const { googleSignIn, user } = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate("/Account")
    }
  }, [user])

  return (
    <>
      {user ? null : (
        <div className="bg-cover h-screen bg-[url(https://st4.depositphotos.com/27249612/37890/v/1600/depositphotos_378901194-stock-illustration-tropical-characters-seamless-pattern-with.jpg)]">
          <h1 className="pt-80 text-center text-sunglo text-[64px] font-bold py-8">
            Ge & Ta
          </h1>
          <div className=" bg-white max-w-[340px] m-auto mt-40 md:mt-8 text-center">
            <h2 className="font-bold text-[22px]">ANGE DITT PERSONNUMMER</h2>

            <input
              readOnly
              className="focus:outline-slate-400 mb-4 text-center bg-transparent font-bold text-gray-300 text-[22px]"
              value={"19xxxxxx-xxxx"}
            />
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="md:mt-10 cursor-pointer mt-14 rounded-md m- text-center bg-sandy-brown-600 max-w-[340px] m-auto py-4"
          >
            <button className="text-[24px] font-bold poppins	 text-white ">
              LOGGA IN
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Signin
