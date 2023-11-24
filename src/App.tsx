import { useEffect, useState } from 'react'
import './App.scss'
import { Keyboard } from "./components/keyboard"
import Zcalc from './zcalc/parser'
import { Menu } from './components/menu'
import { useLocalStorage } from 'react-use'

const isSysDark = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
} 

function App() {
  const [keysType, setKeysType] = useLocalStorage<"advanced" | "normal">("keysType", "advanced")
  const [stack, setStack] = useState("zero")
  const [ans, setAns] = useState("zero")
  const [darkmode] = useLocalStorage('darkmode', isSysDark() ? "true" : "false")

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
    <main className={`calc 
    ${keysType === "advanced" && "calc--keys-adv"}
    ${darkmode === "true" && "darkmode"}
    `}>
      <div className="calc-menu">
        <Menu />
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