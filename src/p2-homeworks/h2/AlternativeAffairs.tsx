import React from 'react'
import {AffairType, AlternativeAffairType, FilterAlternativeType, FilterType} from './HW2'
import c from "./Affairs.module.css"
import AlternativeAffair from "./AlternativeAffair";

type AlternativeAffairsPropsType = { // need to fix any
    data: Array<AlternativeAffairType>
    setAlternativeFilter: (fileter: FilterAlternativeType) => void
    deleteAlternativeAffairCallback: (id: number) => void
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
    return (
        <div>
            <div className={c.alternativeTable}>{mappedAffairs}</div>
            <div className={c.alternativeButtons}>
                <button className={c.alternativeButton} onClick={setAll}>All</button>
                <button className={c.alternativeButton} onClick={setNeutral}>Neutral</button>
                <button className={c.alternativeButton} onClick={setHelpful}>Helpful</button>
                <button className={c.alternativeButton} onClick={setBad}>Bad</button>
            </div>
        </div>
    )
}

export default AlternativeAffairs
