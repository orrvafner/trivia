<template>
    <div>
    <h1 class="title">טריוויה</h1>
    <div class="subTitle">.נותן חיווי מיידי, אי אפשר לעבור לשאלה הבאה עד שעונים נכון, שאלות מוגרלות באופן רנדומלי</div>
    <br>
    </div>
    <div v-if="!isDone" class="question">
        <!-- <div v-for="ques in questions" class="question"> -->
        <div> {{ questions[index].question }} </div>
        <div @click="checkAns(questions[index].ans1, 1)" :class="['ans', check === 1 && chosen === 1 ? 'right' : '', check === 2 && chosen === 1 ? 'wrong' : '']">1. {{ questions[index].ans1 }}</div>
        <div @click="checkAns(questions[index].ans2, 2)" :class="['ans', check === 1 && chosen === 2 ? 'right' : '', check === 2 && chosen === 2 ? 'wrong' : '']">2. {{ questions[index].ans2 }}</div>
        <div @click="checkAns(questions[index].ans3, 3)" :class="['ans', check === 1 && chosen === 3 ? 'right' : '', check === 2 && chosen === 3 ? 'wrong' : '']">3. {{ questions[index].ans3 }}</div>
        <div @click="checkAns(questions[index].ans4, 4)" :class="['ans', check === 1 && chosen === 4 ? 'right' : '', check === 2 && chosen === 4 ? 'wrong' : '']">4. {{ questions[index].ans4 }}</div>
    </div>
        <div v-if="count <= 3 && check === 1" class="next" @click="nextQuestion">שאלה הבאה</div>
        <div v-if="count === 4 && check === 1" class="next" @click="nextQuestion">סיימתי</div>
    <!-- </div> -->
  </template>
  
  <script>

    export default {
        data() {
            return {
                questions : [
                    { 
                        question : 'בת כמה המדינה?',
                        ans1 : '76',
                        ans2 : '75',
                        ans3 : '78',
                        ans4 : '74',
                        correctAns : '75',
                        appeared : false,
                    },
                    {
                        question : 'איפה בה"ד 1 ממוקם?',
                        ans1 : 'אילת',
                        ans2 : 'חיפה',
                        ans3 : 'עיר הבה"דים',
                        ans4 : 'מצפה רמון',
                        correctAns : 'מצפה רמון',
                        appeared : false,
                    },
                    {
                        question : 'מה סכום הזוויות במרבוע?',
                        ans1 : '180',
                        ans2 : '720',
                        ans3 : '360',
                        ans4 : '100',
                        correctAns : '360',
                        appeared : false,
                    },
                    {
                        question : 'איך אומרים "בלנדר" בעברית',
                        ans1 : 'מערבל',
                        ans2 : 'מטרפה',
                        ans3 : 'ממחה',
                        ans4 : 'עירבולון',
                        correctAns : 'ממחה',
                        appeared : false,
                    }
                ],
                check : 0,
                count : 1,
                chosen : null,
                index : 0,
                isDone : false,
            };
        },
        methods : {
            checkAns (ans, num) {
                this.chosen = num;
                if(ans == this.questions[this.index].correctAns) {
                   this.check = 1;
                } else {
                    this.check =  2;
                }
            },
            nextQuestion () {
                this.check = 0;
                this.count++;
                this.questions[this.index].appeared = true;
                if(this.count <= 4) {
                    while (this.questions[this.index].appeared === true) {
                        this.index = Math.round(Math.random() * 3 + 0);
                     }
                } else {
                    this.isDone = true;
                }

            }
        }, 
        mounted () {
            this.index = Math.round(Math.random() * 3 + 0);
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

  .ans:hover{
    background-color: #85C4FF;
  }

  .wrong {
    background-color: red;
  }

  .wrong:hover {
    background-color: red;
  }

  .right {
    background-color: green;
  }

  .right:hover{
    background-color: green;
  }

  .next {
    background-color: #BDE0FE;
    width: fit-content;
    padding: 1vh;
    display: block;
    position: relative;
    left: 46.5vw;
    margin-top: 2vh;
    cursor: pointer;
    border-radius: 0.4vw;
    font-family: "RobikSub";
}

.next:hover{
    background-color: #85C4FF;
  }

  .title {
    font-family: "RobikBold";
  }

  .subTitle {
    font-family: "RobikSub";
  }
    </style>