import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>(
        [{_id: v1(), name: "oleg"}]
    )

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: "oleg"},])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
