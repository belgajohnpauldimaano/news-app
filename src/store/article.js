import axios from 'axios'

export default {
    namespaced: true,
    state: {
        articles: [],
        sources: [],
        loadingStatus: false,
        errorMessage: ``
    },
    getters: {
        getArticles(state) {
            return state.articles
        },
        getSources(state) {
            return state.sources
        },
        getLoadingStatus(state) {
            return state.loadingStatus
        },
        geterrorMessage(state) {
            return state.errorMessage
        }
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        },
        setSources(state, sources) {
            state.sources = sources
        },
        setLoadingStatus(state, loadingStatus) {
            state.loadingStatus = loadingStatus
        },
        setErrorMessage(state, errorMessage) {
            state.errorMessage = errorMessage
        }
    },
    actions: {
        fetchArticles({ commit }) {
            axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e")
                .then((result) => {
                    const { data: { status, articles } } = result

                    if (status === 'ok') {
                        commit('setArticles', articles)
                    } else {
                        commit('setErrorMessage', `Something went wrong`)
                    }
                })
                .catch(() => {
                    commit('setErrorMessage', `Something went wrong`)
                })
        },
        fetchSources({ commit }) {
            axios.get("https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e").then((result) => {
                const { data: { status, sources } } = result
                if (status === 'ok') {
                    commit('setSources', sources)
                } else {
                    commit('setErrorMessage', `Something went wrong`)
                }
            }).catch(() => {
                commit('setErrorMessage', `Something went wrong`)
            })
        }
    }
}