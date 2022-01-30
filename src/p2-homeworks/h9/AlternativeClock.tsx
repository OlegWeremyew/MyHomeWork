import React, {useState} from 'react'
import c from "./HW9.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export function AlternativeClock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/>
    const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div className={c.mainAlternative}>
            <span className={c.alternative}>Alternative Clock</span>
            <div
                className={c.timeArea}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span className={c.text}>Time: <span className={c.dateAndTimeAlternative}>{stringTime}</span></span>
            </div>

            {show ? (
                <div className={c.timeArea}>
                    <span className={c.text}>Date: <span className={c.dateAndTimeAlternative}>{stringDate}</span></span>
                </div>
            ) : (
                <br/>
            )}

            <div className={c.buttonsAlternative}>
                <SuperButton onClick={start}>ON</SuperButton>
                <SuperButton onClick={stop}>OFF</SuperButton>
            </div>

        </div>
    )
}

export default AlternativeClock
