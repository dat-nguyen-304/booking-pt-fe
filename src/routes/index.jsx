
import AdminLayout from 'layouts/admin.jsx';
import PtLayout from 'layouts/pt.jsx';
import Login from 'layouts/Login/Login.jsx';
import UserLayout from 'layouts/user.jsx';
import logout from '../layouts/Login/logout';
var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [

    { path: BASEDIR+"/login", allowedRoles: ['admin', 'pt', 'user'], name: "Login", component: Login},
    { path: BASEDIR+"/logout", allowedRoles: ['admin', 'pt', 'user'], name: "Logout", component: logout},
    { path: BASEDIR+"/admin", name: "Admin", component: AdminLayout, allowedRoles: ['admin'] },
    { path: BASEDIR+"/user", name: "User", component:UserLayout, allowedRoles: ['user']},
    { path: BASEDIR+"/pt", name: "Pt ", component: PtLayout, allowedRoles: ['pt']},


    { path: BASEDIR+"/", allowedRoles: ['admin', 'pt', 'user'], name: "Home", component: Login },
    { path: "/", allowedRoles: ['admin', 'pt', 'user'], name: "Home", component: Login },
];

export default indexRoutes;
