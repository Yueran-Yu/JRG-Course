<template>
  <div class="nav-wrapper">
    <div class="content">
      Here is the Money Page
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
}
</script>

<style lang="scss" scoped>


.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  background-color: #9c9cdb;
  flex-grow: 1;
}
</style>