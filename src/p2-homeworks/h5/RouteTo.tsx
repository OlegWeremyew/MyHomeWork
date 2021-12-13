import React from 'react'
import {Route,Navigate, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import {PreJunior} from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPluse} from "./pages/JuniorPluse";

export const PATH = {
    PRE_JUNIOR: "/pre_junior/",
    JUNIOR: "/junior/",
    JUNIOR_PLUSE: "/junior_pluse/",
}

function RouteTo() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path="/" element={<Navigate replace to="/pre_junior/" />} />
                <Route path="/" element={<Navigate replace to="/junior/" />} />
                <Route path="/" element={<Navigate replace to="/junior_pluse/" />} />
                <Route path={PATH.PRE_JUNIOR}   element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR}  element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUSE}  element={<JuniorPluse/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default RouteTo
