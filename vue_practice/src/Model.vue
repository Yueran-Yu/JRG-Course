<template>
  <div id="app">
    {{ user }}
    <hr>
    Login
    <form @submit.prevent="onSubmit">
      <label>
        <span>User Name</span>
   <!--  <MyInput v-model="user.username"/>-->
        <MyInput :value="user.username" @input="user.username = $event"/>

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
import MyInput from "@/MyInput";
export default {
  components:{
    MyInput
  },
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