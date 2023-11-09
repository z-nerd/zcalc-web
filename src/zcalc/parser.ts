import { grammar } from "ohm-js";
import ZCoreWrapper from "./wrapper";

const Zcalc = async (
  input: string,
  precision: number = 500,
  sys: "rad" | "deg" = "deg"
) => {
  const calcGrammar = grammar(`
  Zcalc {
    Exp
      = AddExp
  
    AddExp
      = AddExp "+" MulExp  -- plus
      | AddExp "-" MulExp  -- minus
      | MulExp
  
    MulExp
      = MulExp "×" ExpExp  -- times
      | MulExp "÷" ExpExp  -- divide
      | ExpExp
  
    ExpExp
      = PriExp "^" ExpExp  -- power
      | FactExp
      
    FactExp 
      = PriExp "!" --fact
      | PersExp
      
    PersExp 
      = PriExp "%" --pers
      | RadExp
      
    RadExp 
      = PriExp "rad" --rad
      | DegExp
      
    DegExp 
      = PriExp "°" --deg
      | SqrtExp
      
    SqrtExp 
      = "√" PriExp --sqrt
      | RsqrtExp 
   
    RsqrtExp 
      = PriExp "√" ExpExp --rsqrt
      | SinExp
      
    SinExp 
      = "sin" PriExp --sin
      | CosExp
      
    CosExp 
      = "cos" PriExp --cos
      | TanExp
    
    TanExp 
      = "tan" PriExp --tan
      | AsinExp
      
    AsinExp 
      = "asin" PriExp --asin
      | AcosExp
      
    AcosExp 
      = "acos" PriExp --acos
      | ATanExp
    
    ATanExp 
      = "atan" PriExp --atan
      | LogExp
      
    LogExp 
      = "log" PriExp --log
      | LnExp
      
    LnExp 
      = "ln" PriExp --ln
      | PriExp

    PriExp
      = "(" Exp ")"  -- paren
      | "+" PriExp   -- pos
      | "-" PriExp   -- neg
      | ident        -- ident
      | number
    
    ident  (an identifier)
      = "π"
      | "e"
      | "zero"
    
    number  (a number)
      = digit* "." digit+("E"|"e")digit+  -- fract_e
      | digit* "." digit+                 -- fract
      | digit+ ("E"|"e") digit+           -- whole_e
      | digit+                            -- whole
  }
`)

  const semantics = calcGrammar.createSemantics()

  const {
    zAdd, zSub, zMul, zDiv, zFact, zPow, zSqrt,
    zSin, zCos, zTan, zAsin, zAcos, zAtan, zPI,
    zLn, zLog, zDeg2rad, zRad2deg
  } = await ZCoreWrapper()

  semantics.addOperation('eval', {
    Exp: (exp) => exp.eval(),

    AddExp_plus: (a, _, b) => zAdd(a.eval(), b.eval(), precision),
    AddExp_minus: (a, _, b) => zSub(a.eval(), b.eval(), precision),
    MulExp_times: (a, _, b) => zMul(a.eval(), b.eval(), precision),
    MulExp_divide: (a, _, b) => zDiv(a.eval(), b.eval(), precision),

    PersExp_pers: (a, _) => zDiv(a.eval(), "100", precision),
    FactExp_fact: (a, _) => zFact(a.eval(), precision),

    ExpExp_power: (a, _, b) => zPow(a.eval(), b.eval(), precision),
    SqrtExp_sqrt: (_, a) => zSqrt(a.eval(), precision),

    RadExp_rad: (a, _) => sys == "rad" ? a.eval() : zRad2deg(a.eval(), precision),
    DegExp_deg: (a, _) => sys == "deg" ? a.eval() : zDeg2rad(a.eval(), precision),

    SinExp_sin: (_, a) => zSin(sys == "rad" ? a.eval() : zDeg2rad(a.eval(), precision), precision),
    CosExp_cos: (_, a) => zCos(sys == "rad" ? a.eval() : zDeg2rad(a.eval(), precision), precision),
    TanExp_tan: (_, a) => zTan(sys == "rad" ? a.eval() : zDeg2rad(a.eval(), precision), precision),

    AsinExp_asin: (_, a) => {
      const result = zRad2deg(zAsin(a.eval(), precision), precision)
      if (result.toLowerCase() !== "nan") return result + "°"
      return result
    },
    ATanExp_atan: (_, a) => {
      const result = zRad2deg(zAtan(a.eval(), precision), precision)
      if (result.toLowerCase() !== "nan") return result + "°"
      return result
    },
    AcosExp_acos: (_, a) => {
      const result = zRad2deg(zAcos(a.eval(), precision), precision)
      if (result.toLowerCase() !== "nan") return result + "°"
      return result
    },

    LogExp_log: (_, a) => zLog(a.eval(), precision),
    LnExp_ln: (_, a) => zLn(a.eval(), precision),

    PriExp_paren: (_1, exp, _2) => exp.eval(),
    PriExp_neg: (_1, a) => zSub("0", a.eval(), precision),
    PriExp_pos: (_1, a) => zAdd("0", a.eval(), precision),
    PriExp_ident: (id) => {
      switch (id.sourceString) {
        case "π": return zPI(precision)
        case "zero": return "0"
        default: return "NaN"
      }
    },
    number: (digits) => digits.sourceString
  })

  const match = calcGrammar.match(input)

  if (match.succeeded()) {
    return semantics(match).eval() as string
  } else {
    return "error"
  }
}


export default Zcalc