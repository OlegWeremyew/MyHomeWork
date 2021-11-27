import React from 'react'
import {AffairType} from "./HW2";
import c from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function AlternativeAffair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClassName = c.name + " " + c[props.affair.priority]

    return (
        <div className={c.affair}>
            <div className={c.name}>{props.affair.name}</div>
            <div className={priorityClassName}>{props.affair.priority}</div>
            <button  className={c.button_del} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default AlternativeAffair
