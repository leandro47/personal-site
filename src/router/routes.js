import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Home from '../pages/HomePage'
import About from '../pages/AboutPage'
import Experience from '../pages/ExperiencePage'
import Tecnologies from '../pages/SkillPage'
import Contact from '../pages/ContactPage'
import NotFound from '../pages/404page'


Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/experience',
            component: Experience
        },
        {
            path: '/skill',
            alias: '/tecnologies',
            component: Tecnologies
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})