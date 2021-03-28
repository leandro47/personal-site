
export default {
    state: {
        strings: {
            myName: 'Leandro Silva',
            fullyear: 2021
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
