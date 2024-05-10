import { createWebHistory , createRouter } from "vue-router";
import Home from "./Home.vue";
import Buscador from "./Buscador.vue";
import Capitulos from "./Capitulos.vue";

import Character from "./Character.vue";
import InfoCapitulo from "./InfoCapitulo.vue";


const rutas = [
    { path: '/RickAndMortyApp/', component: Home },
    { path: '/RickAndMortyApp/buscador', component: Buscador },
    { path: '/RickAndMortyApp/capitulos', component: Capitulos },
    { path: '/RickAndMortyApp/personaje/:id', component: Character},
    { path: '/RickAndMortyApp/capitulo/:id', component: InfoCapitulo}

]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas,
})



export default router