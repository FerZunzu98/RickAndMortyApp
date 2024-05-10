<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

defineProps({
    characters: {
        type: Array,
        default: [],
        required: true
    }
})

function showCharacter(idCharacter) {
    router.push(`/RickAndMortyApp/personaje/${idCharacter}`)
}

</script>

<template>
    <section class="container noselect">
        <div v-for="char in characters" :key="char.id" @click="showCharacter(char.id)">
            <img :src="char.image " />
            <h2>{{char.name }}</h2>
            
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