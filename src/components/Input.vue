<script setup>
import { onMounted, onUnmounted } from 'vue';

    const data = defineModel({type: String, required: true});
    const additional = defineModel('additional', {type: String});
</script>

<template>
    <input 
    class="form-input" 
    type="text" 
    placeholder="Введите город"
    v-model="data"/>
</template>

<style scoped>
    .form-input {
        color: var(--color-primary);
        background-color: var(--color-card-bg);
        border-radius: var(--border-radius);
        box-shadow: 1px 2px 4px 0px var(--color-bg-main);
        border: none;
        padding: 15px 20px;
        font-size: 18px;
        width: 260px;
        height: 53px;
    }

    .form-input::placeholder {
        color: rgba(63, 73, 88, 1);
    }

    .form-input:focus {
        outline: none;
    }
</style>