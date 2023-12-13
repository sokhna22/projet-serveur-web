import { createRouter, createWebHistory } from 'vue-router'
import DepartmentList from '../components/departments/DepartmentList.vue'
import AddDepartment from '../components/departments/AddDepartment.vue'
import UpdateDepartment from '../components/departments/UpdateDepartment.vue'
import RayonList from '../components/rayon/RayonList.vue'
import AddRayon from '../components/rayon/AddRayon.vue'
import UpdateRayon from '../components/rayon/UpdateRayon.vue'
import AuteurList from '../components/auteurs/AuteurList.vue'
import AddAuteur from '../components/auteurs/AddAuteur.vue'
import UpdateAuteur from '../components/auteurs/UpdateAuteur.vue'
import ReservationList from '../components/reservations/ReservationList.vue'
import AddReservation from '../components/reservations/AddReservation.vue'
import UpdateReservation from '../components/reservations/UpdateReservation.vue'
import LivreList from '../components/livres/LivreList.vue'
import AddLivre from '../components/livres/AddLivre.vue'
import UpdateLivre from '../components/livres/UpdateLivre.vue'
import AmendeList from '../components/amendes/AmendeList.vue'
import AddAmende from '../components/amendes/AddAmende.vue'
import UpdateAmende from '../components/amendes/UpdateAmende.vue'
import EmpruntList from '../components/empruntes/EmpruntList.vue'
import AddEmprunt from '../components/empruntes/AddEmprunt.vue'
import UpdateEmprunt from '../components/empruntes/UpdateEmprunt.vue'
import EditeurList from '../components/editeurs/EditeurList.vue'
import AddEditeur from '../components/editeurs/AddEditeur.vue'
import UpdateEditeur from '../components/editeurs/UpdateEditeur.vue'
import Login from '../components/users/Login.vue'
import Enregistrer from '../components/users/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/nouveau-departement',
      name: 'nouveau',
      component: AddDepartment
    },
    {
      path: '/departments',
      name: 'home0',
      component: DepartmentList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/enregistrer',
      name: 'enregistrer',
      component: Enregistrer
    },
    {
      path: '/rayon',
      name: 'home1',
      component: RayonList
    },
    {
      path: '/nouveau-rayon',
      name: 'rayon',
      component: AddRayon
    },
    {
      path: '/auteur',
      name: 'home2',
      component: AuteurList
    },
    {
      path: '/nouveau-auteur',
      name: 'auteur',
      component: AddAuteur
    },
    {
      path: '/reservation',
      name: 'home3',
      component: ReservationList
    },
    {
      path: '/nouvelle-reservation',
      name: 'reservation',
      component: AddReservation
    },
    {
      path: '/livre',
      name: 'home4',
      component: LivreList
    },
    {
      path: '/nouveau-livre',
      name: 'livre',
      component: AddLivre
    },
    {
      path: '/amende',
      name: 'home5',
      component: AmendeList
    },
    {
      path: '/nouvelle-amende',
      name: 'amende',
      component: AddAmende
    },
    {
      path: '/emprunt',
      name: 'home6',
      component: EmpruntList
    },
    {
      path: '/nouveau-emprunt',
      name: 'emprunt',
      component: AddEmprunt
    },
    {
      path: '/editeur',
      name: 'home7',
      component: EditeurList
    },
    {
      path: '/nouveau-editeur',
      name: 'editeur',
      component: AddEditeur
    },

    {
      path: '/mise-a-jour-departement/:id',
      name: 'mise-a-jour',
      component: UpdateDepartment
    },
    {
      path: '/mise-a-jour-rayon/:id',
      name: 'mise-a-jour-rayon',
      component: UpdateRayon
    },
    {
      path: '/mise-a-jour-auteur/:id',
      name: 'mise-a-jour-auteur',
      component: UpdateAuteur
    },
    {
      path: '/mise-a-jour-reservation/:id',
      name: 'mise-a-jour-reservation',
      component: UpdateReservation
    },
    {
      path: '/mise-a-jour-livre/:id',
      name: 'mise-a-jour-livre',
      component: UpdateLivre
    },
    {
      path: '/mise-a-jour-amende/:id',
      name: 'mise-a-jour-amende',
      component: UpdateAmende
    },
    {
      path: '/mise-a-jour-emprunt/:id',
      name: 'mise-a-jour-emprunt',
      component: UpdateEmprunt
    },
    {
      path: '/mise-a-jour-editeur/:id',
      name: 'mise-a-jour-editeur',
      component: UpdateEditeur
    },
    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
