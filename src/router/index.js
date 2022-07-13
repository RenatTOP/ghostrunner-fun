import { createWebHistory, createRouter } from "vue-router";
import routes from '../routes/main.routes'


const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
    
        return { x: 0, y: 0 }
    }
})

export default router;
