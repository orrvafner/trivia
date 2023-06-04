<template>
  <!-- רשימת ציוד -->
  <h1 class="title">רשימת ציוד</h1>
  <!-- מזווה -->
  <div id="page"> 
    <div id="div1" class="list-div"> 
      <Box :headline = "headline1" :items = "suitcase" ></Box>
    </div>
    <!-- תיק גב -->
    <div id="div2" class="list-div">
      <Box :headline = "headline2" :items = "backpack"></Box>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from '/src/components/Box.vue';

export default {
  name: 'HomeView',
  components: {
    Box
  },
  data () {
    return {
      suitcase: [{name: "נעלי ספורט", clickOn: false},
      {name: "תחתונים", clickOn: false},
      {name: "גרבי צבא", clickOn: false},
      {name: "גרבי ספורט", clickOn: false},
      {name: "טייצים", clickOn: false},
      {name: "חולצות ספורט", clickOn: false},
      {name: "חולצות צבא", clickOn: false},
      {name: "'מדי ב", clickOn: false},
      {name: "שק כביסה", clickOn: false},
      {name: "מגבות לגוף", clickOn: false},
      {name: "מגבת פנים", clickOn: false}],
      backpack : [{name: "אוזניות", clickOn: false},
      {name: "תה ירוק", clickOn: false},
      {name: "מים", clickOn: false},
      {name: "ארוחת בוקר", clickOn: false},
      {name: "ארנק - כרטיס אשראי", clickOn: false},
      {name: "מחשב", clickOn: false},
      {name: "מטען למחשב", clickOn: false},
      {name: "מטען לשעון", clickOn: false}
      ], 
      headline1 : "מזוודה",
      headline2 : "תיק גב",
    };
  }, 
};
</script>

<style scoped>
.list-div {
  position: absolute;
  width: 20vw;
  height: fit-content;
  padding: 1vw;
  padding-bottom: 0.5vw;
  background-color: #BDE0FE;
  border-radius: 0.5vw;
}

#div1 {
  top: 20vh;
  right: 20vw;
}

#div2 {
  top: 20vh;
  left: 20vw;
}

.title {
  font-family: "RobikBold";
  position: relative;
  top: -7vh;
}

</style>