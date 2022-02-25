import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const changeRangeValue = (value: number) => {
        setValue1(value)
    }

    const changeRangeTwoValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <div className={style.main}>
                <span className={style.homeworks11}>homeworks 11</span>
                <div className={style.content__item1}>
                    <span>{value1} </span>
                    <SuperRange
                        value={value1}
                        onChangeRange={changeRangeValue}
                    />
                </div>

                <div className={style.content__item2}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={changeRangeTwoValue}
                    />
                    <span>{value2}</span>
                </div>
            </div>


            <hr/>
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
