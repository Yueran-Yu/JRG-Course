<template>
  <div id="app">
    {{ user }}
    <hr>
    Login
    <form @submit.prevent="onSubmit">
      <label>
        <span>User Name</span>
        <input type="text" :value="user.username" @input="user.username = $event.target.value"/>
      </label>
      <br>
      <label>
        <span>Password</span>
        <input type="password" v-model="user.password"/>
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    }
  }
}
</script>