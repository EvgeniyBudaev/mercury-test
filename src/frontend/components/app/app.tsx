import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainLayout from "../layouts/mainLayout/mainLayout";
import HomePage from "../pages/homePage/homePage";
import PageOne from "../pages/pageOne/pageOne";
import {ROUTES} from "../../routes";
import PageTwo from "../pages/pageTwo/pageTwo";
import PageThree from "../pages/pageThree/pageThree";
import PageFour from "../pages/pageFour/pageFour";

const App: React.FC  = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path={ROUTES.HOME} component={HomePage} exact />
                <Route path={ROUTES.PAGE_ONE} component={PageOne} />
                <Route path={ROUTES.PAGE_TWO} component={PageTwo} />
                <Route path={ROUTES.PAGE_THREE} component={PageThree} />
                <Route path={ROUTES.PAGE_FOUR} component={PageFour} />
            </Switch>
        </MainLayout>
    )
}

export default App

