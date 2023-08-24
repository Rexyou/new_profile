<template>
    <div class="about_me_icon">
        <v-icon v-bind:name="iconData.icon_tag" class="icon" scale="5" :title="iconData.icon_name" />
        <span>{{ iconData.icon_name }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        iconData: {
            // type: Array,
            required: true,
        },
    });
</script>

<style lang="scss" scoped>
    .about_me_icon {
        display: flex;
        flex-direction: column;
        text-align: center;

        .icon {
            border: 0.5px solid #FB2576;
            border-radius: 50%;
            margin: 5px 10px;
            padding: 10px;
        }

        span {
            margin-top: 10px;
            font-size: 18px;
        }
    }

    
    @media only screen and (max-width: 480px) {

        .about_me_icon {

            margin-bottom: 15px;

            span {
                margin-top: 5px;
                font-size: 14px;
            }
        }

    }
</style>