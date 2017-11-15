import VueRouter from 'vue-router'
import record from './vue/record.vue'
import exchange from './vue/exchange.vue'

var router = new VueRouter({
    routes: [
        {
            name: '旅行支出紀錄', path: '/', component: record, props: true
        },
        {
            name: '貨幣換算', path: '/exchange', component: exchange, props: true
        },
    ]
});

export default router