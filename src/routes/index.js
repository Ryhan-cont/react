import React from 'react';
const appRoutes = {
    fullPAge:[
        {
            name:'login',
            Title:'Login',
            path:'/login',
            content: React.lazy(() => import('../views/pages/auth/Login')),
        }
    ],
    dashboard:[
        {
            name:'dashboard',
            Title:'Dashboard',
            path:'/dashboard',
            content: React.lazy(() => import('../views/pages/dashboard')),
        },
    ],
    site:[
        {
            name:'home',
            Title:'Home',
            path:'/',
            content: React.lazy(() => import('../views/home')),
        },
        {
            name:'about',
            Title:'About',
            path:'/about',
            content: React.lazy(() => import('../views/pages/About.js')),
        },
    ]
}

export default appRoutes
