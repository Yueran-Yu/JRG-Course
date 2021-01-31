<template>
  <div class="child">
    {{ money }}
    <button @click="$emit('update:money', money-100)">
      <span>Spend Money</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["money"]
}
</script>

<style>
.child {
  border: 3px solid green;
}
</style>