<script setup>
import { computed, ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'

import FormConsulta from './components/FormConsulta.vue';
import ListadoCapitulos from './components/ListadoCapitulos.vue';



const pagina = ref(1)


</script>

<template>
    <RouterLink to="/RickAndMortyApp/">Volver</RouterLink>
    <h2>Capitulos</h2>
    <div class="wrapper">
        <div class="option">
            <input checked="" value="option1" name="btn" type="radio" class="input" @click="pagina = 1">
            <div class="btn">
            <span class="span"> Pagina 1</span>
            </div>
        </div>
        <div class="option">
            <input value="option2" name="btn" type="radio" class="input" @click="pagina = 2"> 
            <div class="btn">
            <span class="span">Pagina 2</span>
            </div>  </div>
        <div class="option">
            <input value="option3" name="btn" type="radio" class="input" @click="pagina = 3">
            <div class="btn">
            <span class="span">Pagina 3</span>
            </div>  
        </div>
    </div>

    <hr />
    <ListadoCapitulos :page="pagina" />
    
</template>

<style scoped>
.wrapper {
  --font-color-dark: #fefefe;
  --font-color-light: #111;
  --bg-color: #111;
  --main-color: #fefefe;
  position: relative;
  width: 250px;
  height: 36px;
  background-color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  box-shadow: 4px 4px var(--main-color);
}

.option {
  width: 80.5px;
  height: 28px;
  position: relative;
  top: 2px;
  left: 2px;
}

.input {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  appearance: none;
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.span {
  color: var(--font-color-dark);
}

.input:checked + .btn {
  background-color: var(--main-color);
}

.input:checked + .btn .span {
  color: var(--font-color-light);
}
</style>