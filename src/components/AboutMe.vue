<template>
    <div class="about_me">
        <h1>I AM A BACKEND DEVELOPER</h1>
        <p>Major focus on web development. Being involved development different types of systems such as Online Gaming, MLM, job portal etc.</p>
        <div @click="isExpanded = !isExpanded" class="accordian_title">
            <h2>Programming Language</h2>
            <v-icon name='co-arrow-circle-right' class="accordian_icon" scale="4" />
        </div>
        <hr>
        <Collapse :when="isExpanded" class="tech_stack">
            <about-me-icon v-for="(iconData, index) in skillsIconList['programming_language']" :key="index" :iconData="iconData"></about-me-icon>
        </Collapse>

        <div @click="isExpanded2 = !isExpanded2" class="accordian_title">
            <h2>Software</h2>
            <v-icon name='co-arrow-circle-right' class="accordian_icon" scale="4" />
        </div>
        <hr>
        <Collapse :when="isExpanded2" class="tech_stack">
            <about-me-icon v-for="(iconData, index) in skillsIconList['software']" :key="index" :iconData="iconData"></about-me-icon>
        </Collapse>

        <div @click="isExpanded3 = !isExpanded3" class="accordian_title">
            <h2>API</h2>
            <v-icon name='co-arrow-circle-right' class="accordian_icon" scale="4" />
        </div>
        <hr>
        <Collapse :when="isExpanded3" class="tech_stack">
            <about-me-icon v-for="(iconData, index) in skillsIconList['api']" :key="index" :iconData="iconData"></about-me-icon>
        </Collapse>

        <div @click="isExpanded4 = !isExpanded4" class="accordian_title">
            <h2>Others</h2>
            <v-icon name='co-arrow-circle-right' class="accordian_icon" scale="4" />
        </div>
        <hr>
        <Collapse :when="isExpanded4" class="tech_stack">
            <about-me-icon v-for="(iconData, index) in skillsIconList['others']" :key="index" :iconData="iconData"></about-me-icon>
        </Collapse>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { Collapse } from 'vue-collapsed'
    import AboutMeIcon from './AboutMeIcon.vue';

    const isExpanded = ref(false)
    const isExpanded2 = ref(false)
    const isExpanded3 = ref(false)
    const isExpanded4 = ref(false)

    const skillsIconList = {
        'programming_language': {
            0: {
                'icon_tag': 'co-php',
                'icon_name': 'PHP',
            },
            1: {
                'icon_tag': 'fa-js-square',
                'icon_name': 'JavaScript',
            },
            2: {
                'icon_tag': 'co-jquery',
                'icon_name': 'JQuery',
            },
            3: {
                'icon_tag': 'co-mysql',
                'icon_name': 'MySql',
            },
            4: {
                'icon_tag': 'co-laravel',
                'icon_name': 'Laravel',
            },
            5: {
                'icon_tag': 'bi-filetype-html',
                'icon_name': 'HTML',
            },
            6: {
                'icon_tag': 'bi-filetype-css',
                'icon_name': 'CSS',
            },
            7: {
                'icon_tag': 'co-linux',
                'icon_name': 'Linux',
            },
            8: {
                'icon_tag': 'co-react',
                'icon_name': 'React',
            }
        },
        'software': {
            0: {
                'icon_tag': 'co-visual-studio-code',
                'icon_name': 'Visual Studio Code',
            },
            1: {
                'icon_tag': 'co-postman',
                'icon_name': 'Postman',
            },
        },
        'api': {
            0: {
                'icon_tag': 'co-stripe-s',
                'icon_name': 'Stripe',
            },
            1: {
                'icon_tag': 'bi-google',
                'icon_name': 'Google Cloud Platform',
            },
            2: {
                'icon_tag': 'md-payment',
                'icon_name': 'Truepay',
            },
            3: {
                'icon_tag': 'md-payment',
                'icon_name': 'Eeziepay',
            },
            4: {
                'icon_tag': 'md-payment',
                'icon_name': 'Fpay',
            },
            5: {
                'icon_tag': 'co-twilio',
                'icon_name': 'Twilio',
            },
            6: {
                'icon_tag': 'fa-sms',
                'icon_name': 'SMS123',
            },
        },
        'others': {
            0: {
                'icon_tag': 'io-hardware-chip-sharp',
                'icon_name': 'Hardware repair',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .about_me {
        min-height: 100vh;
        padding: 20px 40px;

        h1 {
            margin-top: 16vh;
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }

        hr {
            margin: 20px auto;
        }
        .accordian_title {

            display: flex;
            align-items: center;
            margin-top: 30px;
            width: 100%;

            h2 {
                font-size: 50px;
            }

            .accordian_icon {
                margin-left: 10px;
            }

            &:hover{
                cursor: pointer;
            }

        }

        .tech_stack {
            width: 100%;
            height: auto;
            // border: 1px solid yellow;
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }

    @media only screen and (max-width: 480px) {

        .about_me {
            h1 {
                font-size: 20px;
            }

            p {
                font-size: 15px;
            }

            hr {
                margin: 15px auto;
            }

            .accordian_title {

                h2 {
                    font-size: 20px;
                }

                .accordian_icon {
                    width: 35px !important;
                    height: 35px !important;
                    margin-left: 5px;
                }

            }
        }

    }
</style>