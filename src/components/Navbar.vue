<template>
    <header>
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828231.png" alt="icon">
            <h1>REX YOU</h1>
        </div>
        <nav>
            <navbar-links />
        </nav>
        <Slide class="burger_menu_div" width="200" right :closeOnNavigation="true">
            <navbar-links />
        </Slide>
    </header>
</template>

<script setup>
    import { Slide } from 'vue3-burger-menu'
    import NavbarLinks from './NavbarLinks.vue';
</script>

<style lang="scss" scoped>
    header {
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px auto;
        position: sticky;
        z-index: 20000;
        top: 0;
        background: black;

        .logo {
            width: 400px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                object-fit: cover;
                height: 50px;
            }

            h1 {
                font-size: 50px;
                margin-left: 20px;
                font-weight: 900 !important;
            }
        }

        nav, 
        .burger_menu_div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 40%;
            height: 100%;
        }

        .burger_menu_div {
            display: none;
        }

    }

    @media only screen and (max-width: 768px) {
        .burger_menu_div {
            display: block !important;
        }

        nav {
            display: none !important;
        }
    }

    @media only screen and (max-width: 480px){
        .logo {
            width: 60% !important;

            h1 {
                font-size: 30px !important;
                margin-left: 10px !important;
                font-weight: 900 !important;
            }
        }

    }
</style>