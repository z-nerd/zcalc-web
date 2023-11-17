import { MouseEvent, ReactNode, useEffect, useRef } from 'react'
import styles from './index.module.scss'

export interface ModalProps {
    open?: boolean
    children?: ReactNode
    title?: string
    onClose?: (e: MouseEvent) => void
}

export const Modal = ({ children, open = false, title = "", onClose }: ModalProps) => {
    const ref = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (ref.current) {
            if (open) ref.current.showModal()
            else ref.current.close()
        }
    }, [open])

    return (
        <dialog ref={ref} className={styles['modal']}>
            <header className={styles['modal-header']}>
                <div 
                className={styles['modal-header_close']}
                onClick={(e) => { if (onClose) onClose(e)}}>X</div>
                <div className={styles['modal-header_title']}>{title}</div>
            </header>
            <div className={styles['modal-body']}>
                {children}
            </div>
        </dialog>
    )
}