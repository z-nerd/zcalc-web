import createModule from './zcalc-core';


const ZCoreWrapper = async () => {
    const Module = await createModule()

    const zAdd = Module.cwrap("z_add", "string", 
    ["string", "string", "number", "number"]) as 
    (a: string, b: string, precision: number) => string

    const zSub = Module.cwrap("z_sub", "string", 
    ["string", "string", "number", "number"]) as 
    (a: string, b: string, precision: number) => string

    const zMul = Module.cwrap("z_mul", "string", 
    ["string", "string", "number", "number"]) as 
    (a: string, b: string, precision: number) => string

    const zDiv = Module.cwrap("z_div", "string", 
    ["string", "string", "number", "number"]) as 
    (a: string, b: string, precision: number) => string

    const zPow = Module.cwrap("z_pow", "string", 
    ["string", "string", "number", "number"]) as 
    (a: string, b: string, precision: number) => string

    const zFact = Module.cwrap("z_fact", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zSqrt = Module.cwrap("z_sqrt", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zLog = Module.cwrap("z_log", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zLn = Module.cwrap("z_ln", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zSin = Module.cwrap("z_sin", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zCos = Module.cwrap("z_cos", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zTan = Module.cwrap("z_tan", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zAsin = Module.cwrap("z_asin", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zAcos = Module.cwrap("z_acos", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zAtan = Module.cwrap("z_atan", "string", 
    ["string", "number", "number"]) as 
    (a: string, precision: number) => string

    const zRad2deg = Module.cwrap("z_rad2deg", "string", 
    ["string", "number", "number"]) as 
    (rad: string, precision: number) => string

    const zDeg2rad = Module.cwrap("z_deg2rad", "string", 
    ["string", "number", "number"]) as 
    (deg: string, precision: number) => string

    const zPI = Module.cwrap("z_pi", "string", 
    ["number", "number"]) as 
    (precision: number) => string


    return { 
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
    } 
}


export default ZCoreWrapper;