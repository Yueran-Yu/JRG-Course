<template>
  <div>
    Child2
    <change-theme-button/>
  </div>
</template>

<script>
import MyVue from '../MyVue.js'
import ChangeThemeButton from './ChangeThemeButton.vue'

export default {
  extends: MyVue,
  data() {
    return {name: 'Child2'}
  },
  components: {
    ChangeThemeButton
  }
}
</script>