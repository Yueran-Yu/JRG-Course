<template>
  <div class="child">
    {{ money }}
    <button @click="$emit('update:money', money-100)">
      <span v-x v-y>Spend Money</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["money"],
  directives:{
    'y':{
      inserted(el){
        el.addEventListener('click', ()=>{
          console.log('You only can use the directive Y in current component.')})
      }
    }
  }
}
</script>

<style>
.child {
  border: 3px solid green;
}
</style>