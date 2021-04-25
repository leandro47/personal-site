const URL_API = "https://leandro47.com/personal-data-api/public/experience";

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
                headers: new Headers({ Authorization: `Basic ${localStorage.getItem('Token_Api')}` }),
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