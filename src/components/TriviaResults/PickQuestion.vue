<template>
    <div v-if="!showQues" class="container">
        <button  v-for="btn in questions.length" :class="['btn', colors[btn-1] ? 'right' : 'wrong']" @click="pickedQues(btn)">{{btn}} </button>
    </div>
    <div  v-else>
        <ShowQuestion :questions="questions" :number="number" @back="showQues = false"></ShowQuestion>
    </div>
</template>


<script>

import ShowQuestion from '@/components/TriviaResults/ShowQuestion.vue';

export default {
    props : ['questions'],
    components: { ShowQuestion },
    data () {
        return {
            colors : [],
            showQues: false,
            number: '',
        };
    },
    methods : {
        pickedQues(num) {
            this.number = num-1;
            console.log(typeof this.number);
            this.showQues = true;
        }
    },
    mounted () {
        for (let i = 0 ; i < this.questions.length; i++) {
            if(this.questions[i].correctAns === this.questions[i].marked) {
                this.colors.push(true);
            } else {
                this.colors.push(false);
            }
        }
        console.log(this.colors);
    }
}; 
</script>

<style scoped>
.container {
    direction: rtl;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 15vw;
}

.btn {
    position: relative;
    margin: 1vw;
    width: 5vw;
    height: 5vh;
    cursor: pointer;
}

.wrong {
    background-color: red;
}

.right {
    background-color: green;
}



</style>