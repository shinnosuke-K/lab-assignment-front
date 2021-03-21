<template>
    <div class="container">
        <div class="contents">
            <img src="@/static/img/red-check-mark.png" class="red-check-mark">
            <p class="text">
            配属希望教員の優先度をポイントで入力してください。<br>
            合計100ポイントとし、教員に対してのポイントの割り当ては自由。<br>
            ただし、{{ num - 1 }}名以上（{{ num }}名中）の教員に対してのポイントを割り当ててください。<br>
            すべての教員に割り当てたポイントの合計が100ポイントを超えてはいけません。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Precoutions',
    computed: {
        num: {
            get() {
                return this.$store.getters.people.num
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center;/* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.contents {
    display: flex;
    background: #FDF8E5;
    border-radius: 20px;
    margin: 20px 0px;
    padding: 0px 20px;
}

.red-check-mark {
    height: 40px;
    margin-right: 15px;
    margin-top: 15px;
}

.text {
    font-size: 1.5rem;
    margin: 30px 0px;
}

</style>