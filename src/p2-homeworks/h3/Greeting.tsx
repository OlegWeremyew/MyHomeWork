import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: any
    totalUsers: number
    pressBoard: (e:KeyboardEvent<HTMLInputElement>)=>void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, pressBoard}
) => {
    const inputClass = s.error + " " + (name === ""? + s.active: "")

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={pressBoard} />
            <span>{error}</span>
            <button onClick={addUser} className={inputClass}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
