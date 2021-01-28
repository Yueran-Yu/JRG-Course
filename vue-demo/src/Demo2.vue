<template>
  <div class="red">
    Here is the inner part of Demo2
    {{ message1 }}
    <hr>
    <button @click="fn">call fn</button>
  </div>
</template>

<script>
export default {
  props: ['message1','fn']
}
</script>

<style scoped>
.red {
  color: green;
  font-weight: bold;
  font-size: large;
  border: 3px solid black;
}
</style>