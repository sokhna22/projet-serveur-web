import axios from 'axios'
const useReservation = () => {

    async function getReservationList() {
        const resultat = await axios.get('http://localhost:5012/reservation')
        return resultat.data

    }

    async function addReservation(reservation) {
        const resultat = await axios.post('http://localhost:5012/reservation', reservation)
        return resultat

    }

    async function UpdateReservation(id, updatedReservation) {
        const resultat = await axios.put(`http://localhost:5012/reservation/${id}`, updatedReservation)
        return resultat

    }

    async function deleteReservation(id) {
        const resultat = await axios.delete(`http://localhost:5012/reservation/${id}`)
        return resultat

    }

    async function getReservationById(id) {
        const resultat = await axios.get(`http://localhost:5012/reservation/${id}`)
        return resultat.data

    }


    return { getReservationList, addReservation, UpdateReservation, deleteReservation, getReservationById }

}

export default useReservation