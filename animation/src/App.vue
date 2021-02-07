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
      <transition name="bounce">
        <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia
          diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {visible: true, show: true, show2:true}
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
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
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
}
</style>
