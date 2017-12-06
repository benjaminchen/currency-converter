const settings = {
    namespaced: true,
    state: {
        currency: "",
        language: "",
    },
    mutations: {
        init: (state) => {
            var sets = null
            let data = window.localStorage.getItem("TravelToolSettings")
            try {
                sets = JSON.parse(data)
            } catch(e) {
                console.log(e)
            }

            state.currency = (sets && sets.currency) ? sets.currency : "NTD"
            state.language = (sets && sets.language) ? sets.language : "en"
        },
        clear: (state) => {
            window.localStorage.removeItem("TravelToolSettings")
        },
        setCurrency: (state, currency) => {
            state.currency = currency
        },
        setLanguage: (state, language) => {
            state.language = language
        },
        save: (state) => {
            window.localStorage.setItem("TravelToolSettings", JSON.stringify(state))
        }
    },
    actions: {
        setCurrency(context, currency) {
            context.commit("setCurrency", currency)
            context.commit("save")
        },
        setLanguage(context, language) {
            context.commit("setLanguage", language)
            context.commit("save")
        }
    }
}

export default settings