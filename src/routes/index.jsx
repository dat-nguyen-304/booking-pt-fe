
import AdminLayout from 'layouts/admin.jsx';
import PtLayout from 'layouts/pt.jsx';
import Login from 'layouts/Login/Login.jsx';


var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [

    { path: BASEDIR+"/login", allowedRoles: ['admin', 'pt'], name: "Login", component: Login},

    { path: BASEDIR+"/admin", name: "Admin Dashboard", component: AdminLayout, allowedRoles: ['admin'] },
    
    { path: BASEDIR+"/pt", name: "Pt Dashboard", component: PtLayout, allowedRoles: ['pt']},


    { path: BASEDIR+"/", allowedRoles: ['admin', 'pt'], name: "Home", component: Login },
    { path: "/", allowedRoles: ['admin', 'pt'], name: "Home", component: Login },
];

export default indexRoutes;
