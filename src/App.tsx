import { useEffect } from "react"
import ZCalc from "./zcalc-core"
import './App.scss'


function App() {

  useEffect(() => {
    (async()=>{
      const a = "1", b="10000", pre=500
      const {        
        zAdd, 
        zSub, 
        zMul, 
        zDiv, 
        zPow, 
        zFact, 
        zSqrt, 
        zLog, 
        zLn, 
        zSin,
        zCos,
        zTan,
        zAsin,
        zAcos,
        zAtan,
        zRad2deg,
        zDeg2rad,
        zPI,
      } = await ZCalc()

      console.log(`zAdd(${a}, ${b}, ${pre}) => ${zAdd(a, b, pre)}`)
      console.log(`zSub(${a}, ${b}, ${pre}) => ${zSub(a, b, pre)}`)
      console.log(`zDiv(${a}, ${b}, ${pre}) => ${zDiv(a, b, pre)}`)
      console.log(`zMul(${a}, ${b}, ${pre}) => ${zMul(a, b, pre)}`)
      console.log(`zAdd(${a}, ${b}, ${pre}) => ${zAdd(a, b, pre)}`)
      console.log(`zPow(${a}, ${b}, ${pre}) => ${zPow(a, b, pre)}`)

      console.log(`zSqrt(${a}, ${pre}) => ${zSqrt(a, pre)}`)
      console.log(`zFact(${a}, ${pre}) => ${zFact(a, pre)}`)
      console.log(`zLog(${a}, ${pre}) => ${zLog(a, pre)}`)
      console.log(`zLn(${a}, ${pre}) => ${zLn(a, pre)}`)

      console.log(`zSin(${a}, ${pre}) => ${zSin(zDeg2rad(a, pre) , pre)}`)
      console.log(`zCos(${a}, ${pre}) => ${zCos(zDeg2rad(a, pre) , pre)}`)
      console.log(`zTan(${a}, ${pre}) => ${zTan(zDeg2rad(a, pre) , pre)}`)
      
      console.log(`zAsin(${a}, ${pre}) => ${zRad2deg(zAsin(a , pre), pre)}`)
      console.log(`zAcos(${a}, ${pre}) => ${zRad2deg(zAcos(a , pre), pre)}`)
      console.log(`zAtan(${a}, ${pre}) => ${zRad2deg(zAtan(a , pre), pre)}`)
      console.log(`zPI(${pre}) => ${zPI(pre)}`)

    })()
  }, [])

  return (
    <main className="main">
    </main>
  )
}

export default App
