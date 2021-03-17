<template>
    <b-container>
        <div class="home">
            <Section :section="section[0]" />
            <ItemCard
                v-for="lab in laboratories"
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

export default {
    name: 'Home',
    components: {
        Section,
        ItemCard,
        QuestionChoice,
    },
    data() {
        // vuexを使う
        return {
            section: [
                {num: 1, show: false, fixShow: true, route: '/lab/fix'},
                {num: 2, show: false, fixShow: true, route: 'graduate/fix'},
            ],
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