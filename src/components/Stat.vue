<script setup>
    const {label = "Не задан", stat} = defineProps({
        label: String,
        stat: String
    }); // Продвинутый вариант для строгой типизации (чтобы получать ли String либо undefined)
</script>

<template>
    <div class="stat">
        <div class="stat-name">{{ label }}</div>
        <div class="stat-value">{{ stat }}</div>
    </div>
</template>

<style scoped>
    .stat {
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        column-gap: 16px;
        text-transform: uppercase;
    }

    .stat-name {
        font-weight: 600;
    }

    .stat-value {
        font-weight: 500;
    }

    @media(max-width: 577px) {
        .stat {
            font-size: 20px;
        }
    }

    @media(max-width: 480px) {
        .stat {
            flex-direction: column;
            gap: 10px;
        }
    }
</style>
