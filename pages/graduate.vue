<template>
    <b-container>
        <div class="section">
            <Section :section="section"/>
            <QuestionChoice />
            <nuxt-link to="/graduate">
                <ProgressButton :btn="{'word': '次へ'}"/>
            </nuxt-link>
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import QuestionChoice from '@/components/QuestionChoice'

export default {
    components: {
        Section,
        QuestionChoice
    },
    data() {
        // vuexを利用する
        return {
            section: {
                num: 2,
                show: false,
            }
        }
    }
}
</script>

<style scoped>
.section {
    border: solid 1px black;
    margin: 0% 100px;
}

</style>