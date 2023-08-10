<template>
    <div class="introduction">

        <div class="social_media">
            <social-icon v-for="(iconData, index) in sideIconList" :key="index" :iconData="iconData"></social-icon>
        </div>

        <div class="personal_profile">
            <svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M68.3,-25C74,-4.6,54.1,21.2,31.7,35.6C9.3,50,-15.6,52.9,-33.5,41.1C-51.3,29.4,-62,2.9,-55.3,-19C-48.5,-40.8,-24.3,-58,3.5,-59.2C31.3,-60.3,62.6,-45.4,68.3,-25Z" transform="translate(100 100)" />
            </svg>
            <img src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535aa1d871310896104715_peep-77.svg" alt="">
            <h1>Backend Developer</h1>
            <h5>Experience in web development</h5>
        </div>
    </div>
</template>

<script setup>

    import SocialIcon from "./SocialIcon.vue";

    const sideIconList = [
        {
            'icon_name': 'bi-github',
            'icon_type': 'github',
            'icon_link': 'https://github.com/Rexyou',
        },
        {
            'icon_name': 'bi-whatsapp',
            'icon_type': 'whatsapp',
            'icon_link': 'https://wa.me/+601116359489',
        },
        {
            'icon_name': 'bi-mailbox',
            'icon_type': 'mail',
            'icon_link': 'rexyou0831@gmail.com',
        },
        {
            'icon_name': 'bi-linkedin',
            'icon_type': 'linkedin',
            'icon_link': 'https://www.linkedin.com/in/rex-you-2a4347194/',
        },
    ];

</script>

<style lang="scss" scoped>
    .introduction {
        // border: 1px solid yellow;
        display: flex;

        .social_media {
            width: 10%;
            display: flex;
            flex-direction: column;
            height: auto;
            justify-content: center;
            align-items: center;
            line-height: 60px;
        }

        .personal_profile {
            width: 90%;
            height: 85vh;
            position: relative;

            svg {
                width: auto;
                height: 100%;
            }

            img {
                height: 500px;
                width: auto;
                position: absolute;
                left: 140px;
                top: 100px;
                background: none;
            }

            h1 {
                font-size: 90px;
                position: absolute;
                top: 180px;
                left: 450px;
                background: none;
            }

            h5 {
                font-size: 40px;
                position: absolute;
                top: 290px;
                left: 450px;
                background: none;
            }
        }
    }
</style>