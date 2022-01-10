import React from 'react'
import Clock from './Clock'
import c from "./HW9.module.css"

function HW9() {
    return (
        <div>
            <hr/>
            <span className={c.homeworks9}>homeworks 9</span>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
