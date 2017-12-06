import Vue from 'vue';
import VueI18n from 'vue-i18n'
import i18nTw from './tw'
import i18nEn from './en'

Vue.use(VueI18n)

var i18n = new VueI18n({
    locale: 'en',
    messages: {
        tw: i18nTw,
        en: i18nEn
    } 
})

export default i18n