<template>
  <div>
    <Layout>
      <div class="tags">
        <ul class="current">
          <li>Residence</li>
          <li>Food</li>
          <li>Wear</li>
          <li>Transportation</li>
        </ul>
        <div class="new">
          <button>New</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span>notes</span>
          <input type="text"/>
        </label>
      </div>
      <div>
        <ul>
          <li class="selected">Expense</li>
          <li>Income</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Delete</button>
          <button>---</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>Clear</button>
          <button>---</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money"
}
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";

p {
  color: $color-highlight;
}
</style>