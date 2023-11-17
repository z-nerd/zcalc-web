import { useState } from 'react'
import styles from './index.module.scss'

interface KeyboardProps {
    keysType?: "advanced" | "normal"
    onKeysTypeChange?: (type: "advanced" | "normal") => void
    onKeyPress?: (key: string) => void
}

export const Keyboard = ({
    keysType = "normal",
    onKeysTypeChange,
    onKeyPress,
}: KeyboardProps) => {
    const isAdvanced = keysType === "advanced"
    const [is2nd, setIs2nd] = useState(false)

    return (
        <div className={`${styles.keys} ${isAdvanced && styles["keys--adv"]}`}>
            <div 
            className={`${styles.key} 
            ${!isAdvanced && styles["key--hide"]}`} style={{ opacity: is2nd ? 0.5: 1 }}
                onClick={() => setIs2nd(state => !state)}>2nd</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "rad" : "°")}
            >{ is2nd ? "rad" : "°"}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "asin(" : "sin(")}
            >{is2nd ? <>sin<sup>-1</sup></> : <>sin</>}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "acos(" : "cos(")}
            >{is2nd ? <>cos<sup>-1</sup></> : <>cos</>}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "atan(" : "tan(")}
            >{is2nd ? <>tan<sup>-1</sup></> : <>tan</>}</div>

            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("^")}
            >x<sup>y</sup></div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "10^" : "log(")}
            >{is2nd ? <>10<sup>x</sup></> : "log"}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("ln(")}
            >ln</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("(")}
            >{"("}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(")")}
            >{")"}</div>

            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(is2nd ? "^2" : "√")}
            >{is2nd ? <>x<sup>2</sup></> : "√x"}</div>
            <div 
            className={`${styles.key} ${styles["key-C"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("CLEAR-SCREEN")}
            >C</div>
            <div 
            className={`${styles.key} ${styles["key-DEL"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("DEL-CHAR")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="1em" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </div>
            <div 
            className={`${styles.key} ${styles["key-PERS"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("%")}
            >%</div>
            <div 
            className={`${styles.key} ${styles["key-DIV"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("÷")}
            >÷</div>


            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("!")}
            >{"x!"}</div>
            <div 
            className={`${styles.key} ${styles["key-NUM7"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("7")}
            >7</div>
            <div 
            className={`${styles.key} ${styles["key-NUM8"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("8")}
            >8</div>
            <div 
            className={`${styles.key} ${styles["key-NUM9"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("9")}
            >9</div>
            <div 
            className={`${styles.key} ${styles["key-MUL"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("×")}
            >×</div>


            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("^(-1)")}
            >{"1/x"}</div>
            <div 
            className={`${styles.key} ${styles["key-NUM4"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("4")}
            >4</div>
            <div 
            className={`${styles.key} ${styles["key-NUM5"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("5")}
            >5</div>
            <div 
            className={`${styles.key} ${styles["key-NUM6"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("6")}
            >6</div>
            <div 
            className={`${styles.key} ${styles["key-NEG"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("-")}
            >-</div>


            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("π")}
            >{"π"}</div>
            <div 
            className={`${styles.key} ${styles["key-NUM1"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("1")}
            >1</div>
            <div 
            className={`${styles.key} ${styles["key-NUM2"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("2")}
            >2</div>
            <div 
            className={`${styles.key} ${styles["key-NUM3"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("3")}
            >3</div>
            <div 
            className={`${styles.key} ${styles["key-POS"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("+")}
            >+</div>

            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("E")}
            >{"EXP"}</div>
            <div
                className={`${styles.key} ${styles["key-CONV"]}`}
                onClick={() => {
                    if (onKeysTypeChange) onKeysTypeChange(!isAdvanced ? "advanced" : "normal")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="1em" viewBox="0 0 512 512"><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/></svg>
                </div>

            <div 
            className={`${styles.key} ${styles["key-ZERO"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("0")}
            >0</div>
            <div 
            className={`${styles.key} ${styles["key-DOT"]}`}
            onClick={(_e) => onKeyPress && onKeyPress(".")}
            >.</div>
            <div 
            className={`${styles.key} ${styles["key-EQUAL"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("EQUAL-ANS")}
            >=</div>
        </div>
    )
}