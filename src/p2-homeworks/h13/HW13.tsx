import React from 'react';
import {Request} from "./Request/Request";
import s from "./HW13.module.css";

export const HW13 = () => {
    return (
        <div className={s.block}>
            <hr/>
            <span className={s.homeworks13}>homework 13</span>
            <Request/>
            <hr/>
        </div>
    );
};
