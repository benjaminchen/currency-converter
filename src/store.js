import Vue from 'vue'
import Vuex from 'vuex'
import settings from './stores/settings'
import currencies from './stores/currencies'
import languages from './stores/languages'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settings: settings,
        currencies: currencies,
        languages: languages
    }
})

export default store