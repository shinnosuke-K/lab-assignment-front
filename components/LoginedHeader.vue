<template>
    <div class="header">
        <img src="@/static/img/logo.png" alt="site logo" />
        <p class="logout" @click="logout">ログアウト</p>
    </div>
</template>

<script>
export default {
    name: "LoginedHeader",
    methods: {
        logout() {
            this.$auth.logout().then(() => {
                this.$router.replace({path: '/login'})
            })
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
    background: #0083A2;
}

.header img {
    height: 45px;
    margin: 15px;
    margin-left: 10%;
}

.logout {
    margin: 15px;
    margin-right: 10%;
    color:white;
    font-size: 2rem;
}

.logout:hover {
    cursor: pointer;
}

.logout {
  display: block;
  padding: 0 0 5px;
  position: relative;
  text-decoration: none;
}
.logout::before,
.logout::after {
  border-bottom: solid 2px white;
  bottom: 0;
  content: "";
  display: block;
  position: absolute;
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  width: 0;
}
.logout::before {
  left: 50%;
}
.logout::after {
  right: 50%;
}
.logout:hover::before,
.logout:hover::after {
  width: 50%;
}

</style>