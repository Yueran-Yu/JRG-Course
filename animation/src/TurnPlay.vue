<template>
  <div id="app">
    <transition name="fade">
      <button v-if="visible">Button</button>

    </transition>
    <hr>
    <button @click="visible = !visible">Click</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
#app {
  //.fade-enter-active, .fade-leave-active {
  //  transition: all 2s;
  //}
  //
  //.fade-enter,  .fade-leave-to  {
  //  opacity: 0;
  //}


  .fade-enter-active{
    animation: spin 1s;
  }

  .fade-leave-active{
    animation: spin 1s reverse;
  }

  @keyframes spin{
    0%{
      transform:rotate(90deg);
    }

    100%{
      transform: rotate(0deg);
    }
  }
}
</style>

