<template>
  <div>
    <button @click="changeThemeColor">
      Change Theme: {{ themeName }}
    </button>
    <button @click="changeFontSize('big')">Big Size Font</button>
    <button @click="changeFontSize('normal')">Normal Size Font</button>
    <button @click="changeFontSize('small')">Small Size Font</button>
  </div>
</template>

<script>
export default {
  inject: ['themeName', 'changeTheme', 'changeFontSize'],
  methods: {
    changeThemeColor() {
      this.changeTheme()
    }
  }
}
</script>