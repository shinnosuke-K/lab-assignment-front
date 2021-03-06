<template>
    <b-container class="justify-content-center card">
        <b-col class="text title">Login</b-col>
        <UserForm />
        <PasswordForm />
        <button @click="onClick">Enter</button>
        <b-col class="text annotation">ログイン出来ない場合は e-class 経由でお知らせください</b-col>
    </b-container>
</template>

<script>
import UserForm from '@/components/loginForm/user'
import PasswordForm from '@/components/loginForm/password'

export default {
    name: "Card",
    components: {
        UserForm,
        PasswordForm
    },
    methods: {
        onClick: (event)=> {
            alert("Click!")
        }
    },
}
</script>

<style scoped>
.card {
    margin-top: 86px;
    width:500px;
    box-shadow: 0 2px 8px 1px gray;
}

.text {
    margin: 30px 0px;
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center;/* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.title {
    font-size: 2.5rem;
}

:focus {
    outline: none;
}

.input-form {
    margin: 0% 20% 30px 20%;
    padding: 15px 0px;
    border-style: none;
    border-bottom: solid 1px black;
    font-size: 1.5rem;
}

.input-form:focus {
    border-bottom: solid 2px red;
}

.input-form::placeholder {
    font-size: 1.5rem;
}

button {
    font-size: 2rem;
    background-color: #F16272;
    color: white;
    border: none;
    border-radius: 0.5rem;
    margin: 0% 20% 10px 20%;
    padding: 15px 10px;
    min-width: 100px;
}

button:hover {
    opacity: 0.8;
}

.annotation {
    font-size: 0.9rem;
    color: #666666;
}

</style>