import axios from 'axios'
const useAuteur = () => {

    async function getAuteurList() {
        const resultat = await axios.get('http://localhost:5012/auteur')
        return resultat.data

    }

    async function addAuteur(auteur) {
        const resultat = await axios.post('http://localhost:5012/auteur', auteur)
        return resultat

    }

    async function updateAuteur(id, updatedAuteur) {
        const resultat = await axios.put(`http://localhost:5012/auteur/${id}`, updatedAuteur)
        return resultat

    }

    async function deleteAuteur(id) {
        const resultat = await axios.delete(`http://localhost:5012/auteur/${id}`)
        return resultat

    }

    async function getAuteurById(id) {
        const resultat = await axios.get(`http://localhost:5012/auteur/${id}`)
        return resultat.data

    }


    return { getAuteurList, addAuteur, updateAuteur, deleteAuteur, getAuteurById }

}

export default useAuteur