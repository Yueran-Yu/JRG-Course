<template>
  <div class="red">
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  created() {
    console.log('=== This object has been stored in the memory.')
  },
  mounted() {
    console.log("=== This has been mounted to the page.")
  },
  updated() {
    console.log("Updated")
    console.log(this.n)
  },
  destroyed() {
    console.log("destroyed")
  },
  methods: {
    add() {
      this.n += 1
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>