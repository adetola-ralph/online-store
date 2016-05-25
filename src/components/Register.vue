<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <form>
        <div class="form-group">
          <label for="firstname">FirstName:</label>
          <input type="text" class="form-control" id="firstname" placeholder="First Name">
        </div>
        <div class="form-group">
          <label for="lastname">LastName:</label>
          <input type="text" class="form-control" id="lastname" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email_field" placeholder="Email Address">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password_field" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="password">Confirm Password</label>
          <input type="password" class="form-control" id="confirm_password_field" placeholder="Confirm Password">
        </div>
        <button type="submit" class="btn btn-default" v-on:click="register">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

import firebaseApp from '../firebase';

export default{
  data() {
    return {
      email_address: '',
      password: '',
      authenticated: false,
    };
  },
  methods: {
    register() {
      firebaseApp.firebaseAuth.createUserWithEmailAndPassword(this.email_address, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorCode+" "+errorMessage);
      });
    },
  },
};
</script>
