import { useState } from 'react'
import styles from './index.module.scss'

interface KeyboardProps {
    defaultType?: 'advanced' | 'normal'
    onTypeChange?: (type: 'advanced' | 'normal') => void
}

export const Keyboard = ({ defaultType = 'normal', onTypeChange }: KeyboardProps) => {
    const [isAdvanced, setIsAdvanced] = useState(defaultType === 'advanced')

    return (
        <div className={`${styles.keys} ${isAdvanced && styles['keys--adv']
            }`}>

            {
                isAdvanced && <>
                    <div className={styles.key}>2nd</div>
                    <div className={styles.key}>deg</div>
                    <div className={styles.key}>sin</div>
                    <div className={styles.key}>cos</div>
                    <div className={styles.key}>tan</div>

                    <div className={styles.key}>x^y</div>
                    <div className={styles.key}>lg</div>
                    <div className={styles.key}>ln</div>
                    <div className={styles.key}>{'('}</div>
                    <div className={styles.key}>{')'}</div>
                </>
            }

            {
                isAdvanced &&
                <div className={styles.key}>{'rad(x)'}</div>
            }
            <div className={styles.key}>C</div>
            <div className={styles.key}>Del</div>
            <div className={styles.key}>%</div>
            <div className={styles.key}>/</div>

            {
                isAdvanced &&
                <div className={styles.key}>{'x!'}</div>
            }
            <div className={styles.key}>7</div>
            <div className={styles.key}>8</div>
            <div className={styles.key}>9</div>
            <div className={styles.key}>x</div>

            {
                isAdvanced &&
                <div className={styles.key}>{'1/x'}</div>
            }
            <div className={styles.key}>4</div>
            <div className={styles.key}>5</div>
            <div className={styles.key}>6</div>
            <div className={styles.key}>-</div>

            {
                isAdvanced &&
                <div className={styles.key}>{'pi'}</div>
            }
            <div className={styles.key}>1</div>
            <div className={styles.key}>2</div>
            <div className={styles.key}>3</div>
            <div className={styles.key}>+</div>

            <div className={styles.key}
                onClick={() => {
                    setIsAdvanced(state => !state)
                    if (onTypeChange) onTypeChange(!isAdvanced ? 'advanced' : 'normal')

                }}>convert</div>
            {
                isAdvanced &&
                <div className={styles.key}>{'e'}</div>
            }
            <div className={styles.key}>0</div>
            <div className={styles.key}>.</div>
            <div className={styles.key}>=</div>
        </div>
    )
}