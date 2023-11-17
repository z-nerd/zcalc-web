import { MouseEvent, useState } from 'react'
import styles from './index.module.scss'
import { Modal } from '../modal'

export interface MenuIconProps {
    onClick?: (e: MouseEvent) => void
}

const MenuIcon = ({ onClick }: MenuIconProps) => (
    <svg
        className={styles['menu']}
        viewBox="0 0 24 24"
        width={24}
        height={24}
        onClick={(e) => {
            if (onClick) onClick(e)
        }}
    >
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
)

export interface MenuProps {

}

export const Menu = ({ }: MenuProps) => {
    const [showSub, setShowSub] = useState(false)
    const [showAboutMe, setShowAboutMe] = useState(false)

    return (
        <>
            <MenuIcon onClick={() => setShowSub(state => !state)} />
            {
                showSub && (
                    <>
                        <div className={styles['menu-sub']}>
                            <div
                                className={styles['menu-sub_item']}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowAboutMe(true)
                                }}
                            >
                                About Me
                            </div>
                            <Modal open={showAboutMe}
                                title='About Me'
                                onClose={(e) => {
                                    e.stopPropagation()
                                    setShowAboutMe(false)
                                }}>
                                    An advance high precision 
                                    calculator for scientists. <br />
                                    Created by <strong>zero.js.dev@gmail.com</strong> for eveyone
                            </Modal>
                        </div>
                    </>
                )
            }
        </>
    )
}