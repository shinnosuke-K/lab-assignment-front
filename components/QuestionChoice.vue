<template>
    <div>
        <p class="question">Q. 同志社大学大学院理工学研究科情報工学専攻への進学（推薦）を希望しますか？</p>
        <div class="container">
            <ul>
                <li>
                    <input v-model="selected" :disabled="disabled" type="radio" id="f-option" value="1"/>
                    <label for="f-option">希望する</label>
                    <div class="check"></div>
                </li>
                <li>
                    <input v-model="selected" :disabled="disabled" type="radio" id="s-option" value="0" />
                    <label for="s-option">希望しない</label>
                    <div class="check"><div class="inside"></div></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuestionChoice",
    props: ['disabled'],
    data() {
        return {
            selected: 0
        }
    }
};
</script>

<style scoped>
.question {
    font-size: 1.8rem;
    margin-top: 10px;
    padding: 0px 100px;
}

.container{
  display: block;
  position: relative;
  margin: 0px 180px auto;
  height: auto;
  width: 500px;
  padding: 20px;
}


.container ul{
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
}

ul li{
  color: black;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
}

ul li input[type=radio]{
  position: absolute;
  visibility: hidden;
}

ul li label{
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.8em;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
}

ul li:hover label{
  color: #AAAAAA;
}

ul li .check{
  display: block;
  position: absolute;
  border: 5px solid grey;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 30px;
  left: 20px;
  z-index: 5;
  transition: border .25s linear;
  -webkit-transition: border .25s linear;
}

ul li:hover .check {
  border: 5px solid #AAAAAA;
}

ul li .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 5px;
  left: 5px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

input[type=radio]:checked ~ .check {
  border: 5px solid black;
}

input[type=radio]:checked ~ .check::before{
  background: black;
}

input[type=radio]:checked ~ label{
  color: black;
}

*, *::before, *::after {
    box-sizing: content-box;
}
</style>