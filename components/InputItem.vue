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
    props: ['labName','prof', 'index', 'show'],
    computed: {
        point: {
            get() {
                return this.prof.point
            }
        }
    },

    methods: {
        increment() {
            // const inputPoint = parseInt(this.prof.point) - (100 - this.$store.getters.people.num + 2)
            // if (inputPoint < 0) {
            //     this.prof.point = String(parseInt(this.prof.point) + 1);
            // } else if (this.prof.point === "") {
            //     this.prof.point = "1"
            // }
            console.log(this.labName)
        },
        // decrement() {
            // if (Number(this.prof.point) >= 1) {
            //     this.prof.point = String(parseInt(this.prof.point) - 1);
            // } else if (this.prof.point === "") {
            //     this.prof.point = "0"
            // }
        // }
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