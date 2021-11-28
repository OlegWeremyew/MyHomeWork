import React, {Dispatch, SetStateAction} from 'react'
import {AlternativeAffairType, FilterAlternativeType} from './HW2'
import c from "./Affairs.module.css"
import AlternativeAffair from "./AlternativeAffair";

type AlternativeAffairsPropsType = {
    data: Array<AlternativeAffairType>
    setAlternativeFilter: (alternativeFilter: FilterAlternativeType) => void
    deleteAlternativeAffairCallback: (id: number) => void
    alternativeFilter: FilterAlternativeType
}

function AlternativeAffairs(props: AlternativeAffairsPropsType) {
    const mappedAffairs = props.data.map((a: AlternativeAffairType) => (
        <AlternativeAffair
            key={a._id}
            alternativeAffair={a}
            deleteAlternativeAffairCallback={props.deleteAlternativeAffairCallback}
        />
    ))

    const setAll = () => {
        props.setAlternativeFilter("all")
    }
    const setNeutral = () => {
        props.setAlternativeFilter("neutral")
    }
    const setHelpful = () => {
        props.setAlternativeFilter("helpful")
    }
    const setBad = () => {
        props.setAlternativeFilter("bad")
    }

    const activeClass = (alternativeFilter: FilterAlternativeType) => {
        return c.alternativeButton + (props.alternativeFilter === alternativeFilter ? " " + c.active : "")
    }

    return (
        <div>
            <div className={c.alternativeTable}>{mappedAffairs}</div>
            <div className={c.alternativeButtons}>
                <button className={activeClass("all")} onClick={setAll}>All</button>
                <button className={activeClass("neutral")} onClick={setNeutral}>Neutral</button>
                <button className={activeClass("helpful")} onClick={setHelpful}>Helpful</button>
                <button className={activeClass("bad")} onClick={setBad}>Bad</button>
            </div>
        </div>
    )
}

export default AlternativeAffairs
