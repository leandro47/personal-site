
export default {
    state: {
        strings: {
            myName: 'Leandro Silva',
            fullyear: 2021,
            HomeMsg1: 'Hello!',
            HomeMsg2: 'It\'s Nice To Meet You... ;D',
            HomeMsg3: 'Get my CV'
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
