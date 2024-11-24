import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Catalog from "./components/Catalog"
import Session from "./components/Session"
import Seats from "./components/Seats"
import Success from "./components/Success"

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/sessao/:id" element={<Session />} />
          <Route path="/assentos/:id" element={<Seats />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
