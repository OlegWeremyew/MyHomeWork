import React from 'react';
import c from "../HW10.module.css";
import AlternativePreloader from "../assets/AlternativePreloader.gif";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store";
import {activesPreloaderAC} from "./loadingReducer";

export const Alternative = () => {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.SecondPreloaderStatus)
    const dispatch = useDispatch()

    const activesPreloader = () => {
        dispatch(activesPreloaderAC(true))
        setTimeout(() => {
            dispatch(activesPreloaderAC(false))
        }, 3000)
    };

    return (
        <div className={c.main}>
            <span className={c.alternative}>Alternative Preloader</span>
            {loading
                ? (
                    <div className={c.Preloaders}>
                        <div><img src={AlternativePreloader} alt="preloader"/></div>
                        <div><img src={AlternativePreloader} alt="preloader"/></div>
                        <div><img src={AlternativePreloader} alt="preloader"/></div>
                    </div>
                ) : (
                    <div className={c.alternativeButtons}>
                        <SuperButton onClick={activesPreloader}>please wait... </SuperButton>
                    </div>
                )
            }
        </div>
    );
};
