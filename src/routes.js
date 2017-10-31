import VueRouter from 'vue-router'
import main from './vue/main.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/', component: main
        }
    ]
});

export default router