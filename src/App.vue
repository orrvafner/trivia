<template>
  <nav>
    <router-link to="/">רשימת ציוד</router-link> |
    <router-link to="/about">משימות</router-link> |
    <router-link to="/trivia">טריוויה</router-link> |
    <router-link to="/trivia1">טריוויה תחרותית</router-link> |
    <router-link to="/trivia2">טריוויה רגועה</router-link> |
    <router-link to="timer">טיימר</router-link>
  </nav>
  <router-view/>
</template>

<style>

@font-face {
  font-family: "RobikReg";
  src: local("RobikReg"),
   url(./assets/font/Rubik/Rubik-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "RobikBold";
  src: local("RobikBold"),
   url(./assets/font/Rubik/Rubik-Black.ttf) format("truetype");
}

@font-face {
  font-family: "RobikSub";
  src: local("RobikSub"),
   url(./assets/font/Rubik/Rubik-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "RobikLight";
  src: local("RobikLight"),
   url(./assets/font/Rubik/Rubik-Light.ttf) format("truetype");
}

body, html {
  background-color: #A2D2FF;
  user-select: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow: hidden;
}

nav {
  padding: 30px;
  font-family: "RobikLight";
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #4294DC;
}
</style>
