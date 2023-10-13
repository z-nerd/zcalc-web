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

    return (
        <div className={`${styles.keys} ${isAdvanced && styles["keys--adv"]}`}>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}>2nd</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("°")}
            >{"°"}</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("sin(")}
            >sin</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("cos(")}
            >cos</div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("tan(")}
            >tan</div>

            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("^")}
            >x<sup>y</sup></div>
            <div 
            className={`${styles.key} ${!isAdvanced && styles["key--hide"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("log(")}
            >log</div>
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
            onClick={(_e) => onKeyPress && onKeyPress("√")}
            >{"√x"}</div>
            <div 
            className={`${styles.key} ${styles["key-C"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("CLEAR-SCREEN")}
            >C</div>
            <div 
            className={`${styles.key} ${styles["key-DEL"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("DEL-CHAR")}
            >Del</div>
            <div 
            className={`${styles.key} ${styles["key-PERS"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("%")}
            >%</div>
            <div 
            className={`${styles.key} ${styles["key-DIV"]}`}
            onClick={(_e) => onKeyPress && onKeyPress("/")}
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
            onClick={(_e) => onKeyPress && onKeyPress("*")}
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
                }}>convert</div>

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