export default {
    state: {
        strings: {
            titlePage: 'Personal Site'
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
