<template>
    <b-container>
        <div class="section">
            <Section :section="section" />
            <Precautions v-if="section.show" />
            <ItemCard
                v-for="lab in labInfos"
                :key="lab.name"
                :lab="lab"
                :show="true"
            />
            <div class="float-right btn">
                <ProgressButton :btn="{'word': '次へ', 'show': true, 'func': 'check', 'to': '/graduate' }"/>
            </div>
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import Precautions from '@/components/Precautions'
import ItemCard from '@/components/ItemCard'
import ProgressButton from '@/components/ProgressButton'
import BackButton from '@/components/BackButton'

import { mapGetters } from 'vuex'

export default {
    components: {
        Section,
        Precautions,
        ItemCard,
        ProgressButton,
        BackButton
    },
    computed: {
        ...mapGetters([
            'userID',
            'people',
            'labInfos'
        ]),
    },
    data() {
        return {
            section: {
                num: 1,
                show: true,
                fixShow: false,
                suuplement: "研究室配属に関する希望を調査をします。"
            },
        }
    },
    methods: {
        score(){
            this.$store.dispatch('calcScore').then((score) => {
                console.log(score)
            })
            return false
        }
    },
}
</script>

<style scoped>
.section {
    border: solid 1px black;
    margin: 0% 100px;
    padding: 70px 0px;
}

.btn {
    display: flex;
}

.btn {
    margin-top: 50px;
    margin-bottom: 20px;
    margin-right: 200px;
}
</style>