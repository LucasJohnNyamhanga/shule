import { type } from 'os'
import React from 'react'
import Styles from '../../styles/inputtext.module.scss'

type textInput = {
    name: string,
    handletext: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?:string,
    textHolder:string
}

const InputText = ({name, handletext, value, textHolder}:textInput) => {
    return (
        <div className={Styles.container}>
            <input className={Styles.main} type="search" value={value} placeholder={textHolder} name={name} onChange={(event) => { handletext(event) }} />
        </div>
    )
}

export default InputText