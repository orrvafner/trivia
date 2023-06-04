<template>
    <div>
    <h1 class="title">טריוויה רגועה</h1>
    <div class="subTitle">.סדר שאלות קבוע, אפשר לעבור בין שאלות, רק בשליחת הטריוויה נותן מענה</div>
    <br>
    </div>
    <div v-if="countStage === 0" class="question">
        <div> {{ questions[count].question }} </div>
        <div @click="clickAns(questions[count].ans1)" :class="['ans', questions[count].ans1 === questions[count].marked ? 'marked' : '' ]">1. {{ questions[count].ans1 }}</div>
        <div @click="clickAns(questions[count].ans2)" :class="['ans', questions[count].ans2 === questions[count].marked ? 'marked' : '']">2. {{ questions[count].ans2 }}</div>
        <div @click="clickAns(questions[count].ans3)" :class="['ans', questions[count].ans3 === questions[count].marked ? 'marked' : '']">3. {{ questions[count].ans3 }}</div>
        <div @click="clickAns(questions[count].ans4)" :class="['ans', questions[count].ans4 === questions[count].marked ? 'marked' : '']">4. {{ questions[count].ans4 }}</div>
    </div>
    <button id="next" class="btn" v-if="count < 3 && questions[count].marked !== ''" @click="count++">שאלה הבאה</button>
    <button id="back" class="btn" v-if="count > 0 && countStage === 0 " @click="count--">שאלה אחורה</button>
    <button id="finish-btn" class="btn" v-if="count === 3 && questions[count].marked !== '' && countStage === 0" @click="submitText" >סיימתי!</button>
    <div v-if="countStage === 1" class="feedback-container">
      <div>{{ feedbackSummary }}</div>
      <div class="feedback" v-for="(feedback, index) in feedbacks" :key="index">{{ feedback }}</div>
      <button @click="startOver" id="again" class="btn" v-if="countStage === 1">בא לי שוב!</button>
      <button @click="learn" id="learnMis" class="btn" v-if="countStage === 1">בא לי ללמוד מהטעויות שלי!</button>
    </div>
    <PickQuestion class="pickQues"  v-if="countStage === 2" :questions="questions"></PickQuestion>
 </template>
  
  <script>
import PickQuestion from '@/components/TriviaResults/PickQuestion.vue';


    export default {
    data() {
        return {
            questions: [
                {
                    question: "בת כמה המדינה?",
                    ans1: "76",
                    ans2: "75",
                    ans3: "78",
                    ans4: "74",
                    correctAns: "75",
                    marked: "",
                },
                {
                    question: "איפה בה\"ד 1 ממוקם?",
                    ans1: "אילת",
                    ans2: "חיפה",
                    ans3: "עיר הבה\"דים",
                    ans4: "מצפה רמון",
                    correctAns: "מצפה רמון",
                    marked: "",
                },
                {
                    question: "מה סכום הזוויות במרבוע?",
                    ans1: "180",
                    ans2: "720",
                    ans3: "360",
                    ans4: "100",
                    correctAns: "360",
                    marked: "",
                },
                {
                    question: "איך אומרים \"בלנדר\" בעברית",
                    ans1: "מערבל",
                    ans2: "מטרפה",
                    ans3: "ממחה",
                    ans4: "עירבולון",
                    correctAns: "ממחה",
                    marked: "",
                }
            ],
            count: 0,
            countT: 0,
            countF: 0,
            feedbacks: [],
            feedbackSummary: "",
            countStage : 0,
        };
    },
    methods: {
        clickAns(ans) {
            this.questions[this.count].marked = ans;
        },
        submitText() {
            this.countStage = 1;
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].correctAns === this.questions[i].marked) {
                    this.countT++;
                }
                else {
                    this.countF++;
                    this.feedbacks.push("שאלה מספר " + (i + 1) + " - התשובה שסומנה היא: " + this.questions[i].marked + ", התשובה הנכונה היא: " + this.questions[i].correctAns + ".");
                }
            }
            this.writeFeedbackSummary();
        },
        writeFeedbackSummary() {
            console.log(this.countT);
            switch (this.countT) {
                case (0): {
                    this.feedbackSummary = "לא ענית נכון על אף שאלה, נסו שוב.";
                    break;
                }
                case (1): {
                    this.feedbackSummary = "ענית נכון על שאלה אחת ולא נכון על " + this.countF + " שאלות.";
                    break;
                }
                case (2): {
                    this.feedbackSummary = "ענית נכון על " + this.countT + " שאלות ולא נכון על " + this.countF + " שאלות.";
                    break;
                }
                case (3): {
                    this.feedbackSummary = "ענית נכון על " + this.countT + " שאלות ולא נכון על שאלה אחת.";
                    break;
                }
                default: {
                    this.feedbackSummary = "ענית נכון על כל השאלות כל הכבוד!"; // ענה על כל שהאלות נכון
                    break;
                }
            }
        },
        startOver() {
            this.count = 0;
            for (let i = 0; i < this.questions.length; i++) {
                this.questions[i].marked = "";
            }
            this.countStage = 0;
            this.feedbacks = [];
            this.countT = 0;
            this.countF = 0;
        },
        learn() {
          this.countStage = 2;
        }
    },
    components: { PickQuestion }
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

  .pickQues {
    background-color: #BDE0FE;
    border-radius: 0.2vw;
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

  .marked {
    background-color: #6fafea;
  }
  .btn {
    background-color: #BDE0FE;
    width: fit-content;
    direction: rtl;
    padding: 1vh;
    position: absolute;
    left: 46.5vw;
    margin-top: 2vh;
    cursor: pointer;
    border-radius: 0.4vw;
    font-family: "RobikSub";
}

.btn:hover{
    background-color: #85C4FF;
  }

  #next {
    top: 52vh;
    left: 32vw;
  }

  #back {
    top: 52vh;
    left: 61.3vw;
  }

  #finish-btn {
    top: 59vh;
    left: 48vw;
    font-size: large;
  }

  #again {
    font-size: large;
    margin-top: 3vh;
  }

  #learnMis {
    font-size: large;
    margin-top: 13vh;
    margin-left: -5vw;
  }


  .title {
    font-family: "RobikBold";
  }

  .subTitle {
    font-family: "RobikSub";
  }
  
  .feedback-container {
    text-align: right;
    background-color: #BDE0FE;
    border-radius: 0.2vw;
    margin: 0.5vh;
    padding: 1vw;
    padding-right: 1vw;
    width: fit-content;
    display: inline-block;
    direction: rtl;
    font-family: "RobikReg";
  }

  .feedback {
    margin-top: 1vh;
    padding: 0.5vh;
    border-radius: 0.2vw;
    font-family: "RobikLight";
}


.feedback:hover{
    background-color: #85C4FF;
  } 

    </style>