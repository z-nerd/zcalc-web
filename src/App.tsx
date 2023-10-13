import { useEffect, useState } from 'react'
import './App.scss'
import { Keyboard } from "./components/Keyboard"
import Zcalc from './zcalc/parser';


function App() {
  const [keysType, setKeysType] = useState<"advanced" | "normal">("normal")
  const [stack, setStack] = useState("");
  const [ans, setAns] = useState("");

  useEffect(() => {
    (async () => {
      if(stack) {
        setAns(await Zcalc(stack))
      }
    })()
  })

  return (
    <main className={`calc ${keysType === "advanced" && "calc--keys-adv"}`}>
      <div className="calc-menu"></div>
      <div className="calc-display">{stack} {
        (ans && ans !== "error") && <>
        <br />
        <br />
        {ans}
        </>
      }</div>
      <Keyboard
        keysType={keysType}
        onKeysTypeChange={(kt) => setKeysType(kt)}
        onKeyPress={(key) => {
          switch (key) {
            case "EQUAL-ANS": break;
            case "DEL-CHAR": 
            setStack(state => state.slice(0, -1))
            break;
            case "CLEAR-SCREEN": 
            setStack("") 
            setAns("")
            break;
          
            default: 
            setStack(state => state + key)
              break;
          }
        }}
      />
    </main>
  )
}

export default App
