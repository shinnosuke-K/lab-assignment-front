<template>
    <div>
        <div class="title">
            <p>調査項目{{ section.num }}</p>
            <nuxt-link v-if="section.fixShow" :to="`${section.route}`">
                <FixButton />
            </nuxt-link>
        </div>

        <p class="supplement" v-if="section.show">{{ section.suuplement }}</p>
    </div>
</template>

<script>
import FixButton from '@/components/FixButton'

export default {
    name: 'Section',
    components: {
        FixButton,
    },
    props:['section'],
}
</script>

<style scoped>

.title {
    margin-top: 50px;
    padding-left: 40px;
    border-bottom: solid 1px black;
    font-size: 2.2rem;
    display: flex;
    justify-content: space-between;
}

.supplement {
    font-size: 1.8rem;
    margin-top: 10px;
    padding: 0px 60px;
}

</style>