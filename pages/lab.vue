<template>
    <b-container>
        <div class="section">
            <Section :section="section" />
            <Precautions v-if="section.show" :people="people" />
            <Item
                v-for="lab in laboratories"
                :key="lab.name"
                :lab="lab"
            />
        </div>
    </b-container>
</template>

<script>
import Section from '@/components/Section'
import Precautions from '@/components/Precautions'
import Item from '@/components/Item'


export default {
    components: {
        Section,
        Precautions,
        Item
    },
    data() {
        // vuexを利用する
        return {
            section: {
                num: 1,
                show: true,
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
    }
}
</script>

<style scoped>
.section {
    border: solid 1px black;
    margin: 0% 100px;
}
</style>