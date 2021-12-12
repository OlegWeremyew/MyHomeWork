import React from 'react'
import Header from './Header'
import RouteTo from './RouteTo'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

            <Header/>

            <RouteTo/>

            </HashRouter>
        </div>
    )
}

export default HW5
