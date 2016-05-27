<template>
  <div class="row">
    <div class="col-sm-6 col-sm-push-3 col-xs-12">
      <div class="panel">
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email_field" placeholder="Email Address" v-model="email_address">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password_field" placeholder="Password" v-model="password">
            </div>
            <p class="text-center text-danger"><strong>{{error_message}}</strong></p>
            <button type="submit" class="btn btn-primary" v-on:click.stop.prevent="login">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebaseApp from '../firebase';
  import VueRouter from '../router/index';

  const router = VueRouter.router;

  export default{
    data() {
      return {
        email_address: '',
        password: '',
        authenticated: false,
        error_message: '',
      };
    },
    methods: {
      login() {
        if (this.email_address.length > 0 && this.password.length > 0) {
          firebaseApp.
          firebaseAuth.
          signInWithEmailAndPassword(this.email_address, this.password).catch((error) => {
            // Handle Errors here.
            this.errorMessage(error.message);
          }).then((user) => {
            // console.log(user.uid);
            this.getUser(user.uid);
          });
        } else {
          this.error_message = 'You have empty fields';
        }
      },
      getUser(uid) {
        firebaseApp.firebaseDB.ref(`/users/${uid}`).once('value').then((snapshot) => {
          // console.log(snapshot.val());
          this.authenticated = true;
          window.localStorage.setItem('online_store_uid', uid);
          window.localStorage.setItem('online_store_user_authenticated', true);
          window.localStorage.setItem('online_store_user_name', snapshot.val().name.split(' ')[0]);
          window.localStorage.setItem('online_store_user_email', snapshot.val().email);
          location.reload();
          router.go({ path: '/shops' });
        });
      },
      errorMessage(errorMessage) {
        this.error_message = errorMessage;
      },
      checkAuth() {
        const authCondition = localStorage.getItem('online_store_user_authenticated');

        if (authCondition !== null && authCondition) {
          router.go({ path: '/shops' });
        }
      },
    },
    ready() {
      this.checkAuth();
    },
    computed: {
    },
  };
</script>
