<template>
    <div>
        <p class="title">調査項目{{ section.num }}</p>
        <p class="supplement" v-if="section.show">{{ section.suuplement }}</p>
    </div>
</template>

<script>
export default {
    name: 'Section',
    props:['section']
}
</script>

<style scoped>

.title {
    margin-top: 50px;
    padding-left: 40px;
    padding-bottom: 10px;
    border-bottom: solid 1px black;
    font-size: 2.2rem;
}

.supplement {
    font-size: 1.8rem;
    padding: 0px 60px;
}

</style>