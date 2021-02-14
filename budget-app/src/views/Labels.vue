<template>
  <div class="nav-wrapper">
    <div class="content">
      This is the label
      <Nav/>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: "label"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  border:1px solid orange;
  overflow: auto;
  flex-grow: 1;
}
</style>