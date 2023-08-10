<template>
    <header>
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828231.png" alt="icon">
            <h1>REX YOU</h1>
        </div>
        <nav>
            <RouterLink class="nav_link" to="/">Home</RouterLink>
            <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">Portfolio</RouterLink>
            <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">About</RouterLink>
            <RouterLink class="nav_link" to="#" v-scroll-to="'#aboutme'">Contact Me</RouterLink>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    header {
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px auto;

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

        nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 40%;
            height: 100%;

            .nav_link {
                text-decoration: none;
                font-size: 18px;
            }
        }
    }
</style>