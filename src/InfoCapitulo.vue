<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Loading from '@/components/global/Loading.vue';
import ListaPersonajes from '@/components/ListaPersonajes.vue';


const route = useRoute()
const character = ref(null)

const getCharacterInfo = async() =>{
    const resCharacter 
    = await fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`)
    const data = await resCharacter.json()
    if(data.id){
        return data
    }else{
        return null
    }
}

onMounted(async ()=>{
   character.value = await getCharacterInfo()
})

</script>

<template>
    <RouterLink to="/RickAndMortyApp/">Volver al Inicio</RouterLink>
    <div v-if="character!==null">
        <h1>{{character.name }}</h1>
        <p><span>Episodio: </span>{{ character.episode  }}</p>
        <p><span>Estreno: </span>{{ character.air_date  }}</p>
        <h2>Personajes</h2>
        <ListaPersonajes :listaPersonajes="character.characters"></ListaPersonajes>
        
    </div>
    <Loading v-else/>
</template>

<style scoped>
p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
}
span{
    font-weight: bold;
}
h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
img{
    border-radius: 9999px;
}

</style>