import React from 'react'
import {AffairType} from "./HW2";
import c from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={c.affair}>
            <div className={c.name}>{props.affair.name}</div>
            <div className={c.priority}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
