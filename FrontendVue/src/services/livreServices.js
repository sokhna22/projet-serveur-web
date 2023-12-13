import axios from 'axios'
const useLivre = () => {

    async function getLivreList() {
        const resultat = await axios.get('http://localhost:5012/livre')
        return resultat.data

    }

    async function addLivre(livre) {
        const resultat = await axios.post('http://localhost:5012/livre', livre)
        return resultat

    }

    async function updateLivre(id, updatedLivre) {
        const resultat = await axios.put(`http://localhost:5012/livre/${id}`, updatedLivre)
        return resultat

    }

    async function deleteLivre(id) {
        const resultat = await axios.delete(`http://localhost:5012/livre/${id}`)
        return resultat

    }

    async function getLivreById(id) {
        const resultat = await axios.get(`http://localhost:5012/livre/${id}`)
        return resultat.data

    }


    return { getLivreList, addLivre, updateLivre, deleteLivre, getLivreById }

}

export default useLivre