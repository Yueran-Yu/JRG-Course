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
  .fade-enter-active, .fade-leave-active {
    transition: all 2s;
  }

  .fade-enter,  .fade-leave-to  {
    opacity: 0;
  }
}
</style>

