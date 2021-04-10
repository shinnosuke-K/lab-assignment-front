<template>
    <div class="container">
        <b-container>
            <b-row align-v="center">
                <p class="frame text professor">{{ this.prof.name }}</p>
                <form class="input">
                    <img v-if="show" @click="decrement()" class="frame icon" src="@/static/img/minux-icon.png" >
                    <input
                        class="frame text point"
                        type="text"
                        inputmode="numeric"
                        pattern="\d*"
                        v-model="point">
                    <img v-if="show" @click="increment()" class="frame icon" src="@/static/img/plus-icon.png" >
                </form>
            </b-row>
    </b-container>
    </div>
</template>

<script>
export default {
    name: 'InputItem',
    props: ['labName','prof', 'show'],
    computed: {
        point: {
            get() {
                return this.prof.point
            },
        }
    },

    methods: {
        increment() {
            this.$store.dispatch('calcScore').then((score) => {
                if (score < 100) {
                    this.$store.commit('increment', {labName: this.labName, name: this.prof.name})
                } else if (this.prof.point === "") {
                    this.$store.commit('setPoint', {labName: this.labName, name: this.prof.name, point: 1})
                }
            })
        },
        decrement() {
            if (this.prof.point >= 1) {
                this.$store.commit('decrement', {labName: this.labName, name: this.prof.name})
            } else if (this.prof.point === "") {
                this.$store.commit('setPoint', {labName: this.labName, name: this.prof.name, point: 0})
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-profs: center; /* flexアイxテムの左右中央を指定する */
}

.prof {
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
    align-profs: center; /* flexアイxテムの左右中央を指定する */
}

.professor {
    width: 150px;
    margin-right: 15px;
}

.point {
    width: 100px;
    margin-bottom: 10px;
}

.input {
    display: flex;
}

.icon {
    margin: 0px 10px;
    padding: 5px;
}

</style>