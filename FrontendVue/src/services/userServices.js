import axios from 'axios'
const useUser = () => {
    async function login(user) {
        const resultat = await axios.post('http://localhost:5012/users/login',user)
        return resultat.data

    }

    async function getUserList() {
        const resultat = await axios.get('http://localhost:5012/users')
        return resultat.data

    }

    async function addUser(user) {
        const resultat = await axios.post('http://localhost:5012/users', user)
        return resultat

    }

    async function updateUser(id, updatedUser) {
        const resultat = await axios.put(`http://localhost:5012/users/${id}`, updatedUser)
        return resultat

    }

    async function deleteUser(id) {
        const resultat = await axios.delete(`http://localhost:5012/users/${id}`)
        return resultat

    }

    async function getUserById(id) {
        const resultat = await axios.get(`http://localhost:5012/users/${id}`)
        return resultat.data

    }


    return { getUserById, addUser, updateUser, deleteUser,login }

}

export default useUser