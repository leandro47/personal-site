
export default {
    state: {
        strings: {
            myName: 'Leandro Silva',
            fullyear: 2021,
            HomeMsg1: 'Hi!',
            HomeMsg2: 'It\'s Nice To Meet You... ;D',
            HomeMsg3: 'Get my CV',
            AboutMsg1: 'My name is Leandro Silva. Born and raised in Mafra SC, Since I was a child in love with technology and challenges, I graduated in Systems Analysis at the age of 20 from unopar university and currently work as a software engineer at SoftExpert and I am engaged to Camila.',
            AboutMsg2: 'About me',
        },
    },
    getters: {
        getStrings(state) {
            return state.strings
        }
    }
}
