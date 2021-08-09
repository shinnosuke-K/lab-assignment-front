<template>
    <b-container>
        <div class="section">
            <Section :section="section"/>
            <QuestionChoice :disabled="false" />
            <div class="btns">
                <nuxt-link to="/home" tag="div" class="btn">
                    <BackButton :btn="{'word': '戻る'}"/>
                </nuxt-link>
                <div class="btn">
                    <ProgressButton :btn="{'word': '保存', 'show': false, 'func': 'fixGra', 'to': '/home'}"/>
                </div>
            </div>

        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import QuestionChoice from '@/components/QuestionChoice'
import ProgressButton from '@/components/ProgressButton'
import BackButton from '@/components/BackButton'

export default {
    components: {
        Section,
        QuestionChoice,
        ProgressButton,
        BackButton
    },
    data() {
        // vuexを利用する
        return {
            section: {
                num: '2・修正',
                show: false,
                fixShow: false,
            }
        }
    }
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
    margin: 0px 10px;
}

</style>