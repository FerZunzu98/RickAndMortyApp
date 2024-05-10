<script setup>
import { ref } from 'vue';

const props = defineProps({
    initialValue: {
        type: String,
        default: "",
        required: true
    },
    placeholder: {
        type: String,
        default: "Input",
        required: true
    }
})

const valor = ref(props.initialValue)
const emit = defineEmits(['newValue'])

function enviarValor(){
    emit('newValue', valor.value)
}

</script>

<template>
    <input type="text" class="input"
        :placeholder="placeholder" 
        v-model="valor" 
        @input="enviarValor" />
</template>

<style scoped>
.input {

  margin-top: 2rem;
  border: 1px solid black;
  width: 15em;
  height: 3em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
}

.input:hover,
.input:focus {
  border: 1px solid #4A9DEC;
  box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
  background-color: white;
}

</style>