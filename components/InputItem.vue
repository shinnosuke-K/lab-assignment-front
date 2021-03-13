<template>
    <div class="container">
        <b-container>
            <b-row align-v="center">
                <p class="frame text professor">{{ item.professor }}</p>
                <form class="input">
                    <img @click="decrement" class="frame icon" src="@/static/img/minux-icon.png" >
                    <input
                        class="frame text point"
                        type="text"
                        inputmode="numeric"
                        pattern="\d*"
                        v-model="item.point">
                    <img @click="increment" class="frame icon" src="@/static/img/plus-icon.png" >
                </form>
            </b-row>
    </b-container>
    </div>


</template>

<script>
export default {
    name: 'InputItem',
    // vuexにする
    props: ['item', 'num'],

    methods: {
        increment() {
            const inputPoint = parseInt(this.item.point) - (100 - this.num + 2)
            if (inputPoint < 0) {
                this.item.point = parseInt(this.item.point) + 1;
            } else if (this.item.point === "") {
                this.item.point = 1
            }
        },
        decrement() {
            if (Number(this.item.point) >= 1) {
                this.item.point = Number(this.item.point) - 1;
            } else if (this.item.point === "") {
                this.item.point = 0
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.item {
    display: flex;
}

.frame {
    border: solid 1px gray;
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
}

.frame.text {
    font-size: 1.8rem;
    text-align: center;
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.professor {
    width: 150px;
    margin-right: 15px;
}

.point {
    width: 100px
}

.input {
    display: flex;
}

.icon {
    margin: 0px 10px;
    padding: 5px;
}

</style>