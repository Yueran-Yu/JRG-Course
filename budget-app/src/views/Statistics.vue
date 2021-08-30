<template>
  <div>
    <Layout>
       This is the Statistics
    </Layout>
    </div>
</template>

<script lang="ts">
export default {
  name: "Statistics"
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
  border: 1px solid orange;
  overflow: auto;
  flex-grow: 1;
}
</style>