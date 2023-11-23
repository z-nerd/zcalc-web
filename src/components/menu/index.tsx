import { MouseEvent, useState } from 'react'
import styles from './index.module.scss'
import { Modal } from '../modal'
import { useLocalStorage } from 'react-use'

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
    const [showAbout, setShowAbout] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const [darkmode, setDarkmode] = useLocalStorage('darkmode')

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
                                    setShowSetting(true)
                                }}
                            >
                                Setting
                            </div>
                            <div
                                className={styles['menu-sub_item']}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowAbout(true)
                                }}
                            >
                                About
                            </div>
                            <Modal open={showSetting}
                                title='Setting'
                                onClose={(e) => {
                                    e.stopPropagation()
                                    setShowSetting(false)
                                }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <p 
                                    style={{
                                        marginInline: '1rem',
                                    }}>Dark mode</p>
                                    <input 
                                    style={{
                                        outline: 'none',
                                        transform: 'scale(2)',
                                        accentColor: '#34495e',
                                        marginInline: '1rem',
                                    }}
                                    onChange={(e) => {
                                        if(e.target.checked)
                                            setDarkmode('true')
                                        else
                                            setDarkmode('false')
                                        location.reload()
                                    }}
                                    checked={darkmode === "true"}
                                    type="checkbox" 
                                    name="darkMode" />
                                </div>
                            </Modal>
                            <Modal open={showAbout}
                                title='About'
                                onClose={(e) => {
                                    e.stopPropagation()
                                    setShowAbout(false)
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