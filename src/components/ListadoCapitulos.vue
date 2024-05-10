<script setup>
import { onMounted, ref, computed, watch} from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
    page: {
        type: Number,
        default: [],
        required: true
    }
})

const listaCaps = ref([])

async function getCharacters(page){
    const resCharacter = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)

    const data = await resCharacter.json()
    if(data.results){
        listaCaps.value= data.results
    }else{
        listaCaps.value =  []
    }
}

// watch works directly on a ref
watch(() => props.page, async (newPage, oldQuestion) => {
    getCharacters(newPage)
})

onMounted(()=>{
    getCharacters(props.page)
})

function showCap(idCap) {
    router.push(`/RickAndMortyApp/capitulo/${idCap}`)
}

</script>

<template>

    <section class="container noselect">
        <div v-for="cap in listaCaps" :key="cap.id" @click="showCap(cap.id)">
            <span >{{cap.name}}</span>
            
        </div>
    </section>
</template>

<style scoped>
section{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;

}
div{
    margin: 1rem;
    cursor: pointer;
}
img{
    border-radius: 10px;
}

</style>