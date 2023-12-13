import axios from 'axios'
const useRayon = () => {

    async function getRayonList() {
        const resultat = await axios.get('http://localhost:5012/rayon')
        return resultat.data

    }

    async function addRayon(rayon) {
        const resultat = await axios.post('http://localhost:5012/rayon', rayon)
        return resultat

    }

    async function updateRayon(id, updatedRayon) {
        const resultat = await axios.put(`http://localhost:5012/rayon/${id}`, updatedRayon)
        return resultat

    }

    async function deleteRayon(id) {
        const resultat = await axios.delete(`http://localhost:5012/rayon/${id}`)
        return resultat

    }

    async function getRayonById(id) {
        const resultat = await axios.get(`http://localhost:5012/rayon/${id}`)
        return resultat.data

    }


    return { getRayonList, addRayon, updateRayon, deleteRayon, getRayonById }

}

export default useRayon