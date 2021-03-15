<template>
    <button>
        {{ btn.word }}
        <img v-if="btn.show" src="@/static/img/outline_chevron_right.png" alt="">
    </button>
</template>

<script>
export default {
    name: 'ProgressButton',
    props: ['btn']
}
</script>

<style scoped>
button {
    font-size: 2rem;
    background-color: #F59944;
    color: white;
    border: none;
    border-radius: 0.5rem;
    /* margin: 5% 20% 5% 50%; */
    padding: 15px 10px;
    min-width: 200px;
    height: 65px;
    pointer-events: none;
}

button:hover {
    opacity: 0.5;
    /* border-style: none; */
}

</style>