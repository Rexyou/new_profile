<template>
    <div class="experiences">
        <h1>Experiences</h1>
        <div id="timeline">
            <ul class="container">
                <li class="list-items" v-for="(item, index) in items" :key="index">{{item.message}}
                    <div class="card">
                        <h2>{{item.title}}</h2>
                        <h3>{{ item.company_name }}</h3>
                        <ul class="working_details">
                            <li v-for="(detail, index) in item.details" :key="index">
                                {{ detail }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const items = [
        { 
            message: '2022 Nov - Present',
            title: 'Backend Developer',
            company_name: 'Jobstore Group Bhd',
            details: [
                'Development for mobile/web application using different tech stack',
                'Maintain and improve current system to meet higher availability and scalability',
                'According company internal requirements to develop system',
                'Monitor and diagnostic current uplive websites/apps',
            ]
        },
        { 
            message: '2022 Apr - 2022 Oct',
            title: 'Junior Backend Developer',
            company_name: 'Wemit Solutions Sdn Bhd',
            details: [
                'Develop websites/apps using Zend Framework and Node JS',
                'Integrate with third party API like payment gateway, gaming API',
                'Customize websites/apps according customer\'s requirements',
                'Assist to monitor and diagnostic customers\' websites/app',
            ]
        },
        { 
            message: '2022 Jan - 2022 Mar',
            title: 'Application Support Engineer',
            company_name: 'EasyParcel Sdn Bhd',
            details: [
                'Provide supports to customers API integration',
                'Assist to imporve and modify current coding structure',
                'Able to learn different integration platform',
                'Assist internal department to handle different integration problems',
            ]
        },
        { 
            message: '2020 Oct - 2021 Nov',
            title: 'Backend Developer',
            company_name: 'Ultraflex Tech Sdn Bhd/Thrieve Tech',
            details: [
                'Develop new website according customers\' requirements',
                'Integration with different API such as SMS, payment gateway, gaming API etc',
                'Assist to monitor current data and coding structure',
                'Provide different solutions according to customer current problems',
            ]
        },
        { 
            message: '2018 Jun - 2020 Aug',
            title: 'IT Support Engineer',
            company_name: 'Wangsu Technology Sdn Bhd/Cdnetworks Sdn Bhd',
            details: [
                'Assist internal department to do modification in data center',
                'Diagnostic server hardware and software issues',
                'Restructure current exist cabinet structure',
                'Need to always standby to travel other country data center',
            ]
        },
        { 
            message: '2018 Mar - 2018 May',
            title: 'IT Support',
            company_name: 'Acme Commerce Sdn Bhd',
            details: [
                'Provide first level support through phone call, live chat and email',
                'Support customer problems on server panel, email system and company products query',
                'Assist to monitor server health and take shifting to solve customer issues',
            ]
        },
    ];
</script>

<style lang="scss" scoped>
    .experiences {

        min-height: 100vh;
        padding: 20px 40px;

        h1 {
            margin-top: 16vh;
            font-size: 30px;
        }

        h2 {
            font-size: 35px;
        }

        h3 {
            font-size: 24px;
            color: #ff1e1e;
            margin-bottom: 10px;
        }

        .container {
            list-style-type: none;
            border-left: 2px solid #FB2576;
            display: flex;
            flex-wrap: wrap;
            width: 40%;
            margin: 0 50%;
        }

        .list-items {
            padding: 10px;
            margin: 10px;
            color: #6a6a6a;
            width: 100%;
            font-size: 1.6em;
        }

        .list-items:nth-of-type(1) {
            color: #ff1e1e !important;
        }

        .list-items:nth-of-type(odd) {
            color: #ff4e92;
            margin-left: -100%;
            text-align: left;
        }

        .card {
            width: 100%;
            font-size: 1em;
        }

        .working_details {
            font-size: 18px;
            padding-left: 25px;
        }
        
        @media only screen and (max-width: 480px) {

            h2 {
                font-size: 24px;
            }

            h3 {
                font-size: 20px;
                color: #ff1e1e;
                margin-bottom: 10px;
            }
            
            .container {
                width: 100%;
                margin: 0;
            }

            .list-items:nth-of-type(odd) {
                margin-left: 10px;
            }

            .working_details {
                font-size: 16px;
            }

        }

    }
</style>