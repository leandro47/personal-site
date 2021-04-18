const URL_API = "http://localhost:8080/experience";

export default {
    state: {
        items: []
    },
    getters: {
        getExperience(state) {
            return state.items
        }
    },
    mutations: {
        setExperience(state, values) {
            state.items = values.reverse();
        }
    },
    actions: {
        setExperience(context) {
            fetch(URL_API, {
                method: 'GET',
            })
            .then((reponse) => reponse.json())
            .then((data) => {
                context.commit("setExperience", data.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}