<script setup>
import { inject, onMounted, provide, ref, watch } from 'vue';
import PanelRight from './components/PanelRight.vue';
import { cityProvide } from './constans';
import PanelLeft from './components/PanelLeft.vue';

const API_ENDPOINT = "http://api.weatherapi.com/v1";

let data = ref();
let error = ref();
let activeIndex = ref(0);
let city = ref("Moscow");

onMounted(() => {
    getCity(city.value);
})

watch(city, () => {
    getCity(city.value);
})

provide(cityProvide, city);

async function getCity(city) {
    const params = new URLSearchParams({
        q: city,
        lang: 'ru',
        key: '9bf1b525b7ec4b8fa3e164532252708',
        days: 3,
    });

    const response = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
    
    if (response.status !== 200) {
        error.value = await response.json();
        data.value = null;
        return;
    }

    error.value = null;
    data.value = await response.json();
}

</script>

<template>
    <main class="main">
        <PanelLeft
        v-if="data"
        :dayData="data.forecast.forecastday[activeIndex]"/>
        <PanelRight
        :data
        :error
        :activeIndex="activeIndex"
        @select-index="(index) => (activeIndex = index)"
        @select-city="getCity"/>
    </main>
</template>

<style scoped>
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 991px) {
        .main {
            flex-direction: column;
            align-items: start;
        }
    }

</style>
