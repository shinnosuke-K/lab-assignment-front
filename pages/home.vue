<template>
    <div class="container">
        <Section :section="section[0]" />
        <Section :section="section[1]"/>
    </div>
</template>

<script>
import Section from '@/components/Section'

export default {
    name: 'Home',
    components: {
        Section,
    },
    data() {
        // vuexを使う
        return {
            section: [
                {num: 1, show: false, fixShow: true, route: '/lab'},
                {num: 2, show: false, fixShow: true, route: 'graduate'},
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
            ]
        }
    }
}
</script>

<style>

</style>