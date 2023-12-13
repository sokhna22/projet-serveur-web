import axios from 'axios'
const useDepartment = () => {

    async function getDepartmentList() {
        const resultat = await axios.get('http://localhost:5012/departments')
        return resultat.data

    }

    async function addDepartment(department) {
        const resultat = await axios.post('http://localhost:5012/departments', department)
        return resultat

    }

    async function updateDepartment(id, updatedDepartment) {
        const resultat = await axios.put(`http://localhost:5012/departments/${id}`, updatedDepartment)
        return resultat

    }

    async function deleteDepartment(id) {
        const resultat = await axios.delete(`http://localhost:5012/departments/${id}`)
        return resultat

    }

    async function getDepartmentById(id) {
        const resultat = await axios.get(`http://localhost:5012/departments/${id}`)
        return resultat.data

    }


    return { getDepartmentList, addDepartment, updateDepartment, deleteDepartment, getDepartmentById }

}

export default useDepartment