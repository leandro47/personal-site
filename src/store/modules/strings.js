
export default {
    state: {
        strings: {
            titlePage: 'Personal Site',
            fullyear: 2021
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
