<template>
    <a :href="iconData.icon_link" target="_blank">
        <v-icon v-bind:name="iconData.icon_name" scale="1.5" />
    </a>
</template>

<script setup>
    const props = defineProps({
        iconData: {
            type: Object,
            required: true,
        },
    });
</script>

<style lang="scss" scoped>

</style>