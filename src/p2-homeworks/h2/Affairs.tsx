import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }
    return (
        <div>
            <div className={c.table}>{mappedAffairs}</div>
            <div className={c.buttons}>
                <button className={c.button} onClick={setAll}>All</button>
                <button className={c.button} onClick={setHigh}>High</button>
                <button className={c.button} onClick={setMiddle}>Middle</button>
                <button className={c.button} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
