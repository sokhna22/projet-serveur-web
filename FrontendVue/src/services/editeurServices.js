import axios from 'axios'
const useEditeur = () => {

    async function getEditeurList() {
        const resultat = await axios.get('http://localhost:5012/editeur')
        return resultat.data

    }

    async function addEditeur(editeur) {
        const resultat = await axios.post('http://localhost:5012/editeur', editeur)
        return resultat

    }

    async function updateEditeur(id, updatedEditeur) {
        const resultat = await axios.put(`http://localhost:5012/editeur/${id}`, updatedEditeur)
        return resultat

    }

    async function deleteEditeur(id) {
        const resultat = await axios.delete(`http://localhost:5012/editeur/${id}`)
        return resultat

    }

    async function getEditeurById(id) {
        const resultat = await axios.get(`http://localhost:5012/editeur/${id}`)
        return resultat.data

    }


    return { getEditeurList, addEditeur, updateEditeur, deleteEditeur, getEditeurById }

}

export default useEditeur