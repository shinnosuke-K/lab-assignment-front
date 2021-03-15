<template>
    <div class="content">
        <div>
            <p class="msg">調査は以上となります。</p>
            <p class="supplement">
                期間内であれば、修正が可能です。 <br>
                ご不明点がありましたら、e-class経由でご連絡ください。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LastMessage'
}
</script>

<style>

.content {
    display: flex; /* 要素をFlexコンテナとして定義する */
    justify-content: center;/* flexアイテムの上下中央を指定する */
    align-items: center; /* flexアイxテムの左右中央を指定する */
    text-align: center;
}

.msg {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 20px auto;
}

.supplement {
    font-size: 2rem;
    margin: 20px auto;
    padding: 30px 70px;
    border-radius: 20px;
    background: #FDF8E5;
}
</style>