<template>
    <button>
        <img src="@/static/img/outline_chevron_left.png" alt="">
        {{ btn.word }}
    </button>
</template>

<script>
export default {
    name: 'BackButton',
    props: ['btn']
}
</script>

<style scoped>

button {
    font-size: 2rem;
    background-color: #B7B7B7;
    color: black;
    border: none;
    border-radius: 0.5rem;
    /* margin: 5% 20% 5% 20%; */
    padding: 15px 10px;
    min-width: 200px;
    height: 65px;
    pointer-events: none;
}

button:hover {
    opacity: 0.5;
}

img {
    width: 24px;
    height: 24px;
    /* margin-bottom: 5px; */
}

</style>