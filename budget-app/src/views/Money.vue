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

.tags {
  color: $color-tag;
  padding: 16px;
  $he: 22px;

  .current {
    display: flex;

    li {
      background: $color-background;
      height: $he;
      border-radius: $he/2;
      padding: 0 8px;
      margin-right: 10px;
      font-size: 0.7rem;
      font-weight: bold;
      line-height: $he;
    }
  }

  .new {
    padding-top: 16px;

    button {
      //color: $font-button;
      color: #fda3a3;
      background-color:transparent;
      padding:0 4px;
      outline: none;
      border:none;
      border-bottom: 2px solid $color-background;

    }
  }
}
</style>