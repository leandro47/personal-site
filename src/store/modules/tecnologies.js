const URL_API = "https://leandro47.com/personal-data-api/public/skill";

export default {
    state: {
        tecnologies: []
    },
    getters: {
        getTecnologies(state) {
            return state.tecnologies
        }
    },
    mutations :{
        setSkills(state, values) {
            state.tecnologies = values
        }
    },
    actions: {
        setSkills(context) {
            fetch(URL_API, {
                method: 'GET',
                headers: new Headers({ Authorization: `Basic ${localStorage.getItem('Token_Api')}` })
            })
            .then((response) => response.json())
            .then((data) => context.commit("setSkills", data.data))
            .catch((error) => {
                console.log(error);
                console.log(`Basic ${localStorage.getItem('Token_Api')}`);
            })
        }
    }
}