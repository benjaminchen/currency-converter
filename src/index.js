import _ from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import router from './routes'
import './scss/main.scss'
import toolbar from './vue/components/toolbar.vue'
import leftSideBar from './vue/components/leftSideBar.vue'
import store from './store'

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
})

const App = new Vue({
    beforeMount: function() {
      this.$store.commit("settings/init")
    },
    el: 'div.app',
    components: {
      toolbar,
      leftSideBar
    },
    store,
    router,
})
