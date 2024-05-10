<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>Bienvenido al Sistema de Vue</h1>
    <nav>
        <RouterLink to="/RickAndMortyApp/buscador">Buscador personajes</RouterLink>
        <RouterLink to="/RickAndMortyApp/capitulos">Buscador capitulos</RouterLink>
    </nav>
</template>

<style>

a {
  border: 1px solid #437a16;
  outline: none;
  text-decoration: none;
  padding: 0.5rem;
  margin: 1rem;
  margin-bottom: 1rem;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  border-bottom: 1px solid;
  background: #bae498;
}

a:hover {
  border-bottom: 1px solid;
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
</style>