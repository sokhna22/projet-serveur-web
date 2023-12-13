import axios from 'axios'
const useEmprunt = () => {

    async function getEmpruntList() {
        const resultat = await axios.get('http://localhost:5012/emprunt')
        return resultat.data

    }

    async function addEmprunt(emprunt) {
        const resultat = await axios.post('http://localhost:5012/emprunt', emprunt)
        return resultat

    }

    async function updateEmprunt(id, updatedEmprunt) {
        const resultat = await axios.put(`http://localhost:5012/emprunt/${id}`, updatedEmprunt)
        return resultat

    }

    async function deleteEmprunt(id) {
        const resultat = await axios.delete(`http://localhost:5012/emprunt/${id}`)
        return resultat

    }

    async function getEmpruntById(id) {
        const resultat = await axios.get(`http://localhost:5012/emprunt/${id}`)
        return resultat.data

    }


    return { getEmpruntList, addEmprunt, updateEmprunt, deleteEmprunt, getEmpruntById }

}

export default useEmprunt