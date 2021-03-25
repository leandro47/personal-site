import Vue from 'vue'
import Vuex from 'vuex'

import strings from './modules/strings'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        strings
    }
})