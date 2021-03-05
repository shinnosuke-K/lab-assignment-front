<template>
    <div class="header">
        <img src="@/static/img/logo.png" alt="site logo" />
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header {
    display: flex;
    height: 70px;
    background: #0083A2;
}

.header img {
    height: 45px;
    margin: 15px;
    margin-left: 10%;
}

</style>