import axi from '../api.js'

const state = () => ({

})

const mutations = {
    
}

console.log("aa  "+ axi);
const actions = {
    submit({ commit }, payload) {
        console.log("payload "+payload);
        localStorage.setItem('token', null)
        commit('SET_TOKEN', null, { root: true })
        return new Promise((resolve, reject) => {
            axi.post('/login', payload)

            .then((response) => {
                if (response.data.status == 'success') {
                    console.log("resp  "+response.data.data);
                    localStorage.setItem('token', response.data.data)
                    commit('SET_TOKEN', response.data.data, { root: true })
                } else {
                    commit('SET_ERRORS', { invalid: 'Email/Password Salah' }, { root: true })
                }
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}