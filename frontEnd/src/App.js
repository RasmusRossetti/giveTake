import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Protected from "./components/Protected"
import { AuthContextProvider } from "./context/AuthContext"
import Account from "./pages/Account"
import Confirmation from "./pages/Confirmation"
import Instructions from "./pages/Instructions"
import Order from "./pages/Order"
import Package from "./pages/Package"
import Signin from "./pages/Signin"

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Signin />
        <Routes>
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path="Package"
            element={
              <Protected>
                <Package />
              </Protected>
            }
          />
          <Route
            path="Instructions"
            element={
              <Protected>
                <Instructions />
              </Protected>
            }
          />
          <Route
            path="Confirmation"
            element={
              <Protected>
                <Confirmation />
              </Protected>
            }
          />
          <Route
            path="Order"
            element={
              <Protected>
                <Order />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
