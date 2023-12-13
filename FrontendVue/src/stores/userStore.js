import { defineStore } from "pinia"

import useUser from '../services/userServices'

const { addUser, getUserById, updateUser, login, register } = useUser()

export const useUserStore = defineStore('user', {
    state: () => ({

        authUser: {},
        token: null,
        users: []
    }),

    getters: {

        getUser(state) {
            return state.authUser
        },

        getToken(state) {
            return state.token
        },

    },

    actions: {

        async loginUser(data) {
            try {
                const result = await login(data)
                this.authUser = result.data.user;
                this.token = result.data.token
                return result

            } catch (error) {
                console.log('login error', error)
            }

        },

        async logout() {
            try {
                this.authUser = {}
                this.token = null
                sessionStorage.clear()
                // window.location.reload()
            } catch (error) {
                console.log('logout error', error)
            }

        },
        async registerAUser(data) {
            try {
                const result = await register(data)
                this.user = result.data.user;
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },

        async getAllUsers() {
            try {
                const result = await getUsers()
                this.users = result.data;
                return result

            } catch (error) {
                console.log('register error', error)
            }

        },

    },
    // persist: true,
    persist: {
        paths: ['token', 'authUser'],  //Indiquer juste les variables a stocker
        storage: sessionStorage,   //localStorage est le defaut
    },
})