const settings = {
    namespaced: true,
    state: {
        currency: ""
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
        },
        clear: (state) => {
            window.localStorage.removeItem("TravelToolSettings")
        },
        setCurrency: (state, currency) => {
            state.currency = currency
        },
        save: (state) => {
            window.localStorage.setItem("TravelToolSettings", JSON.stringify(state))
        }
    },
    actions: {
        setCurrency(context, currency) {
            context.commit("setCurrency", currency)
            context.commit("save")
        }
    }
}

export default settings