import React from 'react'
import { AlternativeAffairType} from "./HW2";
import c from "./Affairs.module.css"

type AffairPropsType = {
    alternativeAffair: AlternativeAffairType
    deleteAlternativeAffairCallback: (id: number) => void
}

function AlternativeAffair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAlternativeAffairCallback(props.alternativeAffair._id)
    }

    const qualityClassName = c.food + " " + c[props.alternativeAffair.quality]

    return (
        <div className={c.alternativeAffair}>
            <div className={c.food}>{props.alternativeAffair.food}</div>
            <div className={qualityClassName}>{props.alternativeAffair.quality}</div>
            <button  className={c.alternativeButton_del} onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default AlternativeAffair
