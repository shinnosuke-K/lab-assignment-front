<template>
  <div class="card">
      <form>
        <p class="form-contents title">Login</p>
        <div class="form-contents">
            <UserForm />
        </div>
        <div class="form-contents">
            <PasswordForm />
        </div>
        <div class="form-contents">
            <button type="submit">Enter</button>
        </div>
        <p class="form-contents annotation">ログイン出来ない場合は e-class 経由でお知らせください</p>
      </form>
  </div>
</template>

<script>
import UserForm from '@/components/loginForm/user'
import PasswordForm from '@/components/loginForm/password'

export default {
    name: "Card",
    components: {
        UserForm,
        PasswordForm,
    }
}
</script>

<style scoped>
.card {
    padding: 0.5em 1em;
    margin: 86px 20% 0 20%;
    height: 100;
    box-shadow: 0 2px 8px 1px gray;
    display: flex;
    justify-content: center;
}

.form-contents {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center;/* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.card p {
    padding: 10px;
    margin: 10px 20px 30px 40px;
}

.form-contents.title {
    font-size: 2.5rem;
}

:focus {
    outline: none;
}

.input-form {
    margin: 0% 10% 30px 10%;
    padding: 15px 50% 15px 0px;
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
    border-radius: 0.5rem;
    padding: 10px 150px;
}

.form-contents.annotation {
    font-size: 1rem;
    color: #666666;
}

</style>