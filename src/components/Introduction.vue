<template>
    <div class="introduction">

        <div class="social_media">
            <social-icon v-for="(iconData, index) in sideIconList" :key="index" :iconData="iconData"></social-icon>
        </div>

        <div class="personal_profile">
            <svg viewBox="0 0 250 180" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M68.3,-25C74,-4.6,54.1,21.2,31.7,35.6C9.3,50,-15.6,52.9,-33.5,41.1C-51.3,29.4,-62,2.9,-55.3,-19C-48.5,-40.8,-24.3,-58,3.5,-59.2C31.3,-60.3,62.6,-45.4,68.3,-25Z" transform="translate(100 100)" />
            </svg>
            <!-- <img src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535aa1d871310896104715_peep-77.svg" alt=""> -->
            <img src="https://i.ibb.co/64Grsp3/rexyoufuye-home-1.png" alt="">
            <div class="main_title">
                <h1>Backend Developer</h1>
                <h5>Where Logic Meets Limitless Possibilities</h5>
            </div>
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
        overflow: hidden;

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
                height: 320px;
                width: auto;
                position: absolute;
                left: 200px;
                top: 220px;
                background: none;
            }

            .main_title {
                position: absolute;
                font-size: 30px;
                top: 240px;
                left: 540px;
                width: 100%;
                line-height: 65px;
                word-wrap: break-word;

                h5 {
                    font-size: 25px;
                    font-style: italic;
                }
            }

        }
    }

    @media only screen and (max-width: 480px) {
        .introduction {

            .social_media {
                width: 25%;
            }

            .personal_profile{

                width: 75%;
                
                svg {
                    display: none;
                }

                img {
                    top: 240px;
                    height: 250px;
                    left: 0px;
                }

                .main_title {
                    left: 0;
                    top: 50px;
                    font-size: 20px;
                    line-height: 45px;

                    h5 {
                        font-size: 12px;
                    }

                }

            }


        }
    }
</style>