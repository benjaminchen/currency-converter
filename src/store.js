import Vue from 'vue'
import Vuex from 'vuex'
import settings from './stores/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settings: settings
    }
})

export default store