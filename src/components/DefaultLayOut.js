import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Slider from './Slider';
import TopBar from './TopBar';
import Footer from './Footer'
import routes from './routes'


const DefaultLayOut = () => {

    const loader = () => <div className='loader'></div>

    return(
        <>
        <TopBar />
       

        <Suspense>
            <BrowserRouter>
                <Switch>
                    {routes.map((route,idx) => {
                        return route.component ? (
                            <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                <route.component {...props} />
                            )} />
                        ) : (null);
                    })}
                    {<Redirect from='/' to="/dashboard" />}
                </Switch>
            </BrowserRouter>
        </Suspense>
        
        <Footer />
        </>
    )


}


export default DefaultLayOut;