<script setup>
import { computed, inject } from 'vue';
import IconLocation from '../icons/IconLocation.vue';
import { cityProvide } from '../constans';
import SunIcon from '../icons/weather/SunIcon.vue';
import RainIcon from '../icons/weather/RainIcon.vue';
import CloudSunIcon from '../icons/weather/CloudSunIcon.vue';

const {dayData, location} = defineProps({
    dayData: Object,
})

const day = computed(() => {
    return new Date(dayData.date).toLocaleDateString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'})
})

const weekDay = computed(() => {
    return new Date(dayData.date).toLocaleDateString('ru-Ru', {weekday: 'long'})
})

const city = inject(cityProvide);

const weatherCode = computed(() => {
    return dayData.day.condition.code;
})

const temp = computed(() => {
    return dayData.day.maxtemp_c;
})

const weather = computed(() => {
    return dayData.day.condition.text;
})

</script>

<template>
    <div class="left-panel">
        <div class="left-panel-wrapper">
            <div class="left-panel-top">
                <div class="week-day">
                    <div>{{ weekDay }}</div>
                </div>
                <div class="date">
                    <div>{{ day }}</div>
                </div>
                <div class="location">
                    <IconLocation/>
                    <div>{{ city }}</div>
                </div>
            </div>
            <div class="left-panel-bottom">
                <div class="weather-icon">
                    <SunIcon v-if="weatherCode <= 1003" :size="95"/>
                    <RainIcon v-if="weatherCode >= 1006 && weatherCode < 1063" :size="95"/>
                    <CloudSunIcon v-if="weatherCode >= 1063" :size="95"/>
                </div>
                <div class="temp">{{ Math.round(temp) }} °C</div>
                <div class="weather">{{ weather }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .left-panel {
        position: relative;
        display: block;
        width: 500px;
        height: 680px;
        padding: 48px 32px 84px 32px;
        background-image: url('../assets/main-img.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 30px;
    }

    .left-panel-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .left-panel-top {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        align-items: start;
    }

    .weather-icon {
        margin: 15px;
    }

    .week-day {
        font-size: 37px;
        font-weight: 700;
        text-transform: capitalize;
    }

    .date {
        font-size: 22px;
        font-weight: 500;
    }

    .location {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .left-panel-bottom {
        display: flex;
        flex-direction: column;
        align-items: start;
        row-gap: 9px;
    }

    .temp {
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    .weather {
        font-size: 30px;
        font-weight: 700;
        text-transform: capitalize;
    }

    @media(max-width: 991px) {
        .left-panel {
            height: 300px;
            width: 530px;
            border-radius: 30px 30px 0 0;
        }
        
        .left-panel-wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .left-panel-bottom {
            align-items: end;
        }

        .weather-icon svg {
            scale: 1.3 !important;
        }

        .temp {
            font-size: 30px;
        }

        .weather {
            text-align: end;
            font-size: 20px;
        }
    }

    @media (max-width: 577px) {
        .left-panel {
            width: 450px;
        }
    }

    @media(max-width: 480px) {
        .left-panel {
            padding: 40px 25px 60px 25px;
            width: 400px;
        }
    }

    @media(max-width: 420px) {
        .left-panel {
            width: 330px;
            padding: 20px 25px 10px 25px;
        }

        .left-panel-wrapper {
            align-items: start;
            flex-direction: column;
        }

        .left-panel-bottom {
            align-items: start;
        }

        .week-day {
            font-size: 25px;
        }

        .date, .location {
            font-size: 18px;
        }

        .weather-icon, .weather-icon svg {
            margin: 0;
            scale: 1 !important;
            position: absolute;
            right: 20px;
            top: 10px;
        }
    }

</style>