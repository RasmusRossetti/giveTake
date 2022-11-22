import React from "react"
import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import useFetch from "../hooks/useFetch"
import { UserAuth } from "../context/AuthContext"

const Package = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/posts")
  const { item } = UserAuth()
  console.log(item)

  return (
    <div className=" text-center">
      <div className="mt-4 bg-white w-[300px] h-32 rounded-lg m-auto p-4 shadow-lg">
        <h1 className="text-4xl font-bold">Våra paket</h1>

        <div>
          <p className="text-[16px]">
            Välj mellan 3 olika storlekar nedan. <br />
            Alla paket kommer i blandade färger.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="text-[16px] shadow-lg rounded-lg bg-slate-100 w-24 m-auto font-bold">
          Välj storlek
        </h1>
      </div>
      {loading ? (
        <h1 className="animate-spin">Loading...</h1>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        data?.map((element) => {
          return (
            <div key={element.size}>
              <Dropdown key={element.id} element={element} />
            </div>
          )
        })
      )}

      <div className="text-center mt-32 ">
        <div
          className={`${
            item ? "bg-sandy-brown-600" : "bg-sandy-brown"
          } sm:mt-10 cursor-pointer mt-14 rounded-md m- text-center bg-sandy-brown max-w-[340px] m-auto py-4`}
        >
          <Link
            onClick={() => {
              if (!item) {
                alert("Välj en av paketen för att gå vidare")
              }
            }}
            className="text-white text-[24px] font-bold poppins"
            to={item ? "/order" : ""}
          >
            GÅ VIDARE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Package
