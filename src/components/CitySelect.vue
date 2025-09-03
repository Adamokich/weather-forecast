<script setup>
import { ref, onMounted, inject } from 'vue';
import Button from './button.vue'; 
import IconLocation from '../icons/IconLocation.vue';
import Input from './Input.vue';
import { cityProvide } from '../constans';


let isEdited = ref(true);

const city = inject(cityProvide);
const inputValue = ref(city.value);

function selectCity() {
    isEdited.value = false;
    city.value = inputValue.value;
}

function onEditCity() {
    isEdited.value = true;
}

</script>

<template>

    <div class="city-select">
        <div v-if="isEdited" class="city-input">
            <Input 
            v-model="inputValue" 
            v-focus
            @keyup.enter="selectCity()"/>
            <Button @click="selectCity()">Сохранить</Button>
        </div>

        <Button class="edit-btn" v-if="!isEdited" @click="onEditCity">
            <IconLocation/>
            Изменить город
        </Button>
    </div>
    
</template>

<style scoped>
    .form {
        display: flex;
        justify-content: space-between;
        column-gap: 12px;
    }

    .city-input {
        display: flex;
        gap: 12px;
    }

    .city-select {
        width: 420px;
    }

    @media (max-width: 577px) {
        .city-select {
            width: 100%;
        }

        .city-input {
            width: 80%;
            flex-direction: column;
        }

        .edit-btn {
            margin-inline: auto;
        }
    }

</style>