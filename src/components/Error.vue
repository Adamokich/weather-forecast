<script setup>
    const props = defineProps({
        error: String
    })
</script>

<template>
    <div class="error" v-if="props.error">
        {{ props.error }}
    </div>
</template>

<style scoped>
    .error {
        text-align: center;
        padding: 15px;
        background-color: var(--color-card-bg);
        box-shadow: 1px 2px 4px 0px rgba(34, 40, 49, 1);
        border-radius: 0px 0px 25px 25px;
        margin-top: -60px;
        margin-bottom: 60px;
    }
</style>