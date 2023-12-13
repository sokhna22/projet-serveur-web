import axios from 'axios'
const useAmende = () => {

    async function getAmendeList() {
        const resultat = await axios.get('http://localhost:5012/amende')
        return resultat.data

    }

    async function addAmende(amende) {
        const resultat = await axios.post('http://localhost:5012/amende', amende)
        return resultat

    }

    async function updateAmende(id, updatedAmende) {
        const resultat = await axios.put(`http://localhost:5012/amende/${id}`, updatedAmende)
        return resultat

    }

    async function deleteAmende(id) {
        const resultat = await axios.delete(`http://localhost:5012/amende/${id}`)
        return resultat

    }

    async function getAmendeById(id) {
        const resultat = await axios.get(`http://localhost:5012/amende/${id}`)
        return resultat.data

    }


    return { getAmendeList, addAmende, updateAmende, deleteAmende, getAmendeById }

}

export default useAmende