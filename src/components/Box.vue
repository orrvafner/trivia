<template>
    <div>
    <h2 class="title">{{ headline }}</h2>
      <ul class="list">
        <li v-for="item in items" :key="item" class="box" :class="{ pressed: item.clickOn}" @click="item.clickOn = !item.clickOn">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
        name: 'Box',
        props : ['headline', 'items'],
        data() {
            return {

            };
        },
    };

  </script>
  
  <style scoped>
    .list {
     list-style: none;
        padding: 0.1vh;
    }

    .box {
    text-align: right;
    background-color: #D7ECFE;
    border-radius: 0.2vw;
    margin: 0.5vh;
    padding: 0.3vw;
    padding-right: 1vw;
    cursor: pointer;
    font-family: "RobikReg";
    }

    .box:hover{
    background-color: white;
    height: 4vh;
    padding-top: 1vh;
    }

    .pressed {
    text-decoration: line-through;
    }

    .title{
      font-family: "RobikSub";
    }
    </style>