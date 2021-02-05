<template>
  <div id="app">

    <!--    <input v-model="message" placeholder="edit me">-->
    <!--    <p>Message is: {{ message }}</p>-->
    <!--    <p>-->
    <!--      <button @click="message =`set message to 2021`">Set Message To 2021</button>-->
    <!--    </p>-->

    <!--    <hr>-->
    <!--    <span>Multiline message is:</span>-->
    <!--    <p style="white-space: pre-line;">{{ msg2 }}</p>-->
    <!--    <br>-->
    <!--    <textarea v-model="msg2" placeholder="add multiple lines"></textarea>-->
    <!--    <hr>-->

    <!--    <p>Interest</p>-->
    <!--    <label>-->
    <!--      <input type="checkbox" value="sing" v-model="x">-->
    <!--      <span>Sing</span>-->
    <!--    </label>-->
    <!--    <label>-->
    <!--      <input type="checkbox" value="dance" v-model="x">-->
    <!--      <span>Dance</span>-->
    <!--    </label>-->
    <!--    <label>-->
    <!--      <input type="checkbox" value="cosplay" v-model="x">-->
    <!--      <span>CosPlay</span>-->
    <!--    </label>-->
    <!--    <label>-->
    <!--      <input type="checkbox" value="running" v-model="x">-->
    <!--      <span>Running</span>-->
    <!--    </label>-->
    <!--    <p>Result: {{ x }}</p>-->

    <!--    <hr>-->
    <!--    <label>-->
    <!--      <input name="group1" type="radio" value="One" v-model="pick">-->
    <!--      One-->
    <!--    </label>-->
    <!--    <br>-->
    <!--    <label>-->
    <!--      <input name="group1" type="radio" value="Two" v-model="pick">-->
    <!--      Two-->
    <!--    </label>-->
    <!--    <br>-->
    <!--    <label>-->
    <!--      <input name="group1" type="radio" value="Three" v-model="pick">-->
    <!--      Three-->
    <!--    </label>-->
    <!--    <br>-->
    <!--    <p>Picked: {{ pick }}</p>-->
    <!--    <hr>-->
    <!--    <select multiple v-model="selected">-->
    <!--      <option disabled value="">Please select one</option>-->
    <!--      <option v-for="item in arr" :value="item.value" :key="item.value">{{item.text}}</option>-->

    <!--    </select>-->
    <!--    <p>Selected: {{ selected }}</p>-->
    <!--    <hr>-->

    <form @submit.prevent="onSubmit">
      <label>
        <span>User Name</span>
        <input type="text" v-model="user.username"/>
      </label>
      <br>
      <label>
        <span>Password</span>
        <input type="password" v-model="user.password"/>
      </label>
      <button>Login</button>
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
      },
      message: 'chrome browser',
      msg2: 'something here',
      x: [],
      pick: '',
      selected: [],
      arr: [
        {text: `A`, value: 1},
        {text: `B`, value: 2},
        {text: `C`, value: 3},
        {text: `D`, value: 4}
      ]
    }
  },
  components: {},
  methods:{
    onSubmit(){
      console.log(this.user)
    }
  }
}
</script>



