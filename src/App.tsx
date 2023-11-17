import { useEffect, useState } from 'react'
import './App.scss'
import { Keyboard } from "./components/Keyboard"
import Zcalc from './zcalc/parser'

function App() {
  const [keysType, setKeysType] = useState<"advanced" | "normal">("normal")
  const [stack, setStack] = useState("zero")
  const [ans, setAns] = useState("zero")

  useEffect(() => {
    (async () => {
      if (stack) {
        const result = await Zcalc(stack)
        if (result === "0")
          setAns("zero")
        else
          setAns(await Zcalc(stack))
      }
    })()
  })

  return (
    <main className={`calc ${keysType === "advanced" && "calc--keys-adv"}`}>
      <div className="calc-menu">
        <svg viewBox="0 0 24 24" width={24} height={24}>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>
      <div className="calc-display">
        {stack}
        {
          (ans && ans !== "error") && <>
            <br />
            <br />
            {ans}
          </>
        }
      </div>
      <Keyboard
        keysType={keysType}
        onKeysTypeChange={(kt) => setKeysType(kt)}
        onKeyPress={(key) => {
          switch (key) {
            case "EQUAL-ANS":
              if (ans !== "error")
                setStack(ans)
              break
            case "DEL-CHAR":
              setStack(state => {
                if (state !== "zero") {
                  const delResult = state.slice(0, -1)
                  if (delResult === "" || delResult === "0") return "zero"
                  return delResult
                }
                return state
              })
              break
            case "CLEAR-SCREEN":
              setStack("zero")
              setAns("zero")
              break

            default:
              setStack(state => {
                if (state === "zero" && key === "0")
                  return state
                else if (state === "zero" &&
                  !["0", "×", "÷", "+", "-", "rad", "^2", "°", "^", "!", "^(-1)", "E"].includes(key))
                  return key
                else if (state === "zero")
                  return "0" + key
                else
                  return state + key
              })
              break
          }
        }}
      />
    </main>
  )
}

export default App