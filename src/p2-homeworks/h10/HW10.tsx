import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Preloader from "./assets/Preloader.gif"
import c from "./HW10.module.css"
import {Alternative} from "./bll/Alternative";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.PreloaderStatus)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <span className={c.homeworks10}>homeworks 10</span>
            {loading
                ? (
                    <div><img src={Preloader} alt="preloader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <Alternative/>
            <hr/>
        </div>
    )
}

export default HW10
