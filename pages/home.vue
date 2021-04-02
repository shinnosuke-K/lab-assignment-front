<template>
    <b-container>
        <div class="home">
            <Section :section="section[0]" />
            <ItemCard
                v-for="lab in labInfos"
                :key="lab.name"
                :lab="lab"
                :show="false"
            />
            <Section :section="section[1]"/>
            <QuestionChoice :disabled="true"/>
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import ItemCard from '@/components/ItemCard'
import QuestionChoice from '@/components/QuestionChoice'

import { mapGetters } from 'vuex'


export default {
    name: 'Home',
    components: {
        Section,
        ItemCard,
        QuestionChoice,
    },
    computed: {
        ...mapGetters([
            'labInfos'
        ]),
    },

    data() {
        return {
            section: [
                {num: 1, show: false, fixShow: true, route: '/lab/fix'},
                {num: 2, show: false, fixShow: true, route: '/graduate/fix'},
            ],
        }
    }
}
</script>

<style scoped>
.home {
    border: solid 1px black;
    margin: 0% 100px;
    padding: 70px 0px;
}
</style>