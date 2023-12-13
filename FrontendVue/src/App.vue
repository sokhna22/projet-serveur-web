<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/departments">Liste des départements</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/rayon">Liste des rayons</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/auteur">Liste des auteurs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/reservation">Liste des réservations</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/livre">Liste des livres</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/amende">Liste des amendes</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/emprunt">Liste des emprunts</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/editeur">Liste des éditeurs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/login">Se connecter</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/enregistrer">S'enregistrer</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <RouterView />
    </div>
  </div>
</template>