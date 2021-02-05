<template>
<div id="app">
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>
  <p>
    <button @click="message =`frank`">Set Message To 2021</button>
  </p>
</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: 'hi'
    }
  },
  components: {}
}
</script>



