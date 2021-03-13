<template>
    <div class="container">
        <div class="contents">
           <p class="lab">{{ lab.name }}</p>
            <InputItem
                v-for="item in lab.menbers"
                :key="item.professor"
                :item="item"
                :num='num'
            />
        </div>
    </div>
</template>

<script>
import InputItem from "@/components/InputItem";

export default {
    name: "ItemCard",
    components: {
        InputItem,
    },
    // vuexにする
    props: ["lab", 'num'],
};
</script>

<style scoped>
.container {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center; /* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
}

.contents {
    border: solid 1px gray;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 0px 20px;
    width: 550px;
}

.lab {
    margin-top: 20px;
    font-size: 1.5rem;
}

</style>