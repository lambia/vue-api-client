import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import EventList from './pages/EventList.vue';
import EventDetail from './pages/EventDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/eventi',
            name: 'events',
            component: EventList
        },
        // I dati saranno disponibili nel componente come: $route.params.id
        // {
        //     path: '/eventi/:id',
        //     name: 'event-detail',
        //     component: EventDetail
        // },
        // I dati saranno disponibili come: id
        // Necessita di una props["id"] nel componente
        {
            path: '/eventi/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true
        }
    ]
});

export { router };