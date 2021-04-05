
export default {
    state: {
        strings: {
            myName: 'Leandro Silva',
            fullyear: 2021,
            HomeMsg1: 'Hi!',
            HomeMsg2: 'It\'s Nice To Meet You... ;D',
            HomeMsg3: 'Get my CV',
            AboutMsg2: 'About me',
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
