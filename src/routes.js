import VueRouter from 'vue-router'
import main from './vue/main.vue'
import exchange from './vue/exchange.vue'

var router = new VueRouter({
    routes: [
        {
            name: '旅行支出紀錄', path: '/', component: main, props: true
        },
        {
            name: '貨幣換算', path: '/exchange', component: exchange, props: true
        },
    ]
});

export default router