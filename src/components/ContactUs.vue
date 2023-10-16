<template>
    <div class="contact_me">
        <h1>Contact Me</h1>
        <div class="container">
            <form class="form" @submit.prevent="submitForm">
                <div class="form_content">
                    <label for="request_name">Name</label>
                    <input type="text" id="request_name" v-model="form.from_name">
                    <span v-for="error in v$.from_name.$errors" :key="error.$uid" class="error_message">
                        {{ error.$message }} <br/>
                    </span>
                </div>
                <div class="form_content">
                    <label for="request_email">Email</label>
                    <input type="email" id="request_email" v-model="form.reply_to">
                    <span v-for="error in v$.reply_to.$errors" :key="error.$uid" class="error_message">
                        {{ error.$message }} <br/>
                    </span>
                </div>
                <div class="form_content">
                    <label for="request_content">Content</label>
                    <textarea name="request_content" id="request_content" cols="20" rows="5" v-model="form.message"></textarea>
                    <span v-for="error in v$.message.$errors" :key="error.$uid" class="error_message">
                        {{ error.$message }} <br/>
                    </span>
                </div>
                <div class="form_content2">
                    <button type="submit" class="request_button">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

    import { reactive, computed } from 'vue';
    import emailjs from '@emailjs/browser';

    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength, maxLength } from '@vuelidate/validators'

    const form = reactive({
        from_name: '',
        reply_to: '',
        message: ''
    })

    const rules = computed(()=> {
        return {
            from_name: { required, minLength: minLength(6) },
            reply_to: { required, email, minLength: minLength(6) },
            message: { required, minLength: minLength(20), maxLength: maxLength(200) }
        }
    })

    const v$ = useVuelidate(rules, form);
    
    const submitForm = async() => {

        document.getElementById("overlay").style.display = "block";

        if(form.from_name == '' || form.reply_to == '' || form.message == ''){
            document.getElementById("overlay").style.display = "none";
            return Swal.fire("Input cannot be empty")
        }

        const result = await v$.value.$validate();
        if(result){
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form, import.meta.env.VITE_PUBLIC_ID)
            .then((response)=>{

                document.getElementById("overlay").style.display = "none";

                if(response.status == 200){
                    Swal.fire("Message has been successfully send!")
                    form.from_name = ''
                    form.reply_to = ''
                    form.message = ''
                    return v$.value.$reset()
                }
                else {
                    Swal.fire(response.text)
                }

            });
        }
    }

</script>

<style lang="scss" scoped>
    .contact_me {
        min-height: 100vh;
        padding: 20px 40px;

        h1 {
            margin-top: 16vh;
            font-size: 30px;
        }

        .container {
            width: 100%;
            margin: 0px auto;
            display: flex;

            .form {
                max-width: 450px;
                width: 100%;
                // border: 1px solid pink;
                margin: 0px auto;
                padding: 10px 20px;

                .error_message {
                    color: red;
                    padding: 10px 20px;
                }

                .form_content {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 10px;

                    label {
                        margin: 5px 20px;
                        font-size: 20px;
                    }

                    input, textarea {
                        margin: 0px 20px;
                        padding: 8px 10px;
                        color: black;
                        font-size: 16px;
                        border: none;
                        outline: none;
                    }

                    textarea {
                        resize: none;
                    }

                }

                .form_content2 {
                    padding: 10px 20px;

                    button {
                        width: 100%;
                        padding: 10px 20px;
                        outline: none;
                        border: none;
                        background: #FB2576;
                        font-size: 18px;
                        transition: all 0.3s ease-in-out;
                        
                        &:hover {
                            cursor: pointer;
                            background: #98013b;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 480px) {

            .form {
                width: 100%;
                padding: 0px !important;

                .error_message {
                    padding: 0px !important;
                    font-size: 14px;
                    margin-top: 10px;
                }

                label, input, textarea {
                    margin: 0px !important;
                }

                label {
                    margin-bottom: 5px !important;
                }

                .form_content {
                    margin-top: 10px;
                }

                .form_content2 {
                    padding: 0px !important;
                    margin-top: 20px !important;
                }

            }

        }
    }
</style>