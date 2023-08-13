!<template>
    <RouterLink class="nav_link" to="/">Home</RouterLink>
    <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">Portfolio</RouterLink>
    <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">About</RouterLink>
    <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">Contact Me</RouterLink>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .nav_link {
        text-decoration: none;
        font-size: 18px;
    }
</style>