<template>
    <b-container>
        <div class="section">
            <Section :section="section" />
            <Precautions v-if="section.show" :people="people" />
            <ItemCard
                v-for="lab in laboratories"
                :key="lab.name"
                :lab="lab"
                :num="people.num"
                :show="true"
            />

            <div class="btns">
                <nuxt-link to="/home" tag="div" class="btn">
                        <BackButton :btn="{'word': '戻る'}"/>
                </nuxt-link>

                <nuxt-link  @click.native="show" to="/home" class="btn">
                    <ProgressButton :btn="{'word': '保存', 'show': false}"/>
                </nuxt-link>
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

export default {
    components: {
        Section,
        Precautions,
        ItemCard,
        ProgressButton,
        BackButton
    },
    data() {
        // vuexを利用する
        return {
            section: {
                num: '1・修正',
                show: true,
                fixShow: false,
                suuplement: "研究室配属に関する希望を調査をします。"
            },
            people : {
                num: 11,
            },
            laboratories: [
                  {
                    name: "応用メディア情報研究室",
                    menbers: [
                        {
                            professor: "大久保",
                            point: 0,
                        },
                        {
                            professor: "土屋",
                            point: 0,
                        },
                        {
                            professor: "井本",
                            point: 0,
                        }
                    ]
                },
                {
                    name: "ネットワーク情報システム研究室",
                    menbers: [
                        {
                            professor: "佐藤",
                            point: 0,
                        },
                        {
                            professor: "小板",
                            point: 0,
                        }
                    ]
                },
                  {
                    name: "知識メカトロ情報システム研究室",
                    menbers: [
                        {
                            professor: "高橋",
                            point: 0,
                        },
                    ]
                }
            ]
        }
    },
    methods: {
        show() {
            console.log("lab:")
            console.log(this.laboratories)
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
    display: flex;
    margin: 0px 20px;
}
</style>