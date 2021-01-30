import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainLayout from "../layouts/mainLayout/mainLayout";
import HomePage from "../pages/homePage/homePage";
import PageOne from "../pages/pageOne/pageOne";
import {ROUTES} from "../../routes";

const App: React.FC  = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path={ROUTES.HOME} component={HomePage} exact />
                <Route path={ROUTES.PAGE_ONE} component={PageOne} />
            </Switch>
        </MainLayout>
    )
}

export default App