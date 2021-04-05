export default {
    state: {
        aboutMe: {
            msg1: 'My name is Leandro Silva. Born and raised in Mafra SC, Since I was a child in love with technology and challenges, I graduated in Systems Analysis at the age of 20 from unopar university and currently work as a software engineer at SoftExpert and I am engaged to Camila.',
        },
    },
    getters: {
        getAboutMe(state) {
            return state.aboutMe
        }
    }
}
