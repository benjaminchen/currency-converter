import _ from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import router from './routes'
import './scss/main.scss'
import toolbar from './vue/components/toolbar.vue'
import leftSideBar from './vue/components/leftSideBar.vue'
import store from './store'
import i18n from './js/i18n/index'

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
    mounted: function() {
      this.$i18n.locale = this.$store.state.settings.language
    },
    el: 'div.app',
    components: {
      toolbar,
      leftSideBar
    },
    store,
    router,
    i18n
})
