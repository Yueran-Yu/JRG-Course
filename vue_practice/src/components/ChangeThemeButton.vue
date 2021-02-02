<template>
  <div>
    <button @click="changeThemeColor">
      Change Theme: {{themeName}}
    </button>
    <button>Big Size Font</button>
    <button>Normal Size Font</button>
    <button>Small Size Font</button>
  </div>
</template>

<script>
export default{
  inject: ['themeName', 'changeTheme'],
  methods:{
    changeThemeColor(){
      this.changeTheme()
    }
  }
}
</script>