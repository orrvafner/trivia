<template>
    <div class="question">
        <div> {{ questions[index].question }} </div>
        <div :class="['ans', questions[index].ans1 === questions[index].correctAns ? 'right' : '' , questions[index].ans1 === questions[index].marked && questions[index].ans1 !== questions[index].correctAns ? 'wrong' : '' ]">1. {{ questions[index].ans1 }}</div>
        <div :class="['ans', questions[index].ans2 === questions[index].correctAns ? 'right' : '' , questions[index].ans2 === questions[index].marked && questions[index].ans2 !== questions[index].correctAns ? 'wrong' : '' ]">2. {{ questions[index].ans2 }}</div>
        <div :class="['ans', questions[index].ans3 === questions[index].correctAns ? 'right' : '' , questions[index].ans3 === questions[index].marked && questions[index].ans3 !== questions[index].correctAns ? 'wrong' : '' ]">3. {{ questions[index].ans3 }}</div>
        <div :class="['ans', questions[index].ans4 === questions[index].correctAns ? 'right' : '' , questions[index].ans4 === questions[index].marked && questions[index].ans4 !== questions[index].correctAns ? 'wrong' : '' ]">4. {{ questions[index].ans4 }}</div>
    </div>
    <button @click="back">חזור</button>
</template>


<script>
export default {
    props : ['questions', 'number'],
    data () {
        return {
            index: Number(this.number),
        };
    },
    methods : {
        back() {
            this.$emit('back');
        }

    },
    mounted () {
        // console.log(typeof this.index);
    }
}; 
</script>

<style scoped>
  .question {
    text-align: right;
    background-color: #BDE0FE;
    border-radius: 0.2vw;
    margin: 0.5vh;
    padding: 0.3vw;
    padding-right: 1vw;
    width: 20vw;
    display: inline-block;
    direction: rtl;
    font-family: "RobikReg";
  }

  
  .ans {
    margin-top: 1vh;
    cursor: pointer;
    padding: 0.5vh;
    border-radius: 0.2vw;
    font-family: "RobikLight";
}

.right {
    background-color: green;
}

.wrong{
    background-color: red;
}
</style>