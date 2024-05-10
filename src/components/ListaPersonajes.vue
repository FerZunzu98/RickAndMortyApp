<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
    listaPersonajes: {
        type: Array,
        default: [],
        required: true
    }
})

const listaCaps = ref([])
const listaImagenes = ref([])

async function getCharacters(lista){

    for(let url of lista){
        console.log(url)
        const resCharacter = await fetch(url)

        const data = await resCharacter.json()
        if(data.image){
            listaImagenes.value.push({id:data.id, name:data.name,image:data.image})
        }
    }
}

onMounted(()=>{
    getCharacters(props.listaPersonajes)
})


function showCharacter(idCharacter) {
    router.push(`/RickAndMortyApp/personaje/${idCharacter}`)
}

</script>

<template>

    <section class="container noselect">
        <div v-for="image in listaImagenes" :key="image.id" @click="showCharacter(image.id)">
            <img :src="image.image" />
            <h2>{{image.name }}</h2>
            
        </div>
    </section>
</template>

<style scoped>
section{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
}
div{
    margin: 1rem;
    cursor: pointer;
}
img{
    border-radius: 10px;
}

</style>