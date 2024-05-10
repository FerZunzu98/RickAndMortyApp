<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import Loading from '@/components/global/Loading.vue';

const route = useRoute()
const character = ref(null)

const getCharacterInfo = async() =>{
    const resCharacter 
    = await fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`)
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
        <img :src="character.image " />
        <p><span>Especie: </span>{{ character.species  }}</p>
        <p><span>Gnero: </span>{{ character.gender  }}</p>
        <p><span>Origen: </span>{{ character.origin.name  }}</p>
        <p><span>Ubicación: </span>{{ character.location.name  }}</p>
        
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