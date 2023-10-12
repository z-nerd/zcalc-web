import { useEffect } from "react"
import './App.scss'
import { Keyboard } from "./components/Keyboard"
import Zcalc from "./zcalc/parser"


function App() {

  useEffect(() => {
    (async() => {
      const result = await Zcalc('tan(90)')
      console.log(result)
    })()
  }, [])

  return (
    <main className="calc">
      <div className="calc-menu"></div>
      <div className="calc-display"></div>
      <Keyboard />
    </main>
  )
}

export default App
