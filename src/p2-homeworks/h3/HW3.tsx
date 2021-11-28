import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "./Greeting.module.css"

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        let user = {_id: v1(), name: name}
        setUsers([...users, user])
    }

    return (
        <div>
            <hr/>
            <div>
                <span className={s.homeworks3}>homeworks 3</span>
            </div>
            <div>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                <hr/>
                {/*<AlternativeGreeting/>*/}
            </div>
        </div>
    )
}

export default HW3
