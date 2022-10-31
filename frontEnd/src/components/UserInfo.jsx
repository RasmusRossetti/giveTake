import React from "react"

const UserInfo = ({ data, error, loading, infoModal, setInfoModal }) => {
  return (
    <>
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
    </>
  )
}

export default UserInfo
