<script setup>
import Error from './Error.vue';
import Card from './Card.vue';
import CitySelect from './CitySelect.vue';
import Stat from './Stat.vue';
import { computed, inject, provide } from 'vue';

const {error, data, activeIndex} = defineProps({
    error: Object,
    data: Object,
    activeIndex: Number
})


const emit = defineEmits(['select-index', 'select-city']);

const errorMap = new Map([[1006, "Указанный город не найден"]]);

const errorDisplay = computed(() => {
    return errorMap.get(error?.error?.code);
})

const statData = computed(() => {
    if (!data) {
        return []
    }


    const {avghumidity, daily_chance_of_rain, maxwind_kph} = data.forecast.forecastday[activeIndex].day;

    return [
        {
            label: 'Влажность',
            stat: avghumidity + ' %'
        },
        {
            label: 'Вероятность дождя',
            stat: daily_chance_of_rain + ' %'
        },
        {
            label: 'Ветер',
            stat: maxwind_kph + ' к/ч'
        }
    ]
})
</script>

<template>
    <div class="right-panel">
        <Error v-if="error" :error="errorDisplay"/>
        <div class="weather-info" v-if="data">
            <div class="stat-list">
                <Stat 
                v-for="item in statData" 
                v-bind="item" 
                :key="item.label"/>
            </div>
            <div class="day-cards">
                <Card 
                v-for="(item, index) in data.forecast.forecastday"
                :key="item.date"
                :weatherCode="item.day.condition.code" 
                :temperature="item.day.maxtemp_c" 
                :date="new Date(item.date)"
                :isActive="activeIndex == index"
                @click="() => emit('select-index', index)"/>
            </div>
        </div>
        <CitySelect />
    </div>
</template>

<style scoped>
    .right-panel {
      margin-inline: auto;
      background-color: var(--color-bg-main);
      border-radius: 0 25px 25px 0;
      padding: 60px 50px;
    }

    .weather-info {
        display: grid;
        gap: 80px;
        margin-bottom: 70px;
    }

    .day-cards {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .stat-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media (max-width: 991px) {
        .right-panel {
            border-radius: 0 0 25px 25px;
            margin: 0;
            width: 530px;
        }

    }

    @media (max-width: 577px) {
        .right-panel {
            width: 450px;
        }

        .day-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 480px) {
        .right-panel {
            width: 400px;
        }
    }

    @media(max-width: 420px) {
        .right-panel {
            padding: 30px 40px;
            width: 330px;
        }
    }
</style>