<template>
  <div id="app" :class="`app theme-${themeName} fontSize=${fontSizeName}`">
    <Child1 v-if="child1Visible"/>
    <button @click="child1Visible = false">X</button>
    <Child2 v-if="child2Visible"/>
    <button @click="child2Visible = false">X</button>
    <Child3 v-if="child3Visible"/>
    <button @click="child3Visible = false">X</button>
    <Child4 v-if="child4Visible"/>
    <button @click="child4Visible = false">X</button>
    <Child5 v-if="child5Visible"/>
    <button @click="child5Visible = false">X</button>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
import Child3 from './components/Child3.vue'
import Child4 from './components/Child4.vue'
import Child5 from './components/Child5.vue'

export default {
  name: 'App',
  provide() {
    return {
      themeName: this.themeName,
      changeTheme: this.changeTheme,
      changeFontSize: this.changeFontSize
    }
  },
  data() {
    return {
      themeName: "blue", // red
      fontSizeName: "normal",  // big, small
      child1Visible: true,
      child2Visible: true,
      child3Visible: true,
      child4Visible: true,
      child5Visible: true
    }
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5
  },
  methods: {
    changeTheme() {
      if (this.themeName === 'blue') {
        this.themeName = 'red'
      } else {
        this.themeName = 'blue'
      }
    },
    changeFontSize(name) {
      if (["normal", "big", "small"].indexOf(name) >= 0) {
        this.fontSizeName = name
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app.theme-blue button {
  background: blue;
  color: white;
}

.app.theme-blue {
  color: #00008b;
}

.app.theme-red button {
  background: red;
  color: white;
}

.app.theme-red {
  color: darkred;
}

.app button{
  font-size:inherit;
}
.app.fontSize-normal {
  font-size: 16px;
}

.app.fontSize-big {
  font-size: 36px;
}

.app.fontSize-small {
  font-size: 12px;
}
</style>
