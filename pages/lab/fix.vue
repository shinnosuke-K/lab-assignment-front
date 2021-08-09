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

            <div class="btns">
                <nuxt-link to="/home" tag="div" class="btn">
                        <BackButton :btn="{'word': '戻る'}"/>
                </nuxt-link>

                <div class="btn">
                    <ProgressButton :btn="{'word': '保存', 'show': false, 'func': 'fixLab', 'to': '/home'}"/>
                </div>
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
            'labInfos'
        ]),
    },
    data() {
        return {
            section: {
                num: '1・修正',
                show: true,
                fixShow: false,
                suuplement: "研究室配属に関する希望を調査をします。"
            },
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

.btns {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
    margin: 30px;
}

.btn {
    display: flex;
    margin: 0px 20px;
}
</style>