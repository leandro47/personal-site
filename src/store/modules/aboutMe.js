const URL_API = "http://localhost:8080/aboutme/1";
export default {
    state: {
        aboutMe: {
            msg1: '',
        },
    },
    getters: {
        getAboutMe(state) {
            return state.aboutMe
        }
    },
    mutations: {
        setAboutMe(state, values) {
            state.aboutMe.msg1 = values;
        }
    },
    actions: {
        setAboutMe(context) {
            fetch(URL_API, {
                method: "GET",
            })
            .then((response) => response.json())
            .then((data) => {
                context.commit("setAboutMe", data.data.ABOUTME)
                })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
