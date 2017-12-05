import VueRouter from 'vue-router'
import record from './vue/record.vue'
import exchange from './vue/exchange.vue'

var router = new VueRouter({
    routes: [
        {
            name: '支出紀錄', path: '/', component: record, props: true
        },
        {
            name: '匯率換算', path: '/exchange', component: exchange, props: true
        },
    ]
});

export default router