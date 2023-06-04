<template>
    <h1 class="title">טיימר</h1>
    <div class="start" @click="startTime">התחל ספירה לאחור</div>
    <div class="subTitle">הזמן שנותר:</div>
    <div class="time">{{time}}</div>
</template>

<script>
import { throwStatement } from '@babel/types';


export default {
    data () {
        return {
            min : 1,
            sec: 0,
            showSec: '',
            showMin: '',
            time : '',
            timeInterval: '',
        };
    },
    methods : {
        startTime () {
            this.timeInterval = setInterval (this.changeTime, 1000);
        },
        changeTime() {
            if(this.sec !== 0) {
                this.sec--;
            } else {
                if(this.min > 0 ) {
                    this.min--;
                    this.sec = 59;
                } else {
                    clearInterval(this.timeInterval);
                }
            }
            if(this.sec < 10) {
                this.showSec = '0'+this.sec;
            } else {
                this.showSec = this.sec;
            }
            if(this.min < 10) {
                this.showMin = '0'+this.min;
            } else {
                this.showMin = this.min;
            }
            this.time = this.showMin+':'+this.showSec;
        }
    },
    mounted() {
        this.time = '0'+this.min+':0'+this.sec;
    }
};
</script>

<style scoped>
.title {
  font-family: "RobikBold";
  position: relative;
  top: -7vh;
}

.start {
    background-color: #BDE0FE;
    width: fit-content;
    padding: 1vh;
    display: block;
    position: relative;
    left: 44vw;
    top: -9vh;
    cursor: pointer;
    border-radius: 0.4vw;
    font-family: "RobikSub";
}

.time {
    font-family: "RobikReg";
    position: relative;
    top: -5vh;
}
.subTitle {
    direction: rtl;
    font-family: "RobikSub";
    position: relative;
    top: -7vh;
    left: 0.3vw;
  }

</style>