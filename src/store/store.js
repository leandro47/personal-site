import Vue from 'vue'
import Vuex from 'vuex'

import strings from './modules/strings'
import aboutMe from './modules/aboutMe'
import experience from './modules/experience'
import skills from './modules/tecnologies'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        strings,
        aboutMe,
        experience,
        skills
    }
})