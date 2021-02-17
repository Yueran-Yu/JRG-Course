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
          <span class="name">Notes</span>
          <input type="text" placeholder="Please enter notes here"/>
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">Expense</li>
          <li class="" >Income</li>
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

.types {
  background-color: $color-highlight;
  display: flex;
  font-size: 18px;

  li {
    width: 50%;
    text-align: center;
    height: 45px;
    font-weight: bolder;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      border-bottom: 4px solid $color-highlight;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width:100%;
      height:2px;
      background: white;
    }
  }
}

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

.tags {
  color: $color-tag;
  padding: 16px;
  $he: 22px;

  .current {
    display: flex;

    li {
      background: $color-highlight;
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
      background-color: transparent;
      padding: 0 4px;
      outline: none;
      border: none;
      border-bottom: 2px solid $color-background;

    }
  }
}
</style>