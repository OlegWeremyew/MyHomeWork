import React, {useState} from 'react'
import Affairs from './Affairs'
import c from "./Affairs.module.css"
import AlternativeAffairs from "./AlternativeAffairs";

export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairQualityType = 'neutral' | 'helpful' | 'bad'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type AlternativeAffairType = {
    _id: number
    food: string
    quality: AffairQualityType
}

export type FilterType = 'all' | AffairPriorityType
export type FilterAlternativeType = 'all' | AffairQualityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Homework', priority: 'low'},
    {_id: 3, name: 'SOCCER', priority: 'low'},
    {_id: 4, name: 'Hobby', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'Sleep', priority: 'low'},
    {_id: 7, name: 'Make dinner', priority: 'middle'},
]
const defaultAlternativeAffairs: Array<AlternativeAffairType> = [
    {_id: 1, food: 'Meet', quality: 'neutral'},
    {_id: 2, food: 'Milk', quality: 'helpful'},
    {_id: 3, food: 'Beef', quality: 'neutral'},
    {_id: 4, food: 'Coffee', quality: 'neutral'},
    {_id: 5, food: 'Tea', quality: 'helpful'},
    {_id: 6, food: 'candy', quality: 'bad'},
    {_id: 7, food: 'sugar', quality: 'bad'},
    {_id: 8, food: 'salt', quality: 'bad'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else if (filter === 'high') {
        return affairs.filter(p => p.priority === 'high')
    } else if (filter === 'low') {
        return affairs.filter(p => p.priority === 'low')
    } else {
        return affairs.filter(p => p.priority === 'middle')
    }
}
export const filterAlternativeAffairs = (alternativeAffairs: Array<AlternativeAffairType>, alternativeFilter: FilterAlternativeType): Array<AlternativeAffairType> => {
    if (alternativeFilter === 'all') {
        return alternativeAffairs
    } else if (alternativeFilter === 'neutral') {
        return alternativeAffairs.filter(p => p.quality === 'neutral')
    } else if (alternativeFilter === 'helpful') {
        return alternativeAffairs.filter(p => p.quality === 'helpful')
    } else {
        return alternativeAffairs.filter(p => p.quality === 'bad')
    }
}

export const deleteAffair = (affairs: Array<AffairType>, _ID: number): Array<AffairType> => {
    return affairs.filter(d => d._id !== _ID)
}
export const deleteAlternativeAffair = (alternativeAffairs: Array<AlternativeAffairType>, _ID: number): Array<AlternativeAffairType> => {
    return alternativeAffairs.filter(d => d._id !== _ID)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const [alternativeAffairs, setAlternativeAffairs] = useState<Array<AlternativeAffairType>>(defaultAlternativeAffairs)
    const [alternativeFilter, setAlternativeFilter] = useState<FilterAlternativeType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    const filteredAlternativeAffairs = filterAlternativeAffairs(alternativeAffairs, alternativeFilter)
    const deleteAlternativeAffairCallback = (_id: number) => setAlternativeAffairs(deleteAlternativeAffair(alternativeAffairs, _id))

    return (
        <div>
            <hr/>
            <span className={c.homeworks2}>homeworks 2</span>
            <div className={c.affairs}>
                <div className={c.title}>To do list</div>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            <div className={c.alternativeAffairs}>
                <div className={c.title}>Products and their benefits</div>
                <AlternativeAffairs
                    data={filteredAlternativeAffairs}
                    setAlternativeFilter={setAlternativeFilter}
                    deleteAlternativeAffairCallback={deleteAlternativeAffairCallback}
                    alternativeFilter={alternativeFilter}/>
                <hr/>
            </div>
        </div>
    )
}

export default HW2
