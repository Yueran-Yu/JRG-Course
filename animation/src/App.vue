<template>
  <div id="app">
    <div id="demo">
      <button v-on:click="visible = !visible">
        Toggle
      </button>
      <transition name="fading">
        <p v-if="visible">hello</p>
      </transition>
    </div>


    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p class="de" v-if="show">hello</p>
      </transition>
    </div>


    <div id="example-2">
      <button @click="show2 = !show2">Toggle show</button>
      <transition :duration="10000" enter-active-class="animate__animated animate__backInRight"
                  leave-active-class="animate__animated animate__bounceOutLeft">
        <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
          lacinia
          diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
    <div id="example-4">
      <transition name="fade" mode="in-out">
        <button key="on" v-if="status==='off'" @click="status='on'">ON</button>
        <button key="off" v-else @click="status = `off`">OFF</button>
      </transition>
    </div>

    <div id="list-demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="div">
    <div v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </div>
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      show: true,
      show2: true,
      status: 'on',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style lang="scss">
#app {
  .fading-enter-active, .fading-leave-active {
    transition: all 1s;
  }

  .fading-enter, .fading-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
    width: 60px;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 1s ease;
  }

  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.9, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(20px);
    opacity: 0;
  }
  .de {
    background: #ffac3e;
  }

  .bounce-enter-active {
    animation: bounce-in 1s;
  }

  .bounce-leave-active {
    animation: bounce-in 1s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter {
    opacity: 0;
    background: red;
    transform: translateX(100px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  #example-4 {
    position: relative;
    padding: 100px;
  }
  .list-item {
    margin-right: 10px;
    border: 1px solid red;
    background: #ff9000;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateX(100%);
    background: #ffe1bc;
  }
}
</style>
