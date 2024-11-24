import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Catalog from "./components/Catalog"
import Session from "./components/Session"

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/sessao/:id" element={<Session />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
