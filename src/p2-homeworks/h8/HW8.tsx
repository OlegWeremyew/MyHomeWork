import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from "./HW8.module.css"
import {AlternativePeople} from "./AlternativePeople";

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={c.items}>
            <span>Звать: <span className={c.age}>{p.name} </span></span>
            <span>годиков: <span className={c.age}>{p.age}</span></span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const chek18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div className={c.main}>
            <hr/>
            <span className={c.homeworks8}>homeworks 8</span>
            {finalPeople}
            <div className={c.buttons}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={chek18}>check 18</SuperButton></div>
            </div>
            <hr/>
            <AlternativePeople/>
            <hr/>
        </div>
    )
}

export default HW8
