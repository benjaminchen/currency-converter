import Vue from 'vue'
import Vuex from 'vuex'
import settings from './stores/settings'
import currencies from './stores/currencies'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settings: settings,
        currencies: currencies
    }
})

export default store