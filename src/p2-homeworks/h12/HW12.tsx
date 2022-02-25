import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.them.theme)
    const dispatch = useDispatch()
    const onChangeOption = (color: ThemeType) => {
        dispatch(changeThemeAC(color))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s.homeworks12}>homework 12</span>
            <div className={s.main}>
            <span className={s[theme + '-text']}>
                Text color
            </span>
                <div>
                    <SuperSelect options={themes} onChangeOption={onChangeOption}/>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;