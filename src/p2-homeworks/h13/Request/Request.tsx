import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "./Request.module.css"
import {RequestAPI} from "./RequestsAPI";

export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onClickRequest = () => {
        RequestAPI.getSuccess(checked)
            .then(data => {
                if (data.status === 200) {
                    setMessage(data.data.errorText)
                }
                if (data.status === 500) {
                    setMessage(data.data.errorText)
                }
            })
    }

    return (
        <div className={s.main}>
            <SuperButton onClick={onClickRequest}>Трунь</SuperButton>
            <SuperCheckbox type='checkbox' checked={checked} onChange={onChangeValue}/>
            <div className={s.text}>
                <span className={s.answer}>Текст ответа: </span>
                {message}
            </div>
        </div>
    );
};
