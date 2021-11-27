import React, {useState} from 'react'
import Affairs from './Affairs'
import c from "./Affairs.module.css"

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Homework', priority: 'low'},
    {_id: 3, name: 'SOCCER', priority: 'low'},
    {_id: 4, name: 'Hobby', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 5, name: 'Sleep', priority: 'low'},
    {_id: 5, name: 'Make dinner', priority: 'middle'},
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
export const deleteAffair = (affairs: Array<AffairType>, _ID: number): Array<AffairType> => {
    return affairs.filter(d => d._id !== _ID)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <span className={c.homeworks2}>homeworks 2</span>

            {/*should work (должно работать)*/}
            <div className={c.affairs}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
