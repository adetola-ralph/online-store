<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email_field" placeholder="Email Address" v-model="email_address">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password_field" placeholder="Password" v-model="password">
        </div>
        <p class="hidden text-center">Wrong Details, please enter a correct email or password</p>
        <button type="submit" class="btn btn-default" v-on:click="login">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        email_address: '',
        password: '',
      };
    },
    methods: {
      login() {
        firebase.auth().signInWithEmailAndPassword(email_address, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          });
      },
    },
  };
</script>
