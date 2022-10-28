import React from "react"
import { Link } from "react-router-dom"

const Instructions = () => {
  return (
    <>
      <h1 className="text-center text-4xl text-cyan-600">Instructions</h1>
      <div className="text-center pt-36">
        <Link
          className=" font-medium text-cyan-600 text-3xl "
          to="/Confirmation"
        >
          Confirm
        </Link>
      </div>
    </>
  )
}

export default Instructions
