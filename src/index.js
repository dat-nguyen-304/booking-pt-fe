import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import "./variables/Firebase.js";
import 'bootstrap/dist/css/bootstrap.css';
/*import 'font-awesome/css/font-awesome.min.css';*/
import 'assets/scss/zest-admin.css';
import 'assets/fonts/simple-line-icons.css';

import Login from './layouts/Login/Login.jsx';
import Admin from './layouts/admin.jsx';
import Dashboard from 'views/admin/Dashboard/University.jsx';
import indexRoutes from 'routes/index.jsx';
// import { Header, Footer, Sidebar, ChatSidebar, Stylebar } from 'components'
const hist = createBrowserHistory();

ReactDOM.render(
    // <div>
    // <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
    //     <Switch>
    //         <Route path="/login" exact component={Login}/>
    //         <Route path="/admin" exact component={Admin}/>
    //         <Route path="/admin/dashboard" exact component={Dashboard}/>
    //     </Switch>
    // </Router></div>
    
    <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    console.log(prop.path + prop.key);
                    return ( 
                        <Route
                            path={prop.path}
                            key={key}
                            component={prop.component}
                        />
                    );
                })
            }
        </Switch>
    </Router>
, document.getElementById('root'));
