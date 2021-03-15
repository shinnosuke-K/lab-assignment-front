<template>
    <b-container>
        <div class="section">
            <div class="success-mark">
                <img src="@/static/img/green-check-mark.png" alt="">
            </div>
            <LastMessage />
            <nuxt-link to="/home" tag="div" class="btn">
                <ProgressButton :btn="{'word': 'ホームへ', 'show': false}" />
            </nuxt-link>
        </div>
    </b-container>
</template>

<script>
import LastMessage from '@/components/LastMessage'
import ProgressButton from '@/components/ProgressButton'

export default {
    componments: {
        LastMessage,
        ProgressButton
    },
    methods: {
        close() {
            window.close()
        }
    }
}
</script>

<style scoped>
.section {
    border: solid 1px black;
    margin: 0% 100px;
}

.success-mark {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center;/* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
    margin-top: 120px;
    margin-bottom: 40px;
}

img {
    width: 80px;
}

.btn {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
    margin: 30px auto;
}
</style>