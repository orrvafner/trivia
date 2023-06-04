<template>
  <!-- משימות -->
  <h1 class="title">משימות</h1>
  <div>
    <input type="text" v-model="toDo" placeholder="הכניסי משימה" class="tasks" @keypress.enter = 'enterToArray'>
   
    <!-- להעביר לקומפוננטה נוספת -->
    <div v-if="showError" class="error">יש להכניס ערך</div> 
    <transition-group tag="ul" name="frame" appear mode="out-in" class="list-div" v-if="toDos.length>0" >
        <li v-for="(todo, index) in toDos" :key="index" class="box" @click="handleClick(index)">
           {{ todo }}
        </li>
    </transition-group>
    <transition name="finish" appear class="finish" mode="out-in" v-else>
      <div>
      !!
      סיימת את המשימות
    </div>
    </transition>

  </div>
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      toDo : '',
      toDos : ["טיימר מוכן", "טריוויה עם חיווי מיידי מוכן", "לעשות את הטריוויה הרגועה"],
      showError : false,
      headline : '',
    };
  }, 
  methods : {
    enterToArray () {
      this.toDo = this.toDo.trim(); // trim - פעולה שעובדת על מחרוזות ומסירה את כל הרווחים בתחילת המחרוזת
      if(this.toDo === '') {
        this.showError = true;
        setTimeout (() => {
          this.showError = false;
        }, 1500);
      } else {
        this.toDos.push(this.toDo);
        this.toDo = '';
      }
    },
    handleClick (index) {
      this.toDos.splice(index,1);
    }
  },

};
</script>

<style scoped>

.tasks {
  width: 20vw;
  text-align: right;
  height: 3vh;
  display: block;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 0.3vw;
  background-color: #D7ECFE;
  height: 5.5vh;
  position: absolute;
  top: 27vh;
  left: 40vw;
  font-family: "RobikReg";
}

.list-div {
  height: fit-content;
  position: absolute;
  top: 31vh;
  left: 37vw;
  /* transform: translate(36.5vw, 10vh); */
  padding: 2vw;
  padding-top: 0vh;
  list-style: none;
  font-family: "RobikReg";
}

.box {
    text-align: right;
    background-color: #D7ECFE;
    border-radius: 0.3vw;
    margin: 1vh;
    padding: 0.5vw;
    padding-right: 1vw;
    width: 21vw;
    cursor: pointer;
    display: block;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

.box:hover{
    background-color: white;
    height: 6vh;
    padding: 1.5vh;
}

.finish-enter-from,

.finish-leave-to {
  opacity: 0;
}

.finish-enter-to,
.finish-leave-from {
  opacity: 1;
}

.finish-enter-active,

.finish-leave-active{
  transition: opacity 2s ease-in;
}

.frame-enter-from,
.frame-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.frame-enter-to,
.frame-leave-from {
  opacity: 0;
  transform: scale(1);
}

.frame-enter-active{
  transition: all 0.5s ease;
}
.frame-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.frame-move {
  transition: all 0.5 ease;
}


.finish {
  margin: 1vh;
  position: absolute;
  top: 33vh;
  left: 45vw;
  font-family: "RobikSub";
}

.error {
  margin: 1vh;
  position: absolute;
  top: 22.5vh;
  left: 46vw;
  font-family: "RobikSub";
}

.title{
  font-family: "RobikBold";
}

</style>