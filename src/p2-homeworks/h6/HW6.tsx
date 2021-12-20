import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "./HW6.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ""))
    }

    return (
        <div>
            <span className={s.homeworks6}>homeworks 6</span>

            {/*should work (должно работать)*/}
            <div className={s.main}>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'click me...'}}
                    />
                </div>
                <SuperButton className={s.btn_h6} onClick={save}>save</SuperButton>
                <SuperButton className={s.btn_h6} onClick={restore}>restore</SuperButton>

            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
        </div>
    )
}

export default HW6
