import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Roulette from "./components/Roulette"
import Spinner from "./components/Spinner"
import Success from "./components/Success"

function App() {

  const [winningOffer, setWinningOffer] = useState<string[]>([]);

  return (
    <div className="App bg-primary min-h-screen grid place-items-center home">
      <Router>
        <div className="md:flex lg:justify-center lg:gap-32 md:items-center">
          <Roulette />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/spin-to-win" element={<Spinner setWinningOffer={setWinningOffer} />} />
            <Route path="/success" element={<Success winningOffer={winningOffer} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
