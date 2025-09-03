<script setup>
    import SunIcon from '../icons/weather/SunIcon.vue';
    import RainIcon from '../icons/weather/RainIcon.vue';
    import CloudSunIcon from '../icons/weather/CloudSunIcon.vue';
    import { computed } from 'vue';


    const {temperature, date, weatherCode, isActive} = defineProps({
        weatherCode: Number,
        temperature: Number,
        date: Date,
        isActive: Boolean
    })

    const iconColor = computed(() => isActive ? 'var(--color-primary-inverted)' : 'var(--color-primary)');
</script>

<template>

    <button class="card" :class="{active: isActive}">
        <SunIcon v-if="weatherCode <= 1003" :color="iconColor"/>
        <RainIcon v-if="weatherCode >= 1006 && weatherCode < 1063" :color="iconColor"/>
        <CloudSunIcon v-if="weatherCode >= 1063" :color="iconColor"/>

        <div class="card__day">
            {{ date.toLocaleDateString('ru-Ru', {weekday: 'short'}) }}
        </div>
        <div class="card__temperature">{{ Math.round(temperature) }} °C</div>
    </button>
</template>

<style scoped>
    .card {
        width: 100%;
        cursor: pointer;
        font-size: 20px;
        border: none;
        color: var(--color-primary);
        padding: 16px 25px;
        background-color: var(--color-card-bg);
        border-radius: 10px;
        box-shadow: 1px 2px 4px 0px rgba(34, 40, 49, 1);
        display: grid;
        justify-items: center;
        gap: 15px;
        max-width: 103px;
        transition: .4s all;
    }

    .card:not(.active):hover {
        background-color: var(--color-card-bg-inverted);
    }

    .card__temperature {
        font-weight: 700;
    }

    .active {
        background-color: var(--color-primary);
        color: var(--color-primary-inverted);
    }

    @media(max-width: 577px) {
        .card {
            max-width: none;
        }
    }
</style>