import React from 'react'
import {Route,Navigate, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";

export const PATH = {
    HW1: "/hw1",
    HW2: "/hw2",
    HW3: "/hw3",
    HW4: "/hw4",
}

function RouteTo() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path="/" element={<Navigate replace to="/PRE_JUNIOR" />} />
                <Route path="/" element={<Navigate replace to="/PRE_JUNIOR" />} />
                <Route path="/" element={<Navigate replace to="/PRE_JUNIOR" />} />
                <Route path="/PRE_JUNIOR"  element={<PreJunior/>}/>
                <Route path="/hw1"  element={<HW1/>}/>
                <Route path="/hw2"  element={<HW2/>}/>
                <Route path="/hw3"  element={<HW3/>}/>
                <Route path="/hw4"  element={<HW4/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default RouteTo
