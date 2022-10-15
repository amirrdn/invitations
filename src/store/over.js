export const over = {
    namespaced: true,
    state: { 
        isoverlay: null
    },
    mutations: {
        increment (state, mdl) {
            console.log(mdl)
            state.isoverlay = mdl
        }
    },
    actions: {
        incrementIfOdd({ commit }, user) {
            commit('increment', user);
        }
    }
}