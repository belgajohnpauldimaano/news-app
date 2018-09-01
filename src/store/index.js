import Vue from 'vue';
import Vuex from 'vuex';

import article from './article';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        article,
    }
});
