<script setup>

</script>

<template>
    <button class="button">
        <slot/>
    </button>
</template>

<style scoped>
    .button {
        display: flex;
        column-gap: 9px;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: var(--border-radius);
        color: var(--color-primary);
        background: var(--gradient);
        padding: 14px;
        cursor: pointer;
        font-family: var(--font-family);
        font-size: var(--font-size);
        font-weight: 600;
        height: 53px;
        width: 100%;
    }

    @media(hover: hover) {
        .button:hover {
            background: var(--gradient-inverted);
        }
    }

    @media(hover: none) {
        .button:active {
            background: var(--gradient-inverted);
        }
    }
</style>