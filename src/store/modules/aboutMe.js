const URL_API = "https://leandro47.com/personal-data-api/public/aboutme/1";

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
                headers: new Headers({ Authorization: `Basic ${localStorage.getItem('Token_Api')}` })
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
