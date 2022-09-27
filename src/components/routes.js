import React from 'react';

const DashBoard = React.lazy(() => import("../views/DashBoard"));


const AboutUs = React.lazy(() => import("../views/AboutUs"));
const Contact = React.lazy(() => import("../views/Contact"));


const routes = [

    {path:"/dashboard", name:"DashBoard Page", component: DashBoard},
    

    {path:"/aboutus", name:"AboutUs Page", component: AboutUs},
    {path:"/contact", name:"Contact Page", component: Contact},

]

export default routes;