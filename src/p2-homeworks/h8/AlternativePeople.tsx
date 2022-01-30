import React, {useState} from 'react';
import c from "./HW8.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AlternativeReducer} from "./bll/AlternativeReducer";

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Олег', age: 23},
    {_id: 1, name: 'Василий', age: 36},
    {_id: 2, name: 'Виктор', age: 26},
    {_id: 3, name: 'Эдуард', age: 14},
    {_id: 4, name: 'Сергей', age: 60},
    {_id: 5, name: 'Алексей', age: 15},
]

export const AlternativePeople = () => {

    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const alternativeFinalPeople = people.map((p: UserType) => (
        <div key={p._id} className={c.itemsAlternative}>
            <span>Name: <span className={c.ageAlternative}>{p.name} </span></span>
            <span>Age: <span className={c.age}>{p.age}</span></span>
        </div>
    ))

    const old = () => setPeople(AlternativeReducer(initialPeople, {type: 'age', payload: 'up'}))
    const young = () => setPeople(AlternativeReducer(initialPeople, {type: 'age', payload: 'down'}))
    const canDrink = () => setPeople(AlternativeReducer(initialPeople, {type: 'drink', payload: 21}))

    return (
        <div className={c.alternativeMain}>
            <span className={c.alternative}>Alternative People</span>
            {alternativeFinalPeople}
            <div className={c.buttonsAlternative}>
                <div><SuperButton onClick={old}>old</SuperButton></div>
                <div><SuperButton onClick={young}>young</SuperButton></div>
                <div><SuperButton onClick={canDrink}>can drink</SuperButton></div>
            </div>
        </div>
    );
};
