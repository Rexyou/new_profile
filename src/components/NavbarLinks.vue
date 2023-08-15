!<template>
    <RouterLink class="nav_link" to="/" v-scroll-to="{el:'#introduction', offset: -200, easing: 'linear',}">Home</RouterLink>
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

    @media only screen and (max-width: 480px){
        .nav_link {
            font-size: 24px;
        }

    }
</style>