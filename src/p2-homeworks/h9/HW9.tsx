import React from 'react'
import Clock from './Clock'
import c from "./HW9.module.css"
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (
        <div>
            <hr/>
            <span className={c.homeworks9}>homeworks 9</span>
            <Clock/>
            <hr/>
            <AlternativeClock/>
            <hr/>
        </div>
    )
}

export default HW9
