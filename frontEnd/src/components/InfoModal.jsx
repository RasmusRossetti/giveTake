import React from "react"

const InfoModal = ({ setInfoModal }) => {
  return (
    <div>
      <>
        <div className="bg w-5/6 m-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className=" relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className=" text-lg font-bold">
                  Stämmer inte dina uppgifter?
                  <br />
                  Hör av dig till ansvarig hos Nacka kommun.
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p>
                  <span className="font-bold">Kontaktperson:</span> Margareta
                  morgonrock
                </p>
                <p>
                  <span className="font-bold">Telefonnummer:</span> +46707682910
                </p>
                <p>
                  <span className="font-bold">Kontor:</span> Nacka Kommun
                </p>
              </div>

              {/*footer*/}
              <div className="p-6 text-center  border-t border-solid border-slate-200 rounded-b">
                <button
                  className=" text-white rounded-lg w-full h-12 bg-sandy-brown-500 hover:bg-sandy-brown-600 font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 "
                  type="button"
                  onClick={() => setInfoModal(false)}
                >
                  Stäng
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </div>
  )
}

export default InfoModal
