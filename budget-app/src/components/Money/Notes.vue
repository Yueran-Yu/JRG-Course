<template>
  <div>
    <label class="notes">
      <span class="name">Notes</span>
      <input type="text" placeholder="Please enter notes here"/>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  background: #fff7fa;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    color: #ae003d;
    font-size: 14px;
  }

  input {
    margin-left: 10px;
    height: 50px;
    border: none;
    flex-grow: 1;
    background: transparent;


  }

  input::placeholder {
    font-style: italic;
    font-size: 13px;
    color: #ababab;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
}
</style>