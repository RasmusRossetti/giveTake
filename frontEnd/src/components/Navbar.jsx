import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user, logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <>
        {user ? (
          <div className="shadow-lg  bg-macaroni flex justify-between w-full p-4">
            <>
              <Link
                to="/account"
                className="text-center text-3xl font-bold text-white"
              >
                Ge & Ta
              </Link>
            </>
            {user?.displayName ? (
              <div className="flex ">
                <img
                  className="h-8 pr-4 pt-2 sm:mt-0"
                  src={user?.photoURL}
                  alt="user image"
                />
                <button
                  className="text-white hover:text-gray-400"
                  onClick={handleSignOut}
                >
                  Logga ut
                </button>
              </div>
            ) : (
              <Link to="/signin">Logga in</Link>
            )}
          </div>
        ) : null}
      </>
    </>
  )
}

export default Navbar
